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
    description: 'Outros sistemas são genéricos. O SIGESS foi construído do zero para entender o que é defeso, DAE, RGP e a realidade financeira de um sindicato de pescadores.',
  },
  {
    icon: Shield,
    title: 'Seguro e isolado por entidade',
    description: 'Cada entidade tem seus dados completamente separados. Nenhuma entidade acessa os dados de outra. Seus sócios estão protegidos.',
  },
  {
    icon: Globe,
    title: '100% online, sem instalação',
    description: 'Acesse pelo navegador de qualquer computador. Sem instalação, sem pendrive, sem perda de dados se o computador quebrar.',
  },
  {
    icon: Smartphone,
    title: 'Funciona em qualquer dispositivo',
    description: 'Interface adaptada para computadores, notebooks e tablets — para usar tanto na secretaria quanto em campo.',
  },
  {
    icon: Printer,
    title: 'Comprovantes prontos para imprimir',
    description: 'Requerimentos de defeso, recibos de pagamento e declarações gerados automaticamente com os dados do sócio.',
  },
  {
    icon: UserCog,
    title: 'Controle de acesso por perfil',
    description: 'Defina quem pode apenas consultar, quem pode registrar pagamentos e quem tem acesso administrativo completo.',
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-gradient-emerald overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Wave pattern top */}
      <div className="absolute top-0 left-0 right-0 h-16 -mt-1">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 64V32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Por que escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Diferenciais do SIGESS
          </h2>
          <p className="text-lg text-emerald-100">
            Cada detalhe do sistema foi pensado para o dia a dia da secretaria 
            de entidades de pesca artesanal.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-emerald-100 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '100%', label: 'Online, sem instalação' },
            { value: 'LGPD', label: 'Dados protegidos por lei' },
            { value: '15min', label: 'Para ativar nova entidade' },
            { value: '24/7', label: 'Acesso de qualquer lugar' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-emerald-200 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave pattern bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 -mb-1">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 0V32C240 0 480 64 720 32C960 0 1200 64 1440 32V0H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
