import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Devices,
  Infinity as InfinityIcon,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { PlanContactDialog } from '@/components/PlanContactDialog';
import type { PlanContactTier } from '@/components/PlanContactDialog';

const tiers: PlanContactTier[] = [
  { id: 'ate-500', range: 'Até 500', sub: 'sócios', computers: 1, price: 2197 },
  { id: '501-1000', range: 'Até 1.000', sub: 'sócios', computers: 2, price: 2997 },
  { id: '1001-2000', range: 'Até 2.000', sub: 'sócios', computers: 3, price: 3897 },
  { id: '2001-5000', range: 'Até 5.000', sub: 'sócios', computers: 4, price: 4797 },
  { id: '5001-9000', range: 'Até 9.000', sub: 'sócios', computers: 5, price: 5997 },
  { id: 'acima-9000', range: 'Acima de 9.000', sub: 'sócios', computers: 'A consultar', price: 'Sob consulta' },
];

function formatPrice(value: number | string) {
  return typeof value === 'string'
    ? value
    : new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value / 12);
}

export function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const selectedTier = tiers[selectedIndex];
  const isCustom = selectedTier.id === 'acima-9000';
  const computerLabel = typeof selectedTier.computers === 'number'
    ? `${selectedTier.computers} PC${selectedTier.computers === 1 ? '' : 's'}`
    : selectedTier.computers;

  return (
    <section id="planos" className="relative snap-start snap-always scroll-mt-16 overflow-hidden bg-white py-8 sm:py-10 lg:min-h-screen lg:scroll-mt-20 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14">
          <h2 className="mb-3 text-3xl font-bold text-slate-800 sm:mb-4 sm:text-4xl">
            Um plano.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Tudo incluso.
            </span>
          </h2>
          <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
            Sistema web completo e com um robô para a sua entidade. Sem separar produtos, sem escolher módulos — a licença inclui tudo que sua entidade precisa para automatizar do cadastro de sócios ao processamento do REAP.
          </p>
        </div>

        <article className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-950 shadow-xl shadow-emerald-900/10 md:grid-cols-2">
          <div className="order-1 bg-white p-5 text-slate-800 sm:p-7 md:order-1 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Investimento mensal</p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <div className="flex min-w-0 items-end gap-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{formatPrice(selectedTier.price)}</span>
                {typeof selectedTier.price === 'number' && <span className="mb-2 shrink-0 text-sm text-slate-500">/mês</span>}
              </div>
              <div className="flex w-[76px] shrink-0 flex-col items-end justify-end gap-0.5 border-l border-slate-200 pl-3 text-right sm:w-[88px]">
                <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Robô</span>
                <strong className="text-sm leading-tight text-slate-700 sm:text-base">{computerLabel}</strong>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Quantidade de sócios</p>
              <div className="grid w-full grid-cols-3 gap-2 md:grid-cols-6">
                {tiers.map((tier, index) => {
                  const isSelected = tier.id === selectedTier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedIndex(index)}
                      className={`min-h-12 min-w-0 border px-2 py-2 text-[10px] font-semibold leading-tight transition-colors sm:text-[11px] ${isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      {tier.range}
                    </button>
                  );
                })}
              </div>
            </div>

            <Button
              type="button"
              size="lg"
              onClick={() => setDialogOpen(true)}
              className={`mt-6 w-full py-5 text-base font-semibold sm:mt-8 sm:py-6 ${isCustom ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
            >
              {isCustom ? 'Solicitar proposta' : 'Escolher este plano'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="order-2 flex flex-col justify-between p-5 text-white sm:p-7 md:order-2 lg:p-10">
            <p className="max-w-md text-base leading-relaxed text-emerald-50/95 sm:text-lg">
              Sistema web, automações do robô, treinamento e suporte para a rotina da sua entidade.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:mt-10">
              <div className="border border-white/20 bg-white/10 p-3 sm:p-4">
                <CheckCircle className="mb-2 h-5 w-5 text-emerald-100 sm:mb-3" />
                <p className="text-sm text-emerald-100/80">Contratação</p>
                <strong className="mt-1 block text-base leading-tight text-white sm:text-lg">Sem taxa de implementação</strong>
              </div>
              <div className="border border-white/20 bg-white/10 p-3 sm:p-4">
                <CheckCircle className="mb-2 h-5 w-5 text-emerald-100 sm:mb-3" />
                <p className="text-sm text-emerald-100/80">Incluído</p>
                <strong className="mt-1 block text-base leading-tight text-white sm:text-lg">Todos os módulos</strong>
              </div>
              <div className="border border-white/20 bg-white/10 p-3 sm:p-4">
                <Devices className="mb-2 h-5 w-5 text-emerald-100 sm:mb-3" />
                <p className="text-sm text-emerald-100/80">Sistema Web</p>
                <strong className="mt-1 block text-base leading-tight text-white sm:text-lg">Dispositivos ilimitados</strong>
              </div>
              <div className="border border-white/20 bg-white/10 p-3 sm:p-4">
                <InfinityIcon className="mb-2 h-5 w-5 text-emerald-100 sm:mb-3" />
                <p className="text-sm text-emerald-100/80">No PC com o robô</p>
                <strong className="mt-1 block text-base leading-tight text-white sm:text-lg">Automações ilimitadas</strong>
              </div>
            </div>
          </div>
        </article>
      </div>

      <PlanContactDialog open={dialogOpen} onOpenChange={setDialogOpen} plan={selectedTier} />
    </section>
  );
}
