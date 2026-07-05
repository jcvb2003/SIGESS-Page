import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Laptop,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

// ─────────────────────────────────────────────────────────────────────────────
// FAIXAS DE LICENÇA
// ─────────────────────────────────────────────────────────────────────────────

const initialTier = {
  id: 'ate-500',
  range: 'Até 500',
  sub: 'sócios',
  computers: 1,
  price: 2197,
};

const dynamicTiers = [
  {
    id: '501-1000',
    range: 'Até 1.000',
    sub: 'sócios',
    computers: 2,
    price: 2997,
  },
  {
    id: '1001-2000',
    range: 'Até 2.000',
    sub: 'sócios',
    computers: 3,
    price: 3897,
  },
  {
    id: '2001-5000',
    range: 'Até 5.000',
    sub: 'sócios',
    computers: 4,
    price: 4797,
  },
  {
    id: '5001-9000',
    range: 'Até 9.000',
    sub: 'sócios',
    computers: 5,
    price: 5997,
  },
];

const enterpriseTier = {
  id: 'acima-9000',
  range: 'Acima de 9.000',
  sub: 'sócios',
  computers: 'A consultar',
  price: 'Sob consulta',
};

function formatPrice(value: number | string): string {
  if (typeof value === 'string') return value;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const activeDynamicTier = dynamicTiers[sliderIndex];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className="relative min-h-screen flex items-center py-10 lg:py-14 bg-white overflow-hidden snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      {/* Blob decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho ───────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Um plano.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Tudo incluso.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Sistema web completo e com um robô para a sua entidade.
            Sem separar produtos, sem escolher módulos — a licença inclui tudo que sua entidade
            precisa para automatizar do cadastro de sócios ao processamento do REAP.
          </p>
        </div>

        {/* Slider Section */}
        <div className="max-w-xl mx-auto mb-16 px-4">
          <div className="flex flex-col items-center text-center mb-6">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Selecione o tamanho</span>
            <p className="text-slate-600 font-medium">Arraste para selecionar a quantidade de sócios da sua entidade.</p>
          </div>

          <Slider
            value={[sliderIndex]}
            max={dynamicTiers.length - 1}
            step={1}
            onValueChange={(val) => setSliderIndex(val[0])}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between mt-3 text-xs text-slate-400 font-bold px-1 uppercase tracking-wider">
            <span>1.000</span>
            <span>2.000</span>
            <span>5.000</span>
            <span>9.000</span>
          </div>
        </div>

        {/* ── Cards de faixas ─────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">

          {/* CARD 1: INICIAL */}
          <div
            id={`card-${initialTier.id}`}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              flex flex-col rounded-2xl border p-8 transition-all duration-300 cursor-default
              w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex-grow
              ${hoveredIndex === 0
                ? 'bg-slate-800 border-slate-600 shadow-2xl -translate-y-1.5'
                : 'bg-slate-800/80 border-slate-700 shadow-lg'
              }
            `}
          >
            {/* Faixa */}
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-1">
                {initialTier.sub}
              </p>
              <p className="text-2xl font-bold text-white leading-tight">
                {initialTier.range}
              </p>
            </div>

            <div className="h-px w-full bg-slate-700/50 mb-6" />

            {/* Preço */}
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="flex items-end gap-1">
                <p className="text-4xl font-black text-white leading-none tracking-tight">
                  {formatPrice(initialTier.price / 12)}
                </p>
                <span className="text-xl font-bold text-slate-400 mb-1">/mês</span>
              </div>
            </div>

            {/* Computadores */}
            <div className="flex items-center justify-center gap-2 bg-slate-900/50 rounded-xl px-4 py-3 mt-6 border border-slate-700/50">
              <Laptop className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <span className="text-sm text-slate-200 font-bold text-center">
                Robô em até {initialTier.computers} {initialTier.computers === 1 ? 'PC' : 'PCs'}
              </span>
            </div>

            {/* Features summary */}
            <div className="flex flex-col gap-3 mt-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-200">Acessos ilimitados ao Sistema Web</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Todos os módulos web liberados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Automações MTE/MPA ilimitadas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Treinamento Guiado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Suporte Humano Rápido</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-300">Sem taxa de implementação</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              id={`cta-${initialTier.id}`}
              size="lg"
              onClick={scrollToContact}
              className="w-full mt-auto border-2 border-slate-600 bg-transparent hover:bg-slate-700 hover:border-slate-500 text-white font-bold py-7 text-lg group"
            >
              Solicitar Proposta
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>

          {/* CARD 2: DINÂMICO (DESTAQUE) */}
          <div
            id={`card-${activeDynamicTier.id}`}
            className="relative flex flex-col rounded-2xl shadow-2xl shadow-emerald-500/25 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex-grow"
            style={{
              background: 'linear-gradient(160deg, #059669 0%, #064e3b 100%)',
            }}
          >
            {/* Badge "Mais contratado" */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 text-amber-900 text-xs font-black rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap">
                ⭐ O Mais Contratado
              </span>
            </div>

            <div className="pt-10 pb-9 px-8 flex flex-col gap-6 h-full">
              {/* Faixa */}
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-emerald-300 font-bold mb-1">
                  {activeDynamicTier.sub}
                </p>
                <p className="text-2xl font-black text-white leading-tight">
                  {activeDynamicTier.range}
                </p>
              </div>

              <div className="h-px w-full bg-emerald-600/50" />

              {/* Preço */}
              <div className="flex flex-col gap-1 items-center text-center">
                <div className="flex items-end gap-1">
                  <p className="text-5xl font-black text-white leading-none tracking-tight">
                    {formatPrice(activeDynamicTier.price / 12)}
                  </p>
                  <span className="text-2xl font-bold text-emerald-300 mb-1">/mês</span>
                </div>
              </div>

              {/* Computadores */}
              <div className="flex items-center justify-center gap-2 bg-emerald-950/30 rounded-xl px-4 py-3 mt-2 border border-emerald-600/30">
                <Laptop className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <span className="text-sm text-emerald-50 font-bold text-center">
                  Robô em até {activeDynamicTier.computers} {activeDynamicTier.computers === 1 ? 'PC' : 'PCs'}
                </span>
              </div>

              {/* Features summary */}
              <div className="flex flex-col gap-3 mt-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-bold text-emerald-50">Acessos ilimitados ao Sistema Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-emerald-50">Todos os módulos web liberados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-emerald-50">Automações MTE/MPA ilimitadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-emerald-50">Treinamento Guiado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-emerald-50">Suporte Humano Rápido</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-bold text-emerald-50">Sem taxa de implementação</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                id={`cta-${activeDynamicTier.id}`}
                size="lg"
                onClick={scrollToContact}
                className="w-full bg-white hover:bg-emerald-50 text-emerald-800 font-black py-7 text-lg shadow-xl mt-auto group"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* CARD 3: ACIMA DE 9.000 */}
          <div
            id={`card-${enterpriseTier.id}`}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              flex flex-col rounded-2xl border p-8 transition-all duration-300 cursor-default
              w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex-grow
              ${hoveredIndex === 2
                ? 'bg-slate-800 border-slate-600 shadow-2xl -translate-y-1.5'
                : 'bg-slate-800/80 border-slate-700 shadow-lg'
              }
            `}
          >
            {/* Faixa */}
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-1">
                {enterpriseTier.sub}
              </p>
              <p className="text-2xl font-bold text-white leading-tight">
                {enterpriseTier.range}
              </p>
            </div>

            <div className="h-px w-full bg-slate-700/50 mb-6" />

            {/* Preço */}
            <div className="flex flex-col gap-1 items-center text-center">
              <p className="text-4xl font-black text-white leading-none tracking-tight">
                {formatPrice(enterpriseTier.price as string)}
              </p>
            </div>

            {/* Computadores */}
            <div className="flex items-center justify-center gap-2 bg-slate-900/50 rounded-xl px-4 py-3 mt-6 border border-slate-700/50">
              <Laptop className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <span className="text-sm text-slate-200 font-bold text-center">
                Robô: {enterpriseTier.computers}
              </span>
            </div>

            {/* Features summary */}
            <div className="flex flex-col gap-3 mt-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-200">Acessos ilimitados ao Sistema Web</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Todos os módulos web liberados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Automações MTE/MPA ilimitadas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Treinamento Guiado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Suporte Humano Prioritário</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-300">Sem taxa de implementação</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              id={`cta-${enterpriseTier.id}`}
              size="lg"
              onClick={scrollToContact}
              className="w-full mt-auto border-2 border-slate-600 bg-transparent hover:bg-slate-700 hover:border-slate-500 text-white font-bold py-7 text-lg group"
            >
              Solicitar Proposta
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>

        </div>

        {/* Nota */}
        <div className="text-center mt-8 space-y-4">
          <div className="max-w-md mx-auto bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-emerald-800">Não sabe ao certo quantos sócios ativos a entidade tem?</span>{' '}
              <br className="hidden sm:block" />
              Nossa equipe ajuda você a fazer esse levantamento sem compromisso.{' '}
              <button onClick={scrollToContact} className="text-emerald-700 font-bold hover:underline">
                Falar com consultor
              </button>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
