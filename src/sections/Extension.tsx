import { Users, Signature as FileSignature, ClipboardText as ClipboardList, Receipt, Lightning as Zap } from '@phosphor-icons/react';
import { useInView } from '@/hooks/useInView';

const extensionFeatures = [
  {
    icon: Users,
    title: 'Login Múltiplo e Simultâneo',
    description: 'Realize múltiplos logins ao mesmo tempo, cada sessão isolada. Passe uma lista de sócios e deixe o robô trabalhar enquanto você atende.',
  },
  {
    icon: FileSignature,
    title: 'Digitação Automática do Seguro Defeso',
    description: 'O robô acessa o portal do MTE com as credenciais do sócio e preenche todos os campos do requerimento automaticamente. Você só confere e envia.',
  },
  {
    icon: ClipboardList,
    title: 'Preenchimento Automático do REAP',
    description: 'Suporte completo para o REAP Simplificado e o REAP Anual. Em muitos casos, um REAP pode ser feito em cerca de 20 segundos, com preenchimento automático e envio em lote.',
    isFeatured: true,
  },
  {
    icon: Receipt,
    title: 'Geração e Consulta de Boletos GPS',
    description: 'Acessa o eSocial, navega direto para Consulta de Guias ou Geração de GPS, aplica os filtros e preenche os valores. Ideal para gerar e consultar boletos em massa, sem cliques manuais.',
  },
  {
    icon: Zap,
    title: 'Cadastro Automático via Gov.br',
    description: 'Ao abrir a ficha de um pescador no Gov.br, o robô captura todos os dados e os envia direto para o cadastro do sócio no SIGESS. Sem digitar duas vezes.',
  },
];

const integrations = [
  { name: 'PesqBrasil (MPA)', logo: '/images/pesqbrasil-icon.png' },
  { name: 'Gov.br', logo: '/images/logo-govbr.png' },
  { name: 'Meu INSS', logo: '/images/logo-inss.png' },
  { name: 'eSocial', logo: '/images/logo-esocial.png' },
  { name: 'CTPS Digital', logo: '/images/logo-ctps.png' },
  { name: 'Receita Federal', logo: '/images/logo-receita.png' },
  { name: 'CadÚnico', logo: '/images/logo-cadunico.png' },
];

// Posiciona cada integração num circulo ao redor do nucleo (SIGESS),
// como pontos de uma orbita - comeca no topo e distribui em sentido horario.
const ORBIT_RADIUS = 42;
const orbitPositions = integrations.map((_, index) => {
  const angle = (-90 + (360 / integrations.length) * index) * (Math.PI / 180);
  return {
    x: 50 + ORBIT_RADIUS * Math.cos(angle),
    y: 50 + ORBIT_RADIUS * Math.sin(angle),
  };
});

export function Extension() {
  const [sectionRef, sectionVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const featuredFeature = extensionFeatures.find(f => f.isFeatured);
  const otherFeatures = extensionFeatures.filter(f => !f.isFeatured);

  return (
    <section id="extensao" className="relative min-h-screen flex items-center py-10 lg:py-14 bg-gradient-emerald overflow-hidden snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={sectionRef} className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Coluna Esquerda - Título e Card Destaque */}
          <div className="space-y-6">
            <div className={`will-animate-left ${sectionVisible ? 'is-visible' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                O Robô do SIGESS
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed max-w-xl">
                O Robô conecta o sistema diretamente aos portais do governo -
                Carteira de Trabalho, PesqBrasil, eSocial, INSS, Gov.br - e executa tarefas burocráticas no lugar da equipe.
                Não é um atalho. É automação real, pensada para reduzir horas de trabalho manual.
              </p>
            </div>

            {/* Card Destaque: REAP (Carro-Chefe) */}
            {featuredFeature && (
              <div
                className={`group p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg will-animate anim-delay-1 ${sectionVisible ? 'is-visible' : ''}`}
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <featuredFeature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5">{featuredFeature.title}</h3>
                    <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
                      {featuredFeature.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita - Orbita de Integracoes */}
          <div className={`relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square will-animate-right ${sectionVisible ? 'is-visible' : ''}`}>
            {/* Linhas de conexao */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
              {orbitPositions.map((pos, index) => (
                <line
                  key={index}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="white"
                  strokeOpacity="0.35"
                  strokeWidth="0.4"
                />
              ))}
            </svg>

            {/* Nucleo - SIGESS */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
              <img src="/logo.svg" alt="SIGESS" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>

            {/* Integracoes em orbita */}
            {integrations.map((item, index) => {
              const pos = orbitPositions[index];
              return (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center p-2 group select-none"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  title={item.name}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* Linha - Cards Secundários (largura total da página) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {otherFeatures.map((feature, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 will-animate anim-delay-${index + 2} ${sectionVisible ? 'is-visible' : ''}`}
            >
              <div className="flex flex-col">
                <div className="w-11 h-11 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mb-3">
                  <feature.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
