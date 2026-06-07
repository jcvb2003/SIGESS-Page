import { Users, FileSignature, ClipboardList, Receipt, Zap, ArrowRight, CheckCircle } from 'lucide-react';

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
  return (
    <section id="extensao" className="relative py-20 lg:py-28 bg-gradient-emerald overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 relative">
          {/* Coluna Esquerda - Textos e Features */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                Extensão para Firefox
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                O braço automatizado do SIGESS
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed">
                A Extensão conecta o sistema diretamente aos portais do governo -
                MTE, MPA, eSocial e gov.br - e executa tarefas burocráticas no lugar da equipe.
                Não é um atalho. É automação real, pensada para reduzir horas de trabalho manual.
              </p>
            </div>

            <div className="space-y-4">
              {extensionFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-emerald-100/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-xl"
              >
                Quero automatizar minha secretaria
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna Direita - Mockup Animado CSS (Fator WOW) */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:sticky lg:top-32">
            {/* Efeito de brilho traseiro */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-[2rem] blur-2xl opacity-30 animate-pulse" />
            
            {/* Janela do Navegador Simulada */}
            <div className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-700 ease-out hover:scale-[1.02]">
              {/* Barra do Navegador */}
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#2d2d2d]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 flex justify-center px-4">
                  <div className="bg-[#1e1e1e] border border-white/5 rounded-md px-4 py-1 flex items-center w-full max-w-xs">
                    <span className="text-[10px] text-gray-400">segurodefeso.mte.gov.br</span>
                  </div>
                </div>
                {/* Ícone da Extensão Pulsando */}
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-md animate-ping opacity-30" />
                  <div className="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center relative shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Corpo da Janela (Simulando o portal do governo) */}
              <div className="p-8 h-[400px] sm:h-[450px] relative bg-[#f5f5f5]">
                {/* Esqueleto da página do MTE (fundo) */}
                <div className="space-y-4 opacity-40">
                  <div className="w-1/3 h-6 bg-gray-300 rounded" />
                  <div className="w-full h-10 bg-gray-200 rounded" />
                  <div className="w-2/3 h-10 bg-gray-200 rounded" />
                  <div className="w-full h-32 bg-gray-200 rounded" />
                </div>

                {/* Pop-up Central da Automação SIGESS */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] bg-slate-900 rounded-xl p-6 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                      <Zap className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">SIGESS Automator</h4>
                      <p className="text-emerald-400 text-[11px] uppercase tracking-wider font-semibold">Processando em lote</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Digitando REAP (42/100)</span>
                      <span className="text-emerald-400 font-bold">42%</span>
                    </div>
                    
                    {/* Barra de progresso animada */}
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden ring-1 ring-white/5">
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full w-[42%] relative">
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Logs estilo Terminal */}
                    <div className="space-y-2.5 mt-6 bg-slate-950/50 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                        <CheckCircle className="w-3 h-3 text-emerald-500" /> Acessando credenciais .gov...
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                        <CheckCircle className="w-3 h-3 text-emerald-500" /> Preenchendo dados pessoais...
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                        <span className="w-3 h-3 rounded-full border-2 border-emerald-900 border-t-emerald-400 animate-spin flex-shrink-0" /> Anexando documentos PDF...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-emerald-200 text-sm">
            A extensão SIGESS funciona no Firefox e é distribuída diretamente para os clientes da plataforma.
          </p>
        </div>
      </div>

    </section>
  );
}
