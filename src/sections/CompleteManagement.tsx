import { useState, useEffect } from 'react';
import { Lock } from '@phosphor-icons/react';
import { useInView } from '@/hooks/useInView';

// Abas de portais governamentais automatizados pelo Robô
const portalTabs = [
  {
    id: 'gov',
    label: 'Acesso Gov.br',
    sub: 'Autenticação',
    img: '/images/gov-login.jpg',
    portal: 'sso.acesso.gov.br',
    status: 'Fazendo login seguro no Gov.br com o CPF do sócio...'
  },
  {
    id: 'pesqbrasil',
    label: 'PesqBrasil',
    sub: 'Cadastro RGP',
    img: '/images/pesqbrasil-cadastro.jpg',
    portal: 'pescadorprofissional.mpa.gov.br',
    status: 'Preenchendo dados do pescador no PesqBrasil...'
  },
  {
    id: 'mte',
    label: 'MTE Defeso',
    sub: 'Seguro Defeso',
    img: '/images/mte-defeso.jpg',
    portal: 'servicos.mte.gov.br',
    status: 'Digitando requerimento de Seguro Defeso automaticamente...'
  },
  {
    id: 'esocial',
    label: 'eSocial / GPS',
    sub: 'Guias DAE',
    img: '/images/esocial-login.jpg',
    portal: 'login.esocial.gov.br',
    status: 'Gerando guias e boletos GPS em lote...'
  }
];

const stats = [
  { num: '20s', label: 'Para fazer um REAP' },
  { num: 'Lote', label: 'Boletos e REAP em massa' },
  { num: '5x', label: 'Capaz de substituir até 5 funcionários' },
] as const;

// ─── Componente ─────────────────────────────────────────────────────────────

export function CompleteManagement() {
  const [leftRef, leftVisible] = useInView<HTMLDivElement>();
  const [rightRef, rightVisible] = useInView<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState('gov');

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = portalTabs.findIndex((tab) => tab.id === activeTab);
      const nextIndex = (currentIndex + 1) % portalTabs.length;
      setActiveTab(portalTabs[nextIndex].id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentPortal = portalTabs.find(p => p.id === activeTab) ?? portalTabs[0];

  return (
    <section className="bg-white overflow-hidden min-h-screen flex items-center py-10 lg:py-14 snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

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

        {/* ── Coluna direita — mockup do navegador ── */}
        <div
          ref={rightRef}
          className={`will-animate-right ${rightVisible ? 'is-visible' : ''}`}
        >
          {/* Moldura do Navegador */}
          <div className="bg-slate-800 rounded-2xl p-1.5 shadow-[0_32px_80px_rgba(15,23,42,0.18)] border border-slate-700">
            {/* Barra de Título / Abas do Navegador */}
            <div className="px-3 pt-2 pb-0 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                {/* Botões do macOS */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              {/* Abas */}
              <div className="flex gap-1 overflow-x-auto scrollbar-none pt-1">
                {portalTabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center px-4 py-1.5 rounded-t-md text-center min-w-[90px] sm:min-w-[110px] transition-all ${isActive
                        ? 'bg-slate-200 text-slate-800 shadow-sm'
                        : 'bg-slate-900/40 text-slate-400 hover:bg-slate-900/60 hover:text-slate-300'
                        }`}
                    >
                      <span className="text-[10px] font-bold tracking-tight truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Conteúdo do Navegador */}
            <div className="bg-slate-100 rounded-b-xl overflow-hidden relative border border-slate-200">
              {/* Barra de endereço simulada */}
              <div className="bg-slate-200 px-3 py-1.5 flex items-center gap-2 border-b border-slate-300 select-none">
                <Lock className="w-3 h-3 text-slate-500 flex-shrink-0" />
                <div className="flex-1 bg-white rounded px-2.5 py-0.5 text-[9px] text-slate-500 truncate">
                  https://{currentPortal.portal}
                </div>
              </div>

              {/* Área da imagem do portal */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  key={currentPortal.id}
                  src={currentPortal.img}
                  alt={currentPortal.label}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  style={{ animation: 'fadeIn 1s ease-in-out forwards' }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
