import { useInView } from '@/hooks/useInView';

// ─── Dados de mock para o painel ────────────────────────────────────────────

const mockCards = [
  { label: 'Tempo médio REAP', value: '20s', valueColor: 'text-emerald-600' },
  { label: 'Processamento em lote', value: '5 sócios', valueColor: 'text-blue-600' },
  { label: 'Boletos gerados', value: '126', valueColor: 'text-amber-600' },
  { label: 'Seguro identificado', value: '48 pagos', valueColor: 'text-emerald-600' },
] as const;

const mockRows = [
  { name: 'Ana da Silva', cpf: '123.456.789-01', reap: { label: 'Enviado', cls: 'bg-emerald-50 text-emerald-800' }, seguro: { label: 'Recebeu', cls: 'text-emerald-600' } },
  { name: 'João Costa', cpf: '234.567.890-12', reap: { label: 'Pendente', cls: 'bg-amber-50 text-amber-800' }, seguro: { label: 'Aguardando', cls: 'text-amber-600' } },
  { name: 'Maria Ferreira', cpf: '345.678.901-23', reap: { label: 'Em lote', cls: 'bg-emerald-50 text-emerald-800' }, seguro: { label: 'Conferindo', cls: 'text-blue-600' } },
] as const;

const stats = [
  { num: '20s', label: 'Para fazer um REAP' },
  { num: 'Lote', label: 'Boletos e REAP em massa' },
  { num: '5x', label: 'Capaz de substituir até 5 funcionários' },
] as const;

// ─── Componente ─────────────────────────────────────────────────────────────

export function CompleteManagement() {
  const [leftRef, leftVisible] = useInView<HTMLDivElement>();
  const [rightRef, rightVisible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-white overflow-hidden py-20 lg:py-28 snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ── Coluna esquerda ── */}
        <div
          ref={leftRef}
          className={`will-animate-left ${leftVisible ? 'is-visible' : ''}`}
        >
          {/* Título */}
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6">
            Mais resultado com{' '}
            <span className="text-emerald-600">menos trabalho manual</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl font-light">
            O ecossistema do SIGESS automatiza tarefas que normalmente consomem várias pessoas na
            secretaria. REAP, boletos, defeso, controle financeiro e conferências passam a acontecer
            com muito mais velocidade, menos erro e mais previsibilidade.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-200">
            {stats.map((s) => (
              <div key={s.num}>
                <p className="font-heading text-3xl font-extrabold text-emerald-600 tracking-tight leading-none mb-1">
                  {s.num}
                </p>
                <p className="text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Coluna direita — mockup ── */}
        <div
          ref={rightRef}
          className={`will-animate-right ${rightVisible ? 'is-visible' : ''}`}
        >
          {/* Moldura dark do "monitor" */}
          <div className="bg-slate-900 rounded-2xl p-1 shadow-[0_32px_80px_rgba(15,23,42,0.18)]">
            {/* Barra de título estilo macOS */}
            <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Área interna clara */}
            <div className="bg-slate-50 rounded-b-xl p-4">
              {/* Header do mockup */}
              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between mb-3 border border-slate-200">
                <span className="font-heading text-base font-bold text-slate-800">
                  Central de Automação
                </span>
                <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                  Ativa
                </span>
              </div>

              {/* Grid de métricas 2×2 */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {mockCards.map((c) => (
                  <div key={c.label} className="bg-white rounded-xl p-3 border border-slate-200">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {c.label}
                    </p>
                    <p className={`font-heading text-xl font-extrabold tracking-tight ${c.valueColor}`}>
                      {c.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini tabela */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Cabeçalho */}
                <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 bg-slate-50 px-3 py-2 border-b border-slate-200">
                  {['Sócio', 'REAP', 'Seguro'].map((h) => (
                    <span key={h} className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Linhas */}
                {mockRows.map((row, i) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-[2fr_1fr_1fr] gap-2 items-center px-3 py-2 ${
                      i < mockRows.length - 1 ? 'border-b border-slate-100' : ''
                    }`}
                  >
                    <div>
                      <p className="text-[11px] font-semibold text-slate-800">{row.name}</p>
                      <p className="text-[10px] text-slate-400 font-mono">{row.cpf}</p>
                    </div>
                    <span className={`inline-flex items-center justify-center text-[9px] font-bold px-2 py-0.5 rounded-full ${row.reap.cls}`}>
                      {row.reap.label}
                    </span>
                    <span className={`text-[10px] font-bold ${row.seguro.cls}`}>
                      {row.seguro.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
