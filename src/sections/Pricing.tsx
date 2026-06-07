import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Laptop,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// ─────────────────────────────────────────────────────────────────────────────
// FAIXAS DE LICENÇA
// ─────────────────────────────────────────────────────────────────────────────
const tiers = [
  {
    id: 'ate-500',
    range: 'Até 500',
    sub: 'sócios',
    computers: 1,
    price: 2197,
    featured: false,
  },
  {
    id: '501-1000',
    range: '501 a 1.000',
    sub: 'sócios',
    computers: 2,
    price: 2997,
    featured: false,
  },
  {
    id: '1001-2000',
    range: '1.001 a 2.000',
    sub: 'sócios',
    computers: 3,
    price: 3897,
    featured: true, // destaque central
  },
  {
    id: '2001-5000',
    range: '2.001 a 5.000',
    sub: 'sócios',
    computers: 4,
    price: 4797,
    featured: false,
  },
  {
    id: '5001-9000',
    range: '5.001 a 9.000',
    sub: 'sócios',
    computers: 5,
    price: 5997,
    featured: false,
  },
];

function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Blob decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho ───────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Um plano.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Tudo incluso.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Sistema web completo e extensão Firefox em uma única licença anual por entidade.
            Sem separar produtos, sem escolher módulos — a licença inclui tudo que sua entidade
            precisa para automatizar a secretaria, do cadastro de sócios ao processamento do REAP.
            Escolha a faixa que corresponde ao tamanho da sua organização.
          </p>
        </div>

        {/* ── Cards de faixas ─────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {tiers.map((tier, index) => {
            const isHovered = hoveredIndex === index;

            if (tier.featured) {
              // ── Card de destaque ──────────────────────────────────────────
              return (
                <div
                  key={tier.id}
                  id={`card-${tier.id}`}
                  className="relative flex flex-col rounded-3xl shadow-2xl shadow-emerald-500/25 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex-grow"
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
                        {tier.sub}
                      </p>
                      <p className="text-2xl font-black text-white leading-tight">
                        {tier.range}
                      </p>
                    </div>

                    <div className="h-px w-full bg-emerald-600/50" />

                    {/* Preço */}
                    <div className="flex flex-col gap-1 items-center text-center">
                      <p className="text-5xl font-black text-white leading-none tracking-tight">
                        {formatPrice(tier.price)}
                      </p>
                      <div className="flex flex-col items-center gap-2 mt-2">
                        <span className="text-sm text-emerald-200 font-medium">pagamento único anual</span>
                        <span className="text-sm px-4 py-1 bg-emerald-800/60 text-emerald-100 rounded-full font-bold shadow-inner border border-emerald-700/50">
                          Equivale a apenas {formatPrice(tier.price / 12)}/mês
                        </span>
                      </div>
                    </div>

                    {/* Computadores */}
                    <div className="flex items-center justify-center gap-2 bg-emerald-950/30 rounded-xl px-4 py-3 mt-2 border border-emerald-600/30">
                      <Laptop className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                      <span className="text-sm text-emerald-50 font-bold text-center">
                        Extensão Firefox em até {tier.computers} {tier.computers === 1 ? 'PC' : 'PCs'}
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
                        <span className="text-sm font-medium text-emerald-50">Treinamento Premium Guiado</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-emerald-50">Suporte Humano Prioritário</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm font-bold text-emerald-50">Sem taxa de implementação</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      id={`cta-${tier.id}`}
                      size="lg"
                      onClick={scrollToContact}
                      className="w-full bg-white hover:bg-emerald-50 text-emerald-800 font-black py-7 text-lg shadow-xl mt-auto group"
                    >
                      Solicitar Proposta
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            }

            // ── Cards normais ─────────────────────────────────────────────
            return (
              <div
                key={tier.id}
                id={`card-${tier.id}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  flex flex-col rounded-3xl border p-8 transition-all duration-300 cursor-default
                  w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex-grow
                  ${isHovered
                    ? 'bg-slate-800 border-slate-600 shadow-2xl -translate-y-1.5'
                    : 'bg-slate-800/80 border-slate-700 shadow-lg'
                  }
                `}
              >
                {/* Faixa */}
                <div className="text-center mb-6">
                  <p className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-1">
                    {tier.sub}
                  </p>
                  <p className="text-2xl font-bold text-white leading-tight">
                    {tier.range}
                  </p>
                </div>
                
                <div className="h-px w-full bg-slate-700/50 mb-6" />

                {/* Preço */}
                <div className="flex flex-col gap-1 items-center text-center">
                  <p className="text-4xl font-black text-white leading-none tracking-tight">
                    {formatPrice(tier.price)}
                  </p>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <span className="text-sm text-slate-400 font-medium">pagamento único anual</span>
                    <span className="text-sm px-4 py-1 bg-slate-700/50 text-slate-200 rounded-full font-bold border border-slate-600/50">
                      Equivale a apenas {formatPrice(tier.price / 12)}/mês
                    </span>
                  </div>
                </div>

                {/* Computadores */}
                <div className="flex items-center justify-center gap-2 bg-slate-900/50 rounded-xl px-4 py-3 mt-6 border border-slate-700/50">
                  <Laptop className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <span className="text-sm text-slate-200 font-bold text-center">
                    Extensão Firefox em até {tier.computers} {tier.computers === 1 ? 'PC' : 'PCs'}
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
                  id={`cta-${tier.id}`}
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full mt-auto border-2 border-slate-600 bg-transparent hover:bg-slate-700 hover:border-slate-500 text-white font-bold py-7 text-lg group"
                >
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </div>
            );
          })}
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
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Entidades com mais de 9.000 sócios têm valores planejados conforme a operação.
            <button className="text-emerald-600 font-medium hover:underline ml-1" onClick={scrollToContact}>
              Entre em contato.
            </button>
          </p>
        </div>






      </div>
    </section>
  );
}
