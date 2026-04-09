import { useState, useRef, useEffect, useCallback } from 'react';
import {
  FileUp,
  Trash2,
  Play,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  QrCode,
  User,
  CreditCard,
  ImageIcon,
  Link2,
  X as XIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as pdfjs from 'pdfjs-dist';
import { generateREAPPdf } from '@/lib/generateREAPPdf';
import type { REAPEntry } from '@/lib/generateREAPPdf';
import {
  getCachedLogo,
  setCachedLogo,
  clearCachedLogo,
  fileToBase64,
  urlToBase64,
  loadPesqBrasilLogo,
} from '@/lib/logoCache';

// Configurar o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// ─── Tipos ──────────────────────────────────────────────────────────

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  try {
    return JSON.stringify(error);
  } catch {
    return "Erro desconhecido";
  }
}

interface FileStatus {
  file: File;
  status: 'pending' | 'processing' | 'extracting' | 'completed' | 'error';
  nome?: string;
  cpf?: string;
  qrBase64?: string;
  error?: string;
}

// ─── Extração de dados do PDF ───────────────────────────────────────

function extractQRCode(pdf: pdfjs.PDFDocumentProxy): Promise<string> {
  return pdf.getPage(1).then(async (page) => {
    const scale = 3;
    const vp = page.getViewport({ scale });
    const cv = document.createElement('canvas');
    cv.width = vp.width;
    cv.height = vp.height;
    const ctx = cv.getContext('2d');
    if (!ctx) throw new TypeError('Could not get canvas context');

    await page.render({ canvasContext: ctx, viewport: vp }).promise;

    const sz = Math.round(cv.width * 0.18);
    const cx = cv.width - sz - Math.round(cv.width * 0.04);
    const cy = cv.height - sz - Math.round(cv.height * 0.04);

    const tmp = document.createElement('canvas');
    tmp.width = tmp.height = sz;
    const tmpCtx = tmp.getContext('2d');
    if (!tmpCtx) throw new TypeError('Could not get temporary canvas context');
    tmpCtx.drawImage(cv, cx, cy, sz, sz, 0, 0, sz, sz);

    const bounds = findImageBounds(tmpCtx, sz);
    const finalData = cropAndResize(tmp, bounds);

    return finalData.split(',')[1];
  });
}

function findImageBounds(ctx: CanvasRenderingContext2D, size: number) {
  const d = ctx.getImageData(0, 0, size, size).data;
  const bounds = { x0: size, x1: 0, y0: size, y1: 0 };

  for (let py = 0; py < size; py++) {
    const rowOffset = py * size;
    for (let px = 0; px < size; px++) {
      const i = (rowOffset + px) * 4;
      if ((d[i] + d[i + 1] + d[i + 2]) / 3 < 200) {
        if (px < bounds.x0) bounds.x0 = px;
        if (px > bounds.x1) bounds.x1 = px;
        if (py < bounds.y0) bounds.y0 = py;
        if (py > bounds.y1) bounds.y1 = py;
      }
    }
  }
  return bounds;
}

function cropAndResize(
  source: HTMLCanvasElement,
  bounds: { x0: number; x1: number; y0: number; y1: number }
) {
  const m = 6;
  const size = source.width;
  const x0 = Math.max(0, bounds.x0 - m);
  const y0 = Math.max(0, bounds.y0 - m);
  const x1 = Math.min(size - 1, bounds.x1 + m);
  const y1 = Math.min(size - 1, bounds.y1 + m);

  const out = document.createElement('canvas');
  out.width = 300;
  out.height = 300;
  const oc = out.getContext('2d');
  if (!oc) throw new TypeError('Could not get output canvas context');

  oc.fillStyle = '#fff';
  oc.fillRect(0, 0, 300, 300);
  oc.imageSmoothingEnabled = false;
  oc.drawImage(source, x0, y0, x1 - x0, y1 - y0, 0, 0, 300, 300);

  return out.toDataURL('image/png');
}

async function extractTextData(
  pdf: pdfjs.PDFDocumentProxy
): Promise<{ nome: string; cpf: string }> {
  let text = '';
  for (let p = 1; p <= pdf.numPages; p++) {
    const pg = await pdf.getPage(p);
    const textContent = await pg.getTextContent();
    const items = textContent.items as Array<{ str: string }>;
    text += items.map((i) => i.str).join(' ') + '\n';
  }

  const nameRegex = /Nome[\s:]+([A-ZÁÉÍÓÚÀÂÊÔÃÕÇ ]+?)(?=Nº|CPF|Data|\n)/i;
  const cpfRegex = /CPF[\s:]+(\d{3}\.\d{3}\.\d{3}-\d{2})/i;

  const nM = nameRegex.exec(text);
  const cM = cpfRegex.exec(text);

  return {
    nome: nM ? nM[1].trim() : '',
    cpf: cM ? cM[1].trim() : '—',
  };
}

async function extractData(fileStatus: FileStatus): Promise<Partial<FileStatus>> {
  const buf = await fileStatus.file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: buf }).promise;

  const qrBase64 = await extractQRCode(pdf);
  const { nome, cpf } = await extractTextData(pdf);

  return {
    qrBase64,
    nome: nome || fileStatus.file.name.replaceAll('.pdf', '').replaceAll('_', ' '),
    cpf,
  };
}

// ─── Componente ─────────────────────────────────────────────────────

export function REAPGenerator() {
  const [files, setFiles] = useState<FileStatus[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [overallProgress, setOverallProgress] = useState(0);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | null }>({
    text: '',
    type: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pdfReadyUrl, setPdfReadyUrl] = useState<string | null>(null);

  // ── Logos ──
  const [pesqBrasilLogo, setPesqBrasilLogo] = useState<string | null>(null);
  const [entityLogo, setEntityLogo] = useState<string | null>(getCachedLogo('entity'));
  const [entityLogoUrl, setEntityLogoUrl] = useState('');
  const [isLoadingLogo, setIsLoadingLogo] = useState(false);
  const entityLogoInputRef = useRef<HTMLInputElement>(null);

  // Carregar logo PesqBrasil no mount
  useEffect(() => {
    loadPesqBrasilLogo()
      .then(setPesqBrasilLogo)
      .catch(() => {
        setMessage({
          text: 'Não foi possível carregar o logo do PesqBrasil. Verifique sua conexão.',
          type: 'error',
        });
      });
  }, []);

  // ── Handlers de arquivos PDF ──────────────────────────────────────

  const handleFileAdd = useCallback(
    (newFiles: File[]) => {
      const validFiles = newFiles
        .filter((f) => f.name.endsWith('.pdf'))
        .slice(0, 10 - files.length);

      if (validFiles.length === 0) return;

      setFiles((prev) => [
        ...prev,
        ...validFiles.map((f) => ({ file: f, status: 'pending' as const })),
      ]);
      setPdfReadyUrl(null);
      setMessage({ text: '', type: null });
    },
    [files.length]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setOverallProgress(0);
    setMessage({ text: '', type: null });
  }, []);

  // ── Handlers de logo da entidade ──────────────────────────────────

  const handleEntityLogoUpload = useCallback(async (file: File) => {
    try {
      setIsLoadingLogo(true);
      const base64 = await fileToBase64(file);
      setEntityLogo(base64);
      setCachedLogo('entity', base64);
    } catch {
      setMessage({ text: 'Erro ao carregar logo da entidade.', type: 'error' });
    } finally {
      setIsLoadingLogo(false);
    }
  }, []);

  const handleEntityLogoUrl = useCallback(async () => {
    if (!entityLogoUrl.trim()) return;
    try {
      setIsLoadingLogo(true);
      const base64 = await urlToBase64(entityLogoUrl.trim());
      setEntityLogo(base64);
      setCachedLogo('entity', base64);
      setEntityLogoUrl('');
    } catch {
      setMessage({ text: 'Erro ao carregar logo da URL. Verifique o endereço.', type: 'error' });
    } finally {
      setIsLoadingLogo(false);
    }
  }, [entityLogoUrl]);

  const clearEntityLogo = useCallback(() => {
    setEntityLogo(null);
    clearCachedLogo('entity');
  }, []);

  // ── Processamento e geração de PDF ────────────────────────────────

  const runProcessing = useCallback(async () => {
    if (!pesqBrasilLogo) {
      setMessage({ text: 'Logo do PesqBrasil ainda não foi carregado.', type: 'error' });
      return;
    }

    setPdfReadyUrl(null);
    setIsProcessing(true);
    setOverallProgress(0);
    setMessage({ text: '', type: null });

    const updatedFiles = [...files];
    const results: REAPEntry[] = [];

    for (let i = 0; i < updatedFiles.length; i++) {
      updatedFiles[i].status = 'processing';
      setFiles([...updatedFiles]);

      try {
        const result = await extractData(updatedFiles[i]);
        updatedFiles[i] = { ...updatedFiles[i], ...result, status: 'completed' };
        results.push({
          qrBase64: result.qrBase64 ?? '',
          nome: result.nome ?? '',
          cpf: result.cpf ?? '—',
        });
      } catch (e: unknown) {
        updatedFiles[i].status = 'error';
        updatedFiles[i].error = getErrorMessage(e);
      }

      setFiles([...updatedFiles]);
      setOverallProgress(((i + 1) / updatedFiles.length) * 100);
    }

    // Gerar PDF com os resultados
    if (results.length > 0) {
      try {
        const blobUrl = generateREAPPdf({
          entries: results,
          pesqBrasilLogo,
          entityLogo,
        });

        setPdfReadyUrl(blobUrl);

        // Tenta abrir direto, se o navegador bloquear cai no catch silencioso e o usuário ainda tem o botão.
        const opened = window.open(blobUrl, '_blank');
        if (opened) {
          setMessage({ text: `Processamento concluído com ${results.length} registro(s). A nova aba foi aberta!`, type: 'success' });
        } else {
          setMessage({ text: `Janela bloqueada pelo navegador. Processamento concluído com ${results.length} registro(s). Clique no botão abaixo para abrir o PDF!`, type: 'success' });
        }

      } catch (e: unknown) {
        setMessage({ text: `Erro ao gerar PDF: ${getErrorMessage(e)}`, type: 'error' });
      }
    } else {
      setMessage({ text: 'Nenhum PDF foi processado com sucesso.', type: 'error' });
    }

    setIsProcessing(false);
  }, [files, pesqBrasilLogo, entityLogo]);

  // ── Render ────────────────────────────────────────────────────────

  return (
    <Card className="w-full max-w-4xl mx-auto border-emerald-100 shadow-xl overflow-hidden">
      <CardHeader className="bg-emerald-50/50 border-b border-emerald-100/50">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <QrCode className="w-6 h-6 text-emerald-600" />
              Gerador de comprovante simplificado
            </CardTitle>
            <CardDescription className="text-slate-600">
              Simplifique seu comprovante facilitando a consulta e economizando recursos.
            </CardDescription>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wider">
              PDF · A4
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-8">
        {/* ═══ Logo da Entidade ═══ */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            Logo da Entidade
            <span className="text-xs font-normal text-slate-400">(opcional)</span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 items-start">
            {/* Preview */}
            <div
              className={cn(
                'w-20 h-20 rounded-xl border-2 border-dashed flex items-center justify-center flex-shrink-0 overflow-hidden transition-all',
                entityLogo ? 'border-emerald-300 bg-white' : 'border-slate-200 bg-slate-50'
              )}
            >
              {entityLogo ? (
                <img
                  src={entityLogo}
                  alt="Logo da entidade"
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <ImageIcon className="w-8 h-8 text-slate-300" />
              )}
            </div>

            <div className="flex-1 space-y-2 w-full">
              {/* Upload de arquivo */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => entityLogoInputRef.current?.click()}
                  disabled={isLoadingLogo}
                  className="text-xs"
                >
                  <FileUp className="w-3.5 h-3.5 mr-1.5" />
                  Upload
                </Button>
                {entityLogo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearEntityLogo}
                    className="text-xs text-slate-400 hover:text-rose-500"
                  >
                    <XIcon className="w-3.5 h-3.5 mr-1" />
                    Remover
                  </Button>
                )}
              </div>

              {/* URL alternativa */}
              <div className="flex gap-2">
                <input
                  type="url"
                  value={entityLogoUrl}
                  onChange={(e) => setEntityLogoUrl(e.target.value)}
                  placeholder="Ou cole a URL da imagem..."
                  className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleEntityLogoUrl();
                  }}
                  aria-label="URL do logo da entidade"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEntityLogoUrl}
                  disabled={!entityLogoUrl.trim() || isLoadingLogo}
                  className="text-xs"
                >
                  {isLoadingLogo ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Link2 className="w-3.5 h-3.5" />
                  )}
                </Button>
              </div>

              <input
                type="file"
                id="entity-logo-upload"
                ref={entityLogoInputRef}
                className="hidden"
                accept="image/png,image/jpeg,image/webp"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleEntityLogoUpload(file);
                  e.target.value = '';
                }}
                aria-label="Upload do logo da entidade"
              />
            </div>
          </div>
        </div>

        {/* ═══ Dropzone ═══ */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFileAdd(Array.from(e.dataTransfer.files));
          }}
          className="w-full group relative flex flex-col items-center justify-center py-12 px-6 border-2 border-dashed border-emerald-200 bg-emerald-50/20 hover:bg-emerald-50/50 hover:border-emerald-400 rounded-2xl cursor-pointer transition-all duration-300"
          aria-label="Adicionar arquivos PDF"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
            <FileUp className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-lg font-semibold text-slate-800">Solte os PDFs aqui</p>
            <p className="text-sm text-slate-500">ou clique para selecionar (máx. 10 arquivos)</p>
          </div>
        </button>
        <input
          type="file"
          id="reap-pdf-upload"
          aria-label="Upload de arquivos PDF do REAP"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf"
          multiple
          onChange={(e) => e.target.files && handleFileAdd(Array.from(e.target.files))}
        />

        {/* ═══ File List ═══ */}
        {files.length > 0 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700 font-mono">
                ARQUIVOS SELECIONADOS ({files.length}/10)
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                className="text-slate-500 hover:text-rose-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Tudo
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {files.map((f, i) => (
                <div
                  key={`${f.file.name}-${i}`}
                  className={cn(
                    'relative flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white shadow-sm transition-all',
                    f.status === 'completed' && 'border-emerald-200 bg-emerald-50/30',
                    f.status === 'error' && 'border-rose-200 bg-rose-50/30'
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                        f.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-slate-100 text-slate-500'
                      )}
                    >
                      {renderStatusIcon(f.status)}
                    </div>
                    <div className="truncate">
                      <p className="text-sm font-medium text-slate-800 truncate">{f.file.name}</p>
                      {f.status === 'completed' && (
                        <p className="text-[10px] text-emerald-600 font-mono uppercase tracking-tighter">
                          {f.cpf} • OK
                        </p>
                      )}
                    </div>
                  </div>
                  {!isProcessing && (
                    <button
                      onClick={() => removeFile(i)}
                      className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                      title="Remover arquivo"
                      aria-label={`Remover ${f.file.name}`}
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ Progress Bar ═══ */}
        {(isProcessing || overallProgress > 0) && (
          <div className="space-y-2 animate-fade-in">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>PROGRESSO TOTAL</span>
              <span>{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-2 bg-slate-100" />
          </div>
        )}

        {/* ═══ Messaging ═══ */}
        {message.text && (
          <div
            className={cn(
              'p-4 rounded-xl border flex items-start gap-3 animate-fade-in-up',
              message.type === 'success'
                ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
                : 'bg-rose-50 border-rose-100 text-rose-800'
            )}
          >
            {message.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{message.text}</span>
          </div>
        )}

        {/* ═══ Botão Principal ═══ */}
        <div className="pt-4 flex flex-col gap-3">
          {pdfReadyUrl ? (
            <Button
              onClick={() => window.open(pdfReadyUrl, '_blank')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 shadow-emerald-200 text-base shadow-lg animate-pulse"
            >
              <FileText className="w-5 h-5 mr-2" />
              Abrir PDF Gerado
            </Button>
          ) : (
            <Button
              onClick={runProcessing}
              disabled={isProcessing || files.length === 0 || !pesqBrasilLogo}
              className="w-full bg-slate-800 hover:bg-slate-900 py-6 text-base"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processando PDFs (mantenha na aba)...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Extrair dados e Gerar
                </>
              )}
            </Button>
          )}

          {pdfReadyUrl && (
            <Button variant="ghost" className="text-slate-500" onClick={clearAll}>
              Gerar novos comprovantes
            </Button>
          )}
        </div>
      </CardContent>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <User className="w-3.5 h-3.5" />
          <span>Nome Automatizado</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <CreditCard className="w-3.5 h-3.5" />
          <span>Extração de CPF</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <QrCode className="w-3.5 h-3.5" />
          <span>Recorte de QR Code</span>
        </div>
      </div>
    </Card>
  );
}

// ─── Helpers de renderização ────────────────────────────────────────

function renderStatusIcon(status: FileStatus['status']) {
  if (status === 'processing') return <Loader2 className="w-5 h-5 animate-spin" />;
  if (status === 'completed') return <CheckCircle2 className="w-5 h-5" />;
  if (status === 'error') return <AlertCircle className="w-5 h-5 text-rose-500" />;
  return <FileText className="w-5 h-5" />;
}
