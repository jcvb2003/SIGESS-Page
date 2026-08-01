import { useState, useEffect } from 'react';
import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
  CaretDown,
  DotsThreeVertical,
  House,
  Plus,
  PuzzlePiece,
  SlidersHorizontal,
  Star,
  X,
} from '@phosphor-icons/react';
import { useInView } from '@/hooks/useInView';

// Abas de portais governamentais automatizados pelo Robô
const portalTabsData = [
  {
    id: 'gov',
    label: 'Acesso Gov.br',
    browserTitle: 'gov.br - Acesse sua conta',
    icon: '/images/logo-govbr.png',
    sub: 'Autenticação',
    img: '/images/gov-login.jpg',
    portal: 'sso.acesso.gov.br',
    status: 'Fazendo login seguro no Gov.br com o CPF do sócio...'
  },
  {
    id: 'pesqbrasil',
    label: 'PesqBrasil',
    browserTitle: 'PesqBrasil',
    icon: '/images/pesqbrasil-icon.png',
    sub: 'Cadastro RGP',
    img: '/images/pesqbrasil-cadastro.jpg',
    portal: 'pescadorprofissional.mpa.gov.br',
    status: 'Preenchendo dados do pescador no PesqBrasil...'
  },
  {
    id: 'mte',
    label: 'MTE Defeso',
    browserTitle: 'Portal Emprega Brasil',
    icon: '/images/logo-ctps.png',
    sub: 'Seguro Defeso',
    img: '/images/mte-defeso.jpg',
    portal: 'servicos.mte.gov.br',
    status: 'Digitando requerimento de Seguro Defeso automaticamente...'
  },
  {
    id: 'esocial',
    label: 'eSocial / GPS',
    browserTitle: 'eSocial',
    icon: '/images/logo-esocial.png',
    sub: 'Guias DAE',
    img: '/images/esocial-login.jpg',
    portal: 'login.esocial.gov.br',
    status: 'Gerando guias e boletos GPS em lote...'
  }
];

const portalOrder = ['gov', 'mte', 'esocial', 'pesqbrasil'];
const portalTabs = [...portalTabsData].sort(
  (first, second) => portalOrder.indexOf(first.id) - portalOrder.indexOf(second.id),
);

const stats = [
  { num: '20s', label: 'Para fazer um REAP' },
  { num: 'Lote', label: 'Boletos e REAP em massa' },
  { num: '3x', label: 'Capaz de substituir até 3 funcionários' },
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
          {/* Moldura do navegador */}
          <div className="overflow-hidden rounded-xl border border-slate-600/70 bg-[#202536] shadow-[0_32px_80px_rgba(15,23,42,0.22)] ring-1 ring-slate-950/10">
            {/* Barra de abas */}
            <div className="flex h-10 items-end gap-1 bg-[#202536] px-1.5 pt-1.5 select-none">
              <span className="mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#353c4f] text-slate-300">
                <CaretDown className="h-3.5 w-3.5" weight="bold" />
              </span>

              <div className="flex min-w-0 flex-1 items-end gap-1 overflow-hidden">
                {portalTabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`group flex h-8 min-w-0 flex-1 items-center gap-2 rounded-t-xl px-2 text-left transition-colors ${isActive
                        ? 'bg-[#3a4153] text-slate-100'
                        : 'border-r border-white/10 text-slate-300 hover:bg-white/[0.06]'
                        }`}
                    >
                      <img
                        src={tab.icon}
                        alt=""
                        className="h-3.5 w-3.5 shrink-0 object-contain"
                      />
                      <span className="min-w-0 flex-1 truncate text-[9px] font-medium sm:text-[10px]">
                        {tab.browserTitle}
                      </span>
                      <X className={`hidden h-3 w-3 shrink-0 sm:block ${isActive ? 'text-slate-300' : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>

              <Plus className="mb-2 h-4 w-4 shrink-0 text-slate-300" weight="bold" />
            </div>

            {/* Barra de navegação */}
            <div className="flex h-10 items-center gap-1.5 border-t border-white/[0.03] bg-[#343b4d] px-2 text-slate-300 select-none sm:gap-2 sm:px-3">
              <div className="hidden shrink-0 items-center gap-1 sm:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10">
                  <ArrowLeft className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10">
                  <ArrowClockwise className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10">
                  <House className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="flex h-7 min-w-0 flex-1 items-center gap-2 rounded-full bg-[#202536] px-3 ring-1 ring-white/[0.04]">
                <SlidersHorizontal className="h-3.5 w-3.5 shrink-0 text-slate-300" weight="bold" />
                <span className="truncate text-[9px] text-slate-200 sm:text-[10px]">
                  {currentPortal.portal}
                </span>
                <Star className="ml-auto hidden h-3.5 w-3.5 shrink-0 text-slate-300 sm:block" />
              </div>

              <PuzzlePiece className="hidden h-4 w-4 shrink-0 text-slate-300 sm:block" />
              <DotsThreeVertical className="h-4 w-4 shrink-0 text-slate-300" weight="bold" />
            </div>

            {/* Área da imagem do portal */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <img
                key={currentPortal.id}
                src={currentPortal.img}
                alt={currentPortal.label}
                className="h-full w-full select-none object-cover object-top pointer-events-none"
                style={{ animation: 'fadeIn 1s ease-in-out forwards' }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
