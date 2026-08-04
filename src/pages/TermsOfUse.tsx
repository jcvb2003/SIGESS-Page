import { LegalDocument, type LegalSection } from '../components/LegalDocument';

const sections: LegalSection[] = [
  { title: '1. Preâmbulo e aceite', paragraphs: [
    'Estes Termos de Uso regulam o acesso e a utilização do ecossistema SIGESS pela entidade cliente, seus representantes e usuários autorizados. O aceite ocorre quando a entidade contrata o serviço, cria uma conta ou utiliza qualquer recurso que dependa destes Termos.',
    'A pessoa que aceita estes Termos declara possuir poderes para representar a entidade ou estar autorizada a utilizar o serviço em seu nome. Condições comerciais, limites de plano e serviços adicionais podem ser complementados por proposta, contrato ou ordem de serviço.',
  ] },
  { title: '2. Definições', items: [
    <><strong>SIGESS:</strong> software, serviços, conteúdos, integrações e recursos disponibilizados pela SIGESS.</>,
    <><strong>Entidade cliente:</strong> sindicato, associação, colônia ou outra organização que contrata ou utiliza o SIGESS.</>,
    <><strong>Usuário:</strong> pessoa autorizada pela entidade a acessar o serviço conforme seu perfil.</>,
    <><strong>Dados da entidade:</strong> informações inseridas, importadas, geradas ou mantidas pela entidade no serviço.</>,
    <><strong>Extensão:</strong> componente de navegador destinado a apoiar automações em portais externos autorizados.</>,
    <><strong>Integração:</strong> comunicação com serviços, portais governamentais, meios de pagamento ou provedores de terceiros.</>,
  ] },
  { title: '3. Objeto e escopo do serviço', paragraphs: [
    'O SIGESS oferece ferramentas para gestão de entidades, incluindo cadastro de associados, documentos, requerimentos, Seguro Defeso, REAP, financeiro, relatórios, unidades, usuários, permissões e automações operacionais.',
    'O escopo efetivamente disponível depende do plano, da configuração da entidade e das integrações habilitadas. O SIGESS não presta, por meio do software, consultoria jurídica, contábil ou decisão administrativa em nome da entidade.',
  ] },
  { title: '4. Arquitetura e módulos', paragraphs: [
    'O SIGESS Web é o ambiente principal de operação da entidade. Nele podem ser cadastrados associados, documentos, informações financeiras, unidades, usuários, permissões e registros necessários às atividades da organização.',
    'A Extensão é um componente separado, utilizado para automações em portais governamentais. As automações são executadas no navegador e dependem das páginas, credenciais, permissões e condições técnicas dos portais externos.',
    'O site institucional e seus utilitários possuem finalidade pública e comercial distinta da operação autenticada do SIGESS Web. O uso de cada superfície está sujeito às regras aplicáveis ao respectivo recurso.',
  ] },
  { title: '5. Licença e permissões de uso', paragraphs: [
    'Durante a vigência da contratação e enquanto o plano estiver regular, o SIGESS concede à entidade licença limitada, não exclusiva, intransferível e revogável para utilizar os recursos contratados em suas próprias atividades.',
    'É proibido copiar, ceder, sublicenciar, revender, modificar, descompilar, realizar engenharia reversa, remover avisos de propriedade ou contornar limites técnicos e comerciais, salvo autorização escrita ou hipótese permitida por lei.',
  ] },
  { title: '6. Cadastro e gestão de usuários', paragraphs: [
    'A entidade define seus usuários, perfis e permissões e deve mantê-los atualizados. O compartilhamento de contas é proibido quando impedir a identificação do responsável por uma operação.',
    'A entidade deve comunicar suspeitas de acesso indevido, perda de credenciais ou uso não autorizado. O SIGESS poderá exigir validações adicionais, encerrar sessões ou restringir acesso para proteger o serviço e os dados.',
  ] },
  { title: '7. Responsabilidades da entidade e dos usuários', items: [
    'Fornecer informações verdadeiras, atualizadas e obtidas de forma legítima.',
    'Garantir a base legal, as autorizações e a transparência necessárias para tratar dados de associados e terceiros.',
    'Conferir cadastros, documentos, valores, prazos e resultados antes de qualquer protocolo, cobrança ou comunicação oficial.',
    'Manter suas próprias cópias e controles dos documentos necessários à continuidade de suas atividades.',
    'Utilizar credenciais de portais externos somente em computadores autorizados e por pessoas habilitadas.',
    'Não utilizar o SIGESS para fraude, acesso indevido, violação de direitos ou prática ilícita.',
  ] },
  { title: '8. Automações e integrações externas', paragraphs: [
    'As automações são ferramentas de apoio operacional. A entidade permanece responsável por conferir os dados e autorizar o envio ou protocolo realizado em seu nome.',
    'Portais como Gov.br, MPA, MTE, eSocial e outros serviços externos podem alterar telas, regras, autenticação, limites, certificados, disponibilidade ou mecanismos de segurança. Essas alterações podem interromper ou exigir adaptação das automações.',
    'O SIGESS não controla decisões, prazos, exigências ou disponibilidade dos órgãos e provedores externos. O uso da integração não substitui o acompanhamento da entidade perante o respectivo portal.',
  ] },
  { title: '9. Credenciais e segurança', paragraphs: [
    'Credenciais de acesso ao SIGESS e a portais externos são de responsabilidade da entidade e dos usuários autorizados. Elas devem ser mantidas em sigilo e não devem ser enviadas ao suporte em texto aberto.',
    'Na Extensão, as automações são executadas localmente no navegador do usuário. O tratamento de credenciais, dados capturados e comunicações necessárias à licença é detalhado na Política de Privacidade.',
    'A entidade também é responsável pela segurança de seus computadores, navegadores, rede, antivírus e demais recursos utilizados para acessar o serviço.',
  ] },
  { title: '10. Dados pessoais, confidencialidade e propriedade intelectual', paragraphs: [
    'O tratamento de dados pessoais é regulado pela Política de Privacidade. Em relação aos dados de associados inseridos pela entidade, a entidade define as finalidades e o SIGESS atua conforme as instruções e obrigações estabelecidas na contratação e na legislação aplicável.',
    'O software, a marca, os textos, componentes, layouts, códigos, documentação e demais elementos do SIGESS pertencem à SIGESS ou a seus licenciadores. Os dados inseridos pela entidade não são transferidos ao SIGESS como propriedade intelectual.',
    'Cada parte deve preservar o sigilo das informações confidenciais a que tiver acesso em razão da relação contratual, ressalvadas informações públicas ou divulgações exigidas por lei.',
  ] },
  { title: '11. Planos, pagamento e suspensão', paragraphs: [
    'Valores, limites, periodicidade, dispositivos, usuários, módulos, reajustes, tributos e condições de cancelamento são definidos na proposta ou contratação aplicável.',
    'Em caso de inadimplência, o SIGESS comunicará a entidade com antecedência mínima de 3 (três) dias e poderá suspender o acesso após 7 (sete) dias de atraso, observado o contrato aplicável. A suspensão não elimina valores vencidos nem autoriza o descarte imediato dos dados da entidade.',
  ] },
  { title: '12. Suporte, disponibilidade e manutenção', paragraphs: [
    'O suporte é prestado de segunda a sexta-feira, das 8h às 18h, pelos canais divulgados pelo SIGESS. O atendimento pode solicitar evidências, horários, mensagens de erro e passos para reprodução. A entidade não deve enviar senhas ou dados pessoais além do necessário para a análise.',
    'O SIGESS adota como referência disponibilidade mensal de 98%, ressalvadas manutenções programadas, falhas de internet, infraestrutura, integrações e portais de terceiros, caso fortuito, força maior e demais situações fora do controle razoável do SIGESS.',
    'Prazos de resposta e níveis de atendimento específicos permanecem sujeitos à definição contratual ou à política de suporte vigente.',
  ] },
  { title: '13. Exportação e encerramento', paragraphs: [
    'A entidade permanece responsável pelos dados que inserir no serviço. Após o encerramento, poderá solicitar sua exportação, e o SIGESS disponibilizará os dados em até 48 (quarenta e oito) horas úteis, observados os procedimentos de confirmação e segurança aplicáveis.',
    'O pedido de exportação deverá ser realizado no prazo de até 30 (trinta) dias contados do encerramento da contratação. Após esse período, os dados serão excluídos, ressalvada a conservação estritamente necessária para cumprimento de obrigação legal, segurança, prevenção de fraude ou exercício regular de direitos.',
    'A exclusão de dados por este procedimento somente ocorrerá no encerramento da contratação, sem prejuízo de solicitações de titulares ou de obrigações legais aplicáveis.',
  ] },
  { title: '14. Limitações de responsabilidade', paragraphs: [
    'O SIGESS não responde por prejuízos decorrentes de dados incorretos, uso inadequado, compartilhamento de credenciais, falhas de equipamentos ou rede da entidade, alterações de portais externos, atos de autoridade, caso fortuito ou força maior.',
    'Nenhuma disposição exclui responsabilidade que não possa ser afastada pela legislação aplicável.',
  ] },
  { title: '15. Alterações e legislação aplicável', paragraphs: [
    'Estes Termos podem ser atualizados para refletir mudanças no serviço, na legislação ou nos processos operacionais. A versão vigente permanecerá disponível nesta página, com identificação da versão e das datas relevantes.',
    'A relação será interpretada segundo as leis da República Federativa do Brasil. Fica eleito o foro correspondente à sede da empresa, situada na Rua Santo Antônio, 925, Centro, Oeiras do Pará, Estado do Pará, CEP 68470-000, ressalvadas as hipóteses legais de competência diversa. Condições específicas do contrato prevalecem quando tratarem expressamente do mesmo assunto.',
  ] },
];

export function TermsOfUse() {
  return <LegalDocument title="Termos de" highlightedTitle="Uso" effectiveDate="07 de janeiro de 2022" lastUpdate="04 de agosto de 2026" introduction={<p>Este documento estabelece as condições para utilização do ecossistema SIGESS pela entidade cliente e por seus usuários autorizados. Ele descreve o escopo do serviço, as responsabilidades das partes, o uso de automações e integrações, as regras de segurança, suporte, pagamento, exportação e encerramento.</p>} sections={sections} closingTitle="16. Canal oficial de atendimento" closingText={<>Dúvidas, comunicações contratuais e solicitações relacionadas a estes Termos devem ser encaminhadas para <a href="mailto:atendimento@sigess.com.br" className="font-medium text-emerald-700 hover:underline">atendimento@sigess.com.br</a>. O atendimento ocorre de segunda a sexta-feira, das 8h às 18h.</>} />;
}
