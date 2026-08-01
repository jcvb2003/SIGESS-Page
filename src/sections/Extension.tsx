import {
  Users,
  Signature as FileSignature,
  ClipboardText as ClipboardList,
  Receipt,
  Lightning as Zap,
  Globe,
} from '@phosphor-icons/react';
import { useInView } from '@/hooks/useInView';

const extensionFeatures = [
  {
    icon: Users,
    title: 'Login Múltiplo e Simultâneo',
    shortTitle: 'Login Múltiplo',
    description: 'Realize múltiplos logins ao mesmo tempo, cada sessão isolada. Passe uma lista de sócios e deixe o robô trabalhar enquanto você atende.',
  },
  {
    icon: FileSignature,
    title: 'Digitação Automática do Seguro Defeso',
    shortTitle: 'Seguro Defeso',
    description: 'O robô acessa o portal do MTE com as credenciais do sócio e preenche todos os campos do requerimento automaticamente. Você só confere e envia.',
  },
  {
    icon: ClipboardList,
    title: 'Preenchimento Automático do REAP',
    shortTitle: 'REAP Automático',
    description: 'Suporte completo para o REAP Simplificado e o REAP Anual. Em muitos casos, um REAP pode ser feito em cerca de 20 segundos, com preenchimento automático e envio em lote.',
    isFeatured: true,
  },
  {
    icon: Receipt,
    title: 'Geração e Consulta de Boletos GPS',
    shortTitle: 'Boletos GPS',
    description: 'Acessa o eSocial, navega direto para Consulta de Guias ou Geração de GPS, aplica os filtros e preenche os valores. Ideal para gerar e consultar boletos em massa, sem cliques manuais.',
  },
  {
    icon: Zap,
    title: 'Cadastro Automático via Gov.br',
    shortTitle: 'Cadastro Gov.br',
    description: 'Ao abrir a ficha de um pescador no Gov.br, o robô captura todos os dados e os envia direto para o cadastro do sócio no SIGESS. Sem digitar duas vezes.',
  },
];

const integrations = [
  { name: 'PesqBrasil', logo: '/images/pesqbrasil-icon.png' },
  { name: 'Gov.br', logo: '/images/logo-govbr.png' },
  { name: 'Meu INSS', logo: '/images/logo-inss.png' },
  { name: 'eSocial', logo: '/images/logo-esocial.png' },
  { name: 'CTPS Digital', logo: '/images/logo-ctps.png' },
  { name: 'Receita Federal', logo: '/images/logo-receita.png' },
  { name: 'CadÚnico', logo: '/images/logo-cadunico.png' },
];

const ORBIT_RADIUS = 40;
const orbitPositions = integrations.map((_, index) => {
  const angle = (-90 + (360 / integrations.length) * index) * (Math.PI / 180);
  return {
    x: 50 + ORBIT_RADIUS * Math.cos(angle),
    y: 50 + ORBIT_RADIUS * Math.sin(angle),
  };
});

export function Extension() {
  const [sectionRef, sectionVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const featuredFeature = extensionFeatures.find((feature) => feature.isFeatured)!;
  const detailFeatures = [
    featuredFeature,
    ...extensionFeatures.filter((feature) => !feature.isFeatured),
  ];

  return (
    <section
      id="extensao"
      className="relative min-h-screen snap-start snap-always scroll-mt-16 overflow-hidden bg-[#06382f] py-12 lg:scroll-mt-20 lg:py-16"
    >
      <div
        ref={sectionRef}
        className="relative mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8"
      >
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            Automação para a rotina da entidade
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            O Robô do SIGESS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-emerald-50/85">
            O sistema conectado aos portais do governo para executar as tarefas que mais consomem tempo da equipe.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-5 sm:gap-6">
          {extensionFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center text-center will-animate anim-delay-${index} ${sectionVisible ? 'is-visible' : ''}`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                    feature.isFeatured
                      ? 'border-white bg-white text-emerald-800 shadow-lg'
                      : 'border-white/20 bg-white/10 text-emerald-100'
                  }`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <span className="mt-3 max-w-32 text-sm font-semibold leading-tight text-white">
                  {feature.shortTitle}
                </span>
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-emerald-950/30">
          <div className="grid md:grid-cols-2">
            {detailFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const hasLeftBorder = index % 2 === 1;
              const hasTopBorder = index > 1;

              return (
                <article
                  key={feature.title}
                  className={`border-emerald-100 p-6 sm:p-8 ${hasLeftBorder ? 'md:border-l' : ''} ${hasTopBorder ? 'border-t' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        feature.isFeatured
                          ? 'bg-emerald-700 text-white'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-900">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <article className="border-t border-emerald-100 p-6 sm:p-8 md:border-l">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-emerald-900">Portais conectados</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Integrações diretas com os portais usados no dia a dia da entidade.
                  </p>
                  <div className="relative mx-auto mt-5 aspect-square w-full max-w-[260px]">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                      {orbitPositions.map((position, index) => (
                        <line
                          key={index}
                          x1="50"
                          y1="50"
                          x2={position.x}
                          y2={position.y}
                          stroke="#a7f3d0"
                          strokeWidth="0.6"
                        />
                      ))}
                    </svg>

                    <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-emerald-100 bg-white shadow-md">
                      <img src="/logo.svg" alt="SIGESS" className="h-9 w-9 object-contain" />
                    </div>

                    {integrations.map((integration, index) => {
                      const position = orbitPositions[index];
                      return (
                        <div
                          key={integration.name}
                          title={integration.name}
                          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 shadow-sm transition-transform hover:scale-110"
                          style={{ left: `${position.x}%`, top: `${position.y}%` }}
                        >
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
