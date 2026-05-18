import {
  Fish,
  Shield,
  Globe,
  Smartphone,
  Printer,
  UserCog
} from 'lucide-react';

const differentials = [
  {
    icon: Fish,
    title: 'Feito para a pesca artesanal',
    description: 'Outros sistemas são genéricos. O SIGESS foi construído do zero para entender defeso, DAE, RGP e a realidade financeira de uma entidade de pescadores.',
  },
  {
    icon: Shield,
    title: 'Seguro e isolado por entidade',
    description: 'Cada entidade tem seus dados completamente separados. Nenhuma entidade acessa os dados de outra. Seus sócios ficam protegidos.',
  },
  {
    icon: Globe,
    title: 'Treinamento completo na implantação',
    description: 'Nossa equipe realiza uma videochamada para ensinar o uso do sistema na prática, orientar a operação e tirar dúvidas da equipe.',
  },
  {
    icon: Smartphone,
    title: 'Suporte humano rápido',
    description: 'Atendimento 100% humano por WhatsApp, Meet e telefone, com resposta rápida e contexto da rotina das entidades de pesca.',
  },
  {
    icon: Printer,
    title: 'Automação que escala a operação',
    description: 'Boletos e REAP podem ser processados em lote, reduzindo gargalos em períodos críticos e aumentando a capacidade da secretaria.',
  },
  {
    icon: UserCog,
    title: 'Mais resultado com menos equipe',
    description: 'O ecossistema do SIGESS é capaz de substituir até 5 funcionários em tarefas repetitivas, liberando a equipe para o atendimento real.',
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
            Por que escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Diferenciais do SIGESS
          </h2>
          <p className="text-lg text-slate-300">
            Cada detalhe do sistema foi pensado para o dia a dia da secretaria
            de entidades de pesca artesanal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-blue-300" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '20s', label: 'REAP em muitos atendimentos' },
            { value: 'Lote', label: 'Boletos e REAP em massa' },
            { value: '5x', label: 'Capacidade operacional ampliada' },
            { value: 'Humano', label: 'Suporte por WhatsApp, Meet e telefone' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
