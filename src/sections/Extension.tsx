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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Extensão para Firefox
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O braço automatizado do SIGESS
          </h2>
          <p className="text-lg text-emerald-100 leading-relaxed">
            A Extensão SIGESS conecta o sistema diretamente aos portais do governo -
            MTE, MPA, eSocial e gov.br - e executa tarefas burocráticas no lugar da equipe.
            Não é um atalho. É automação real, pensada para reduzir horas de trabalho manual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extensionFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-emerald-100 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Disponível para clientes SIGESS
              </h3>
              <p className="text-emerald-100 leading-relaxed text-sm">
                Instalação via Firefox em minutos,
                sem configuração técnica e pronta para operação em lote.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Quero saber mais
                <ArrowRight className="w-4 h-4" />
              </a>
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
