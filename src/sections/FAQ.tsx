import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    category: 'Sobre o sistema',
    items: [
      {
        question: 'O SIGESS substitui o que a gente usa hoje?',
        answer:
          'Sim. Se você usa planilhas, cadernos ou controles manuais para gerenciar sócios, cobranças e requerimentos de defeso, o SIGESS substitui tudo isso em um sistema único, organizado e acessível de qualquer computador.',
      },
      {
        question: 'Preciso instalar algum programa no computador?',
        answer:
          'Não. O SIGESS funciona direto pelo navegador - Chrome, Firefox ou Edge. Não há instalação, não depende de um computador específico e os dados ficam seguros na nuvem.',
      },
      {
        question: 'A secretaria tem pouca internet. O sistema vai funcionar?',
        answer:
          'O SIGESS é online e precisa de conexão para funcionar. Para situações de campo com conectividade limitada, o sistema possui recursos de cache que permitem continuar trabalhando por períodos curtos sem sinal.',
      },
      {
        question: 'Outras entidades vão conseguir ver os dados dos nossos sócios?',
        answer:
          'Não. Cada entidade tem sua própria instância isolada do sistema. Os dados de uma entidade são completamente separados dos de qualquer outra - por arquitetura, não apenas por configuração.',
      },
    ],
  },
  {
    category: 'Defeso e módulos',
    items: [
      {
        question: 'O sistema gera os requerimentos de Seguro Defeso automaticamente?',
        answer:
          'Sim. Com os dados do sócio já cadastrados, o SIGESS preenche e gera o requerimento pronto para assinar, sem precisar digitar tudo de novo.',
      },
      {
        question: 'Como eu sei quem já recebeu o benefício do defeso?',
        answer:
          'O SIGESS importa o arquivo oficial do Portal da Transparência e cruza automaticamente com os requerimentos cadastrados. Assim, a entidade descobre quem recebeu o seguro sem precisar entrar na conta gov.br de cada pescador para fazer a pesquisa.',
      },
      {
        question: 'O que é a Extensão SIGESS e eu preciso dela?',
        answer:
          'A Extensão é um complemento para o Firefox que automatiza tarefas nos portais do governo, como preencher o REAP, fazer login múltiplo no eSocial e gerar boletos GPS. Ela é especialmente útil para entidades com muitos sócios e operações em lote.',
      },
      {
        question: 'O SIGESS cuida do REAP?',
        answer:
          'Sim. O sistema controla quais anos cada sócio já enviou, identifica pendências usando a lista oficial do governo e, com a Extensão, permite fazer REAP em cerca de 20 segundos e enviar em lote para vários sócios.',
      },
      {
        question: 'É possível gerar boletos e processar REAP em lote?',
        answer:
          'Sim. O ecossistema do SIGESS foi pensado para operação em escala: boletos podem ser gerados em massa e o REAP pode ser processado em lote, reduzindo horas de trabalho manual da secretaria.',
      },
    ],
  },
  {
    category: 'Contratação e suporte',
    items: [
      {
        question: 'Quanto custa?',
        answer:
          'O valor é uma licença mensal ajustada ao tamanho da sua entidade. Não há taxa de implementação nem custo por usuário interno. Entre em contato para receber uma proposta para a sua realidade.',
      },
      {
        question: 'Quantos funcionários podem usar ao mesmo tempo?',
        answer:
          'Sem limite. Você cadastra quantos usuários internos precisar, cada um com o nível de acesso adequado - secretaria, financeiro ou administrador.',
      },
      {
        question: 'Se eu cancelar, perco os dados?',
        answer:
          'Não. Seus dados pertencem à sua entidade. Em caso de cancelamento, fornecemos exportação completa de tudo que foi cadastrado.',
      },
      {
        question: 'Tem treinamento na implantação?',
        answer:
          'Sim. Nossa equipe realiza uma videochamada de treinamento completo, mostrando como usar o sistema na prática e tirando as dúvidas da equipe.',
      },
      {
        question: 'Tem suporte? Como funciona?',
        answer:
          'Sim. O suporte técnico está incluso na licença e é 100% humano. O atendimento é feito por WhatsApp, Meet e telefone, com uma equipe que conhece a realidade das entidades de pesca.',
      },
      {
        question: 'É possível migrar os dados que já temos em planilha?',
        answer:
          'Sim. O SIGESS possui módulo de importação para cadastrar sócios em massa a partir de planilhas. Nossa equipe auxilia nesse processo durante a implantação.',
      },
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Respostas para as principais dúvidas de presidentes e secretários
            que estão conhecendo o SIGESS pela primeira vez.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {group.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {group.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${group.category}-${index}`}
                    className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm data-[state=open]:border-emerald-200 data-[state=open]:shadow-md transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left text-slate-800 font-semibold hover:text-emerald-700 hover:no-underline py-5 text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Ainda tem dúvidas? Fale diretamente com nossa equipe.
          </p>
          <a
            href="https://wa.me/5591993193461?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+SIGESS+para+minha+entidade+de+pesca."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
