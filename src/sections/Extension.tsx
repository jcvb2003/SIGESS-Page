import {
  Users,
  Signature as FileSignature,
  ClipboardText as ClipboardList,
  Receipt,
  Lightning as Zap,
  Globe,
  MagnifyingGlass,
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
  {
    icon: MagnifyingGlass,
    title: 'Saiba Quem Já Recebeu o Defeso',
    shortTitle: 'Recebimento do Defeso',
    description: 'O SIGESS mostra quais sócios já receberam o benefício sem precisar entrar no GOV.BR de cada pescador. Com essa informação, a entidade identifica pendências e organiza a cobrança das anuidades com mais agilidade e segurança.',
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
      className="relative snap-start snap-always scroll-mt-16 overflow-hidden bg-[#06382f] py-12 lg:min-h-screen lg:scroll-mt-20 lg:py-16"
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

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
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

            <article className="border-t border-emerald-100 bg-emerald-50/45 p-6 sm:p-8 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-950">Portais conectados</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    O SIGESS reúne, em um só fluxo, os portais usados no dia a dia da entidade.
                  </p>
                </div>
              </div>

              <div className="relative mt-7 hidden min-h-36 sm:block">
                <svg
                  viewBox="0 0 1000 130"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 top-0 h-28 w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M 55 66 C 150 18, 220 114, 315 66 S 480 18, 565 66 S 730 114, 815 66 S 920 34, 955 66"
                    fill="none"
                    stroke="#a7f3d0"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative z-10 grid grid-cols-8 items-center gap-2">
                  <div className="flex flex-col items-center pt-7 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-emerald-100 bg-white shadow-md shadow-emerald-900/10">
                      <img src="/logo.svg" alt="SIGESS" className="h-10 w-10 object-contain" />
                    </div>
                    <span className="mt-2 text-xs font-bold text-emerald-900">SIGESS</span>
                  </div>

                  {integrations.map((integration, index) => (
                    <div
                      key={integration.name}
                      className={`flex flex-col items-center text-center ${index % 2 === 0 ? 'pt-0' : 'pt-14'}`}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-white p-2 shadow-sm shadow-emerald-900/10">
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 max-w-24 text-xs font-semibold leading-tight text-slate-600">
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-7 sm:hidden">
                <div className="absolute bottom-5 left-6 top-5 w-px bg-emerald-200" aria-hidden="true" />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-emerald-100 bg-white shadow-sm">
                      <img src="/logo.svg" alt="SIGESS" className="h-7 w-7 object-contain" />
                    </div>
                    <span className="text-sm font-bold text-emerald-900">SIGESS</span>
                  </div>
                  {integrations.map((integration) => (
                    <div key={integration.name} className="flex items-center gap-3">
                      <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-white p-2 shadow-sm">
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-600">{integration.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
