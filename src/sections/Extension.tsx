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
  {
    name: 'PesqBrasil (MPA)',
    logo: '/images/pesqbrasil-logo.svg',
    action: 'Preenchimento e Envio de REAP',
    isSvg: true,
  },
  {
    name: 'Gov.br',
    logo: '/images/logo-govbr.png',
    action: 'Captura cadastral e login unificado',
  },
  {
    name: 'Meu INSS',
    logo: '/images/logo-inss.png',
    action: 'Validação e consulta de Seguro-Defeso',
  },
  {
    name: 'eSocial',
    logo: '/images/logo-esocial.png',
    action: 'Operação em lote e emissão de DAE',
  },
  {
    name: 'CTPS Digital',
    logo: '/images/logo-ctps.png',
    action: 'Sincronização de NIT e contratos',
  },
  {
    name: 'Receita Federal',
    logo: '/images/logo-receita.png',
    action: 'Consulta e regularidade de CPF',
  },
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

          {/* Coluna Direita - Central de Conectividade Governamental (Logos Oficiais) */}
          <div className={`relative w-full max-w-lg mx-auto lg:max-w-none will-animate-right ${sectionVisible ? 'is-visible' : ''}`}>
            {/* Efeito de Brilho Traseiro */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-[2rem] blur-3xl opacity-20 pointer-events-none animate-pulse" />
            
            {/* Container Central de Integrações */}
            <div className="relative bg-slate-950/80 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              {/* Cabeçalho do Painel */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                    Sistemas Integrados
                  </h3>
                  <p className="text-xs text-slate-400">Automação direta nos portais oficiais</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    Extensão Ativa
                  </span>
                </div>
              </div>

              {/* Grid das Logos Oficiais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrations.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-300 hover:bg-white/10 group"
                  >
                    {/* Container da Logo com proporções consistentes */}
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className={`w-full h-full ${item.isSvg ? 'object-contain' : 'object-cover rounded-md'}`}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Ação e Nome da Integração */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white tracking-tight leading-tight">
                          {item.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nota de rodapé da Central de Conectividade */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                <span className="text-[11px] text-slate-400 text-center font-medium">
                  Integração nativa sem digitação manual e 100% segura.
                </span>
              </div>

            </div>
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
