import { ClipboardCheck, FileSignature, CheckCircle, UserCheck } from 'lucide-react';

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
      'Importe o arquivo oficial do Portal da Transparência e descubra automaticamente quem já recebeu o benefício em conta. O sistema cruza os dados sem precisar entrar no gov.br de cada pescador - confirme em lote e acione a cobrança das anuidades com um clique.',
  },
];

export function Defeso() {
  return (
    <section id="defeso" className="relative py-20 lg:py-28 bg-gradient-emerald overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Exclusivo SIGESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Como funciona o defeso no SIGESS
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            O período de defeso é o momento mais crítico para qualquer entidade de pesca.
            O SIGESS foi desenhado especificamente para esse momento.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.phase}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <h3 className="font-bold text-lg text-white mb-2">{step.phase}</h3>
                    <p className="text-emerald-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center z-10 shrink-0 shadow-lg">
                  <step.icon className="w-7 h-7 text-emerald-600" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <UserCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Liberação presidencial</h4>
            <p className="text-sm text-emerald-100 leading-relaxed">
              O presidente pode liberar manualmente sócios com pendências para assinarem o requerimento -
              com registro completo de quem autorizou e por quê. Transparência total nas exceções.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Quero simplificar meu defeso
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
