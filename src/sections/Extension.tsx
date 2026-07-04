import { Users, FileSignature, ClipboardList, Receipt, Zap, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const extensionFeatures = [
  {
    icon: Users,
    title: 'Login Múltiplo e Simultâneo',
    description: 'Realize múltiplos logins ao mesmo tempo, cada sessão isolada. Passe uma lista de sócios e deixe a extensão trabalhar enquanto você atende.',
  },
  {
    icon: FileSignature,
    title: 'Digitação Automática do Seguro Defeso',
    description: 'A extensão acessa o portal do MTE com as credenciais do sócio e preenche todos os campos do requerimento automaticamente. Você só confere e assina.',
  },
  {
    icon: ClipboardList,
    title: 'Preenchimento Automático do REAP',
    description: 'Suporte completo para o REAP Simplificado (MPA) e o REAP Anual (Agro). Em muitos casos, um REAP pode ser feito em cerca de 20 segundos, com preenchimento automático e envio em lote.',
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
    description: 'Ao abrir a ficha de um pescador no Gov.br, a extensão captura todos os dados e os envia direto para o cadastro do sócio no SIGESS. Sem digitar duas vezes.',
  },
];

const integrations = [
  { name: 'PesqBrasil (MPA)', logo: '/images/pesqbrasil-logo.svg', isSvg: true },
  { name: 'Gov.br', logo: '/images/logo-govbr.png' },
  { name: 'Meu INSS', logo: '/images/logo-inss.png' },
  { name: 'eSocial', logo: '/images/logo-esocial.png' },
  { name: 'CTPS Digital', logo: '/images/logo-ctps.png' },
  { name: 'Receita Federal', logo: '/images/logo-receita.png' },
];

export function Extension() {
  const [sectionRef, sectionVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const featuredFeature = extensionFeatures.find(f => f.isFeatured);
  const otherFeatures = extensionFeatures.filter(f => !f.isFeatured);

  return (
    <section id="extensao" className="relative py-20 lg:py-28 bg-gradient-emerald overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={sectionRef} className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda - Títulos e Bento Grid */}
          <div className="space-y-10">
            <div className={`will-animate-left ${sectionVisible ? 'is-visible' : ''}`}>
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                Extensão para Firefox
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                O braço automatizado do SIGESS
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed max-w-xl">
                A Extensão conecta o sistema diretamente aos portais do governo -
                MTE, MPA, eSocial e gov.br - e executa tarefas burocráticas no lugar da equipe.
                Não é um atalho. É automação real, pensada para reduzir horas de trabalho manual.
              </p>
            </div>

            {/* Bento Grid das Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card Destaque: REAP (Carro-Chefe) */}
              {featuredFeature && (
                <div 
                  className={`md:col-span-2 group p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg will-animate anim-delay-1 ${sectionVisible ? 'is-visible' : ''}`}
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-white text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <featuredFeature.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-xl font-bold text-white">{featuredFeature.title}</h3>
                        <span className="px-2 py-0.5 bg-emerald-400/30 text-white text-[10px] font-bold uppercase rounded-full tracking-wider">
                          Carro-chefe
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
                        {featuredFeature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Cards Secundários */}
              {otherFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 will-animate anim-delay-${index + 2} ${sectionVisible ? 'is-visible' : ''}`}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1.5">{feature.title}</h3>
                      <p className="text-xs text-emerald-100/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`pt-4 will-animate anim-delay-5 ${sectionVisible ? 'is-visible' : ''}`}>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Quero automatizar minha secretaria
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna Direita - Galeria de Logos Lado a Lado */}
          <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 will-animate-right ${sectionVisible ? 'is-visible' : ''}`}>
            {integrations.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 group select-none"
                title={item.name}
              >
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className={`max-w-full max-h-full object-contain ${item.isSvg ? '' : 'rounded-md'} group-hover:scale-105 transition-transform duration-300`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Rodapé da Seção */}
        <div className={`mt-16 pt-8 border-t border-white/20 text-center will-animate anim-delay-5 ${sectionVisible ? 'is-visible' : ''}`}>
          <p className="text-emerald-200 text-sm">
            A extensão SIGESS funciona no Firefox e é distribuída diretamente para os clientes da plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
