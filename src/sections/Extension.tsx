import { Users, FileSignature, ClipboardList, Receipt, Zap, ArrowRight } from 'lucide-react';

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
    description: 'Suporte completo para o REAP Simplificado (MPA) e o REAP Anual (Agro). Espécies, quantidades, dias de trabalho e valores preenchidos automaticamente.',
  },
  {
    icon: Receipt,
    title: 'Geração e Consulta de Boletos GPS',
    description: 'Acessa o eSocial, navega direto para Consulta de Guias ou Geração de GPS, aplica os filtros e preenche os valores. Sem cliques manuais.',
  },
  {
    icon: Zap,
    title: 'Cadastro Automático via PesqBrasil',
    description: 'Ao abrir a ficha de um pescador no PesqBrasil, a extensão captura todos os dados e os envia direto para o cadastro do sócio no SIGESS. Sem digitar duas vezes.',
  },
];

export function Extension() {
  return (
    <section id="extensao" className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
            Extensão para Firefox
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O braço automatizado do SIGESS
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A Extensão SIGESS conecta o sistema diretamente aos portais do governo — 
            MTE, MPA, eSocial, gov.br — e executa as tarefas burocráticas no lugar 
            do seu funcionário. Não é um atalho. É automação real, do início ao fim.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extensionFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-emerald-900/20">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Disponível para clientes SIGESS
              </h3>
              <p className="text-emerald-50 leading-relaxed text-sm">
                Instalação via Firefox em minutos, 
                sem configuração técnica.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                Quero saber mais
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            A extensão SIGESS funciona no Firefox e é distribuída diretamente para os clientes da plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
