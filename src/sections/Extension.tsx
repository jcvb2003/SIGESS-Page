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
    isFeatured: true, // Identificador para o Bento Grid destacar o carro-chefe
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

export function Extension() {
  const [sectionRef, sectionVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  // Separar o REAP das outras features para construir o Bento Grid
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
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

          {/* Coluna Direita - Mockup Realista com PesqBrasil */}
          <div className={`relative w-full max-w-lg mx-auto lg:max-w-none lg:sticky lg:top-32 will-animate-right ${sectionVisible ? 'is-visible' : ''}`}>
            {/* Efeito de Brilho Traseiro */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-[2rem] blur-2xl opacity-20 pointer-events-none animate-pulse" />
            
            {/* Janela de Navegador Simulada */}
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Barra do Navegador */}
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 flex justify-center px-4">
                  <div className="bg-slate-950 border border-white/5 rounded-md px-3 py-1 flex items-center w-full max-w-xs justify-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono tracking-tight select-all">
                      pesqbrasil.mpa.gov.br/reap
                    </span>
                  </div>
                </div>
              </div>

              {/* Corpo da Janela (Simulação do Portal Governamental Real) */}
              <div className="relative h-[380px] sm:h-[420px] bg-slate-100 flex flex-col">
                
                {/* Header Azul Padrão do Governo Federal */}
                <div className="bg-[#0c2a47] py-3.5 px-6 flex items-center justify-between border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/pesqbrasil-logo.svg" 
                      alt="PesqBrasil" 
                      className="h-7 w-auto select-none"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[9px] font-semibold text-slate-300 uppercase tracking-wider">
                      Ministério da Pesca e Aquicultura
                    </span>
                  </div>
                </div>

                {/* Conteúdo Interno do Portal */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  
                  {/* Título da Página de Formulário do Governo */}
                  <div className="border-b border-slate-300 pb-3">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-tight">
                      Relatório de Exercício da Atividade Pesqueira - REAP
                    </h4>
                    <p className="text-[9px] text-slate-500">Ano de Exercício de Referência: 2025</p>
                  </div>

                  {/* Formulário Simulado preenchido automaticamente pela extensão */}
                  <div className="grid grid-cols-2 gap-3 my-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">CPF do Pescador</span>
                      <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded px-2.5 py-1.5 text-xs font-mono select-none">
                        123.456.789-00
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">RGP / Protocolo</span>
                      <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded px-2.5 py-1.5 text-xs font-mono select-none">
                        PA-0056942-8
                      </div>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Atividade Declarada</span>
                      <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded px-2.5 py-1.5 text-xs select-none">
                        Pesca Artesanal Embarcada - Camarão / Peixes Diversos
                      </div>
                    </div>
                  </div>

                  {/* Rodapé da página do governo */}
                  <div className="flex justify-end gap-2 border-t border-slate-300 pt-3">
                    <div className="px-3 py-1.5 bg-slate-300 text-slate-600 rounded text-[10px] font-bold uppercase">
                      Cancelar
                    </div>
                    <div className="px-3 py-1.5 bg-[#0c2a47] text-white rounded text-[10px] font-bold uppercase select-none opacity-50">
                      Enviar REAP
                    </div>
                  </div>
                </div>

                {/* Extensão SIGESS - Widget Flutuante de Alta Fidelidade */}
                <div className="absolute top-16 right-4 w-[240px] bg-slate-900 border border-emerald-500/30 rounded-xl p-4 shadow-xl select-none animate-float">
                  
                  {/* Cabeçalho da Extensão */}
                  <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center">
                        <img src="/logo.svg" alt="" className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white font-bold text-[11px] tracking-tight">SIGESS Automator</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Ativo</span>
                    </div>
                  </div>

                  {/* Informações da Automação */}
                  <div className="space-y-3">
                    <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <p className="text-[10px] text-slate-400 font-mono mb-1">Ação Atual:</p>
                      <p className="text-xs text-white font-semibold">Preenchendo REAP Simplificado</p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-mono text-slate-500">
                        <span>Preenchimento de dados</span>
                        <span className="text-emerald-400 font-bold">100%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full w-full" />
                      </div>
                    </div>

                    {/* Botão de Disparo */}
                    <div className="pt-1">
                      <div className="w-full py-2 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider rounded-lg text-center shadow-lg shadow-emerald-900/30 border border-emerald-500/20">
                        Autopreenchido via SIGESS
                      </div>
                    </div>
                  </div>

                </div>

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
