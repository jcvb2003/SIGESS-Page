import { ClipboardText as ClipboardCheck, Signature as FileSignature, CheckCircle } from '@phosphor-icons/react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    phase: 'Antes do defeso',
    description:
      'Verifique quem está com a situação regularizada: anuidade paga, DAE em dia, sem pendências. O sistema sinaliza automaticamente quem está bloqueado.',
  },
  {
    number: '02',
    icon: FileSignature,
    phase: 'Durante o defeso',
    description:
      'Gere os requerimentos automaticamente com todos os dados preenchidos. Controle quem já assinou e quem ainda não veio à secretaria. Acompanhe em tempo real.',
  },
  {
    number: '03',
    icon: CheckCircle,
    phase: 'Após o defeso',
    description:
      'Acompanhe quem já recebeu o benefício, filtre quem ainda está pendente e mantenha o histórico de cada requerimento atualizado para orientar o atendimento da entidade.',
  },
];

export function Defeso() {
  return (
    <section id="defeso" className="relative min-h-screen flex items-center py-10 lg:py-14 bg-white overflow-hidden snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Como funciona o defeso no SIGESS
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            O período de defeso é o momento mais crítico para qualquer entidade de pesca.
            O SIGESS foi desenhado especificamente para esse momento.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.phase}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-emerald-600 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-emerald-700 transition-all duration-300">
                    <h3 className="font-bold text-lg text-white mb-2">{step.phase}</h3>
                    <p className="text-emerald-50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center z-10 shrink-0 shadow-sm">
                  <step.icon className="w-7 h-7 text-emerald-600" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
