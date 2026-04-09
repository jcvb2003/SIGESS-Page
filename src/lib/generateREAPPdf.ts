/**
 * generateREAPPdf.ts
 *
 * Gera um PDF A4 com comprovantes REAP no formato grid 2×5,
 * replicando o layout do modelo Excel original.
 *
 * Cada comprovante contém:
 * - Título "RELATÓRIO DE EXERCÍCIO DA ATIVIDADE PESQUEIRA (REAP) 2025/2026"
 * - QR Code (extraído do PDF REAP original)
 * - Nome e CPF do pescador
 * - Data de envio (hoje)
 * - Logo PesqBrasil (fixo) + Logo da entidade (variável)
 */

import { jsPDF } from 'jspdf';

// ─── Tipos ──────────────────────────────────────────────────────────

export interface REAPEntry {
  qrBase64: string;
  nome: string;
  cpf: string;
}

export interface REAPPdfOptions {
  entries: REAPEntry[];
  pesqBrasilLogo: string;       // base64 data URL
  entityLogo: string | null;    // base64 data URL ou null
}

// ─── Constantes de Layout (mm) ──────────────────────────────────────

const PAGE_W = 210;
const PAGE_H = 297;
const COLS = 2;
const ROWS = 5;
const MARGIN_X = 5;
const MARGIN_Y = 5;
const GAP_X = 4;
const GAP_Y = 2;

const SLOT_W = (PAGE_W - MARGIN_X * 2 - GAP_X * (COLS - 1)) / COLS;
const SLOT_H = (PAGE_H - MARGIN_Y * 2 - GAP_Y * (ROWS - 1)) / ROWS;

// Proporções internas do comprovante (em fração do slot)
const TITLE_H = 0.20;       // 20% para o título (2 linhas)
const DATA_H = 0.52;        // 52% para QR + Nome + CPF
const FOOTER_H = 0.28;      // 28% para ENVIADO EM + logos

const QR_W_FRAC = 0.30;     // 30% da largura do slot para o QR code
const BORDER = 0.3;         // espessura da borda em mm

// Cores
const BLUE = { r: 21, g: 91, b: 203 };     // #155BCB
const BLACK = { r: 0, g: 0, b: 0 };
const GRAY_BORDER = { r: 180, g: 180, b: 180 };

// ─── Helpers ────────────────────────────────────────────────────────

function formatDate(): string {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

/**
 * Extrai o tipo de imagem (PNG, JPEG) e o base64 puro de um data URL.
 */
function parseDataUrl(dataUrl: string): { format: string; data: string } {
  const match = dataUrl.match(/^data:image\/(png|jpe?g|gif|webp);base64,(.+)$/i);
  if (match) {
    const fmt = match[1].toUpperCase().replace('JPG', 'JPEG');
    return { format: fmt, data: match[2] };
  }
  // Fallback: assume PNG e trata como raw base64
  return { format: 'PNG', data: dataUrl.replace(/^data:.*?;base64,/, '') };
}

/**
 * Adiciona imagem com segurança, tratando possíveis erros.
 */
function safeAddImage(
  doc: jsPDF,
  dataUrl: string,
  boxX: number,
  boxY: number,
  boxW: number,
  boxH: number
): void {
  try {
    const { format, data } = parseDataUrl(dataUrl);
    const props = doc.getImageProperties(data);
    const imgRatio = props.width / props.height;
    const boxRatio = boxW / boxH;

    let drawW = boxW;
    let drawH = boxH;

    if (imgRatio > boxRatio) {
      drawH = boxW / imgRatio;
    } else {
      drawW = boxH * imgRatio;
    }

    const drawX = boxX + (boxW - drawW) / 2;
    const drawY = boxY + (boxH - drawH) / 2;

    doc.addImage(data, format, drawX, drawY, drawW, drawH);
  } catch {
    // Se falhar, desenha um placeholder
    doc.setDrawColor(GRAY_BORDER.r, GRAY_BORDER.g, GRAY_BORDER.b);
    doc.setFillColor(245, 245, 245);
    doc.rect(boxX, boxY, boxW, boxH, 'FD');
    doc.setFontSize(6);
    doc.setTextColor(150, 150, 150);
    doc.text('Imagem indisponível', boxX + boxW / 2, boxY + boxH / 2, { align: 'center' });
  }
}

// ─── Desenho de um comprovante ──────────────────────────────────────

function drawSlot(
  doc: jsPDF,
  entry: REAPEntry,
  slotX: number,
  slotY: number,
  pesqBrasilLogo: string,
  entityLogo: string | null
): void {
  const pad = 2; // padding interno

  // ── Borda externa do slot ──
  doc.setDrawColor(GRAY_BORDER.r, GRAY_BORDER.g, GRAY_BORDER.b);
  doc.setLineWidth(BORDER);
  doc.rect(slotX, slotY, SLOT_W, SLOT_H);

  // ── Dimensões das seções ──
  const titleH = SLOT_H * TITLE_H;
  const dataH = SLOT_H * DATA_H;
  const footerH = SLOT_H * FOOTER_H;

  const titleY = slotY;
  const dataY = slotY + titleH;
  const footerY = slotY + titleH + dataH;

  // ══════════════════════════════════════════════════════════════════
  // 1. TÍTULO
  // ══════════════════════════════════════════════════════════════════
  doc.setDrawColor(GRAY_BORDER.r, GRAY_BORDER.g, GRAY_BORDER.b);
  doc.setLineWidth(BORDER);
  doc.line(slotX, titleY + titleH, slotX + SLOT_W, titleY + titleH); // separador inferior

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(BLACK.r, BLACK.g, BLACK.b);

  const titleText = 'RELATÓRIO DE EXERCÍCIO DA ATIVIDADE PESQUEIRA\n(REAP) 2025/2026';
  doc.text(titleText, slotX + SLOT_W / 2, titleY + titleH / 2, {
    align: 'center',
    baseline: 'middle',
  });

  // ══════════════════════════════════════════════════════════════════
  // 2. SEÇÃO DE DADOS (QR Code + Nome + CPF)
  // ══════════════════════════════════════════════════════════════════
  const qrW = SLOT_W * QR_W_FRAC;
  const dataRight = slotX + qrW;

  // Separador vertical entre QR e dados
  doc.line(dataRight, dataY, dataRight, dataY + dataH);
  // Separador inferior da seção de dados
  doc.line(slotX, footerY, slotX + SLOT_W, footerY);

  // ── QR Code ──
  const qrPad = 2;
  const qrSize = Math.min(qrW - qrPad * 2, dataH - qrPad * 2);
  const qrX = slotX + (qrW - qrSize) / 2;
  const qrY = dataY + (dataH - qrSize) / 2;

  if (entry.qrBase64) {
    safeAddImage(doc, `data:image/png;base64,${entry.qrBase64}`, qrX, qrY, qrSize, qrSize);
  }

  // ── Campos de texto (Nome e CPF) ──
  const fieldX = dataRight + pad;
  const fieldW = SLOT_W - qrW - pad * 2;
  const rowH = dataH / 4; // 4 linhas: label NOME, valor nome, label CPF, valor CPF

  // Separadores horizontais entre os 4 campos
  for (let i = 1; i < 4; i++) {
    doc.line(dataRight, dataY + rowH * i, slotX + SLOT_W, dataY + rowH * i);
  }

  // Label NOME
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(BLUE.r, BLUE.g, BLUE.b);
  doc.text('NOME', dataRight + (SLOT_W - qrW) / 2, dataY + rowH * 0.5, {
    align: 'center',
    baseline: 'middle',
  });

  // Valor nome
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(BLACK.r, BLACK.g, BLACK.b);
  const nomeMaxW = fieldW - 2;
  const nomeTruncated = truncateText(doc, entry.nome, nomeMaxW);
  doc.text(nomeTruncated, fieldX + fieldW / 2, dataY + rowH * 1.5, {
    align: 'center',
    baseline: 'middle',
  });

  // Label CPF
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(BLUE.r, BLUE.g, BLUE.b);
  doc.text('CPF', dataRight + (SLOT_W - qrW) / 2, dataY + rowH * 2.5, {
    align: 'center',
    baseline: 'middle',
  });

  // Valor CPF
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(BLACK.r, BLACK.g, BLACK.b);
  doc.text(entry.cpf, dataRight + (SLOT_W - qrW) / 2, dataY + rowH * 3.5, {
    align: 'center',
    baseline: 'middle',
  });

  // ══════════════════════════════════════════════════════════════════
  // 3. RODAPÉ (ENVIADO EM + logos)
  // ══════════════════════════════════════════════════════════════════
  const enviadoW = qrW; // mesma largura da coluna do QR
  const logosW = SLOT_W - enviadoW;

  // Separador vertical entre "ENVIADO EM" e logos
  doc.line(slotX + enviadoW, footerY, slotX + enviadoW, slotY + SLOT_H);

  // "ENVIADO EM:" + data
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6);
  doc.setTextColor(BLACK.r, BLACK.g, BLACK.b);
  doc.text('ENVIADO EM:', slotX + enviadoW / 2, footerY + footerH * 0.35, {
    align: 'center',
    baseline: 'middle',
  });
  doc.text(formatDate(), slotX + enviadoW / 2, footerY + footerH * 0.65, {
    align: 'center',
    baseline: 'middle',
  });

  // Logos lado a lado
  const logoAreaX = slotX + enviadoW + pad;
  const logoAreaW = logosW - pad * 2;
  const logoH = footerH - pad * 2;
  const logoY = footerY + pad;

  // Separador vertical entre os dois logos
  const logoMidX = slotX + enviadoW + logosW / 2;
  doc.line(logoMidX, footerY, logoMidX, slotY + SLOT_H);

  // Logo PesqBrasil (esquerda)
  const singleLogoW = logoAreaW / 2 - pad;
  safeAddImage(doc, pesqBrasilLogo, logoAreaX, logoY, singleLogoW, logoH);

  // Logo Entidade (direita)
  if (entityLogo) {
    const entLogoX = logoMidX + pad;
    safeAddImage(doc, entityLogo, entLogoX, logoY, singleLogoW, logoH);
  }
}

/**
 * Trunca texto para caber na largura máxima.
 */
function truncateText(doc: jsPDF, text: string, maxWidth: number): string {
  const width = doc.getTextWidth(text);
  if (width <= maxWidth) return text;

  let truncated = text;
  while (doc.getTextWidth(truncated + '…') > maxWidth && truncated.length > 0) {
    truncated = truncated.slice(0, -1);
  }
  return truncated + '…';
}

// ─── Função principal ───────────────────────────────────────────────

/**
 * Gera o PDF com os comprovantes e retorna a URL original renderizada em Blob.
 */
export function generateREAPPdf(options: REAPPdfOptions): string {
  const { entries, pesqBrasilLogo, entityLogo } = options;

  if (entries.length === 0) {
    throw new Error('Nenhum comprovante para gerar.');
  }

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const slotsPerPage = COLS * ROWS;

  for (let i = 0; i < entries.length; i++) {
    // Se ultrapassar 10 por página, adicionar nova página
    const pageSlot = i % slotsPerPage;
    if (i > 0 && pageSlot === 0) {
      doc.addPage();
    }

    const col = pageSlot % COLS;
    const row = Math.floor(pageSlot / COLS);

    const slotX = MARGIN_X + col * (SLOT_W + GAP_X);
    const slotY = MARGIN_Y + row * (SLOT_H + GAP_Y);

    drawSlot(doc, entries[i], slotX, slotY, pesqBrasilLogo, entityLogo);
  }

  // Retornar a string Blob para o componente renderizar e driblar o bloqueador
  const blobUrl = doc.output('bloburl');
  return String(blobUrl);
}
