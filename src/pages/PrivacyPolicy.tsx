import { LegalDocument, type LegalSection } from '../components/LegalDocument';

const sections: LegalSection[] = [
  { title: '1. Apresentação e escopo', paragraphs: [
    'Esta Política de Privacidade explica como dados pessoais podem ser tratados nas diferentes superfícies do SIGESS: site institucional e seus formulários, utilitários públicos, Extensão e SIGESS Web.',
    'A Política se aplica a visitantes, interessados, representantes de entidades, usuários autorizados e pessoas cujos dados sejam inseridos pela entidade cliente. Ela deve ser lida em conjunto com os Termos de Uso e com as condições da contratação.',
  ] },
  { title: '2. Papéis e responsabilidades', paragraphs: [
    'Nos contatos comerciais e na operação dos serviços próprios, o SIGESS define as finalidades correspondentes ao atendimento, contratação, segurança e funcionamento do serviço.',
    'Quando a entidade cliente insere dados de seus associados, usuários ou terceiros no SIGESS Web, a entidade define as finalidades do tratamento e deve assegurar a base legal e a transparência aplicáveis. O SIGESS trata esses dados para prestar a plataforma, conforme as instruções da entidade e a contratação.',
    'O titular poderá precisar contatar tanto o SIGESS quanto a entidade cliente, conforme a origem e a finalidade do dado solicitado.',
  ] },
  { title: '3. Visitantes e contatos comerciais na Page', paragraphs: [
    'O site pode tratar dados fornecidos em formulários, canais de atendimento, solicitações de demonstração e contatos comerciais.',
    'O formulário de contato e contratação pode coletar os seguintes dados:',
  ], items: [
    'nome completo do responsável;',
    'nome da entidade ou organização;',
    'CPF ou CNPJ da entidade;',
    'e-mail;',
    'estado e município;',
    'quantidade aproximada de sócios;',
    'plano ou faixa de interesse, quando informado.',
  ] },
  { title: '4. Finalidades dos dados comerciais', paragraphs: [
    'Os dados da Page podem ser utilizados para responder ao interessado, apresentar planos, dimensionar a contratação, realizar contato por WhatsApp ou outros canais solicitados, organizar demonstração, prestar atendimento inicial e cumprir obrigações relacionadas à contratação.',
    'O SIGESS não deve utilizar dados fornecidos para uma solicitação comercial para finalidade incompatível sem informar o titular ou obter a autorização necessária.',
  ] },
  { title: '5. Utilitários públicos e processamento local', paragraphs: [
    'Alguns utilitários disponibilizados na Page permitem selecionar arquivos e gerar documentos no navegador. No gerador REAP, a leitura do PDF e a geração do arquivo de saída ocorrem localmente no dispositivo do usuário.',
    'O navegador pode realizar comunicações técnicas necessárias para carregar bibliotecas, imagens ou recursos externos, e alguns dados de preferência podem ser mantidos no armazenamento local. O usuário deve evitar selecionar arquivos que não sejam necessários ao uso do utilitário.',
  ] },
  { title: '6. Dados de usuários do SIGESS Web', paragraphs: [
    'O SIGESS Web pode tratar dados de identificação e contato de usuários, dados de autenticação, entidade e unidade de atuação, perfis, permissões, registros de acesso, eventos de segurança, preferências e informações necessárias ao suporte.',
    'A entidade cliente administra seus usuários e deve conceder somente as permissões necessárias. Os dados são organizados de acordo com a entidade e, quando aplicável, com a unidade ou polo selecionado pelo usuário.',
  ] },
  { title: '7. Dados de associados e operação da entidade', paragraphs: [
    'Conforme os módulos contratados e utilizados, a entidade pode inserir ou tratar:',
  ], items: [
    'nome, CPF, documentos de identificação, endereço e contatos;',
    'informações profissionais, registros de atividade, RGP, NIT e dados relacionados à associação;',
    'fotografias, fichas, carteirinhas, declarações, requerimentos e outros documentos;',
    'informações de Seguro Defeso, REAP, protocolos, períodos, portarias e resultados;',
    'anuidades, mensalidades, taxas, contribuições, pagamentos, DAE, recibos e histórico financeiro;',
    'dados de unidades, polos, coordenadores, responsáveis, usuários e permissões.',
  ] },
  { title: '8. Extensão, automações e credenciais', paragraphs: [
    'A Extensão executa automações localmente nas abas e páginas do navegador do usuário. Credenciais, configurações, filas e dados capturados durante a automação são mantidos no armazenamento local da extensão para permitir a execução das tarefas.',
    'A Extensão pode se comunicar com os serviços do SIGESS para ativação, validação, manutenção da licença, identificação do dispositivo e atualização da situação da assinatura. Essas comunicações são distintas dos dados operacionais utilizados para preencher os portais.',
    'As automações podem interagir com Gov.br, MPA, MTE, eSocial e outros portais autorizados. Os dados e credenciais enviados a esses portais são submetidos em nome da entidade ou do usuário, que deve conferir a operação e manter autorização para utilizá-los. O SIGESS não controla as políticas de privacidade e segurança desses terceiros.',
  ] },
  { title: '9. Integrações, compartilhamento e provedores', paragraphs: [
    'Dados podem ser compartilhados com provedores de hospedagem, autenticação, banco de dados, armazenamento, comunicação, suporte, monitoramento e cobrança quando isso for necessário ao funcionamento contratado.',
    'Também pode haver envio a um serviço externo quando o usuário ou a entidade solicitar uma integração, protocolo, cobrança, pagamento ou automação. O compartilhamento será limitado ao necessário para a finalidade correspondente.',
    'O SIGESS não vende dados pessoais. Dados podem ser divulgados por obrigação legal, ordem de autoridade competente, exercício regular de direitos, prevenção de fraude ou proteção da segurança do serviço.',
  ] },
  { title: '10. Registros técnicos, cookies e segurança', paragraphs: [
    'Podem ser tratados endereço IP, informações do dispositivo e navegador, identificadores técnicos, registros de erro, eventos de segurança, data e horário de acesso e informações necessárias para diagnóstico e prevenção de abuso.',
    'Cookies e armazenamento local podem ser utilizados para autenticação, preferências, funcionamento, segurança e diagnóstico. A restrição desses recursos no navegador pode impedir o funcionamento de partes do serviço.',
    'São adotadas medidas de controle de acesso, segregação por entidade, proteção de credenciais, registro de eventos e boas práticas compatíveis com os riscos. Nenhum ambiente conectado à internet elimina integralmente a possibilidade de incidentes.',
  ] },
  { title: '11. Bases legais e dados sensíveis', paragraphs: [
    'As bases legais podem incluir execução de contrato ou de procedimentos preliminares, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, legítimo interesse e consentimento, conforme a finalidade específica.',
    'A entidade deve avaliar a existência de dados sensíveis, dados de crianças e adolescentes ou dados sujeitos a regras especiais antes de inseri-los no sistema e deve aplicar as medidas exigidas pela legislação.',
  ] },
  { title: '12. Retenção, exportação e eliminação', paragraphs: [
    'Os dados são mantidos pelo período necessário às finalidades informadas, à relação contratual, ao suporte, à segurança, ao cumprimento de obrigações legais e ao exercício regular de direitos.',
    'No encerramento, a entidade poderá solicitar a exportação dos dados. O SIGESS disponibilizará os dados em até 48 (quarenta e oito) horas úteis, desde que o pedido seja validado, e a solicitação deverá ocorrer em até 30 (trinta) dias contados do encerramento.',
    'Após esse prazo, os dados serão excluídos, ressalvada a conservação estritamente necessária para cumprimento de obrigação legal, segurança, prevenção de fraude ou exercício regular de direitos. A exclusão por este procedimento ocorre no encerramento da contratação.',
  ] },
  { title: '13. Direitos do titular e procedimento', paragraphs: [
    'O titular pode solicitar confirmação do tratamento, acesso, correção, informações sobre compartilhamento, portabilidade nos limites legais, anonimização, bloqueio ou eliminação quando aplicável e revogação do consentimento quando essa for a base legal.',
    'A solicitação deve informar o direito exercido, a origem provável dos dados, a entidade relacionada quando conhecida e um meio seguro para resposta. Poderão ser solicitadas informações adicionais para confirmação de identidade.',
    'Quando o dado tiver sido inserido pela entidade cliente, o SIGESS poderá encaminhar ou orientar o titular a procurar a própria entidade, que avaliará a finalidade e as providências necessárias.',
  ] },
  { title: '14. Atualizações desta Política', paragraphs: [
    'Esta Política poderá ser atualizada para refletir alterações no serviço, nos fornecedores, nos processos ou na legislação. A versão vigente permanecerá disponível nesta página com a respectiva versão, data de vigência e última atualização.',
  ] },
];

export function PrivacyPolicy() {
  return <LegalDocument title="Política de" highlightedTitle="Privacidade" effectiveDate="07 de janeiro de 2022" lastUpdate="04 de agosto de 2026" introduction={<p>Esta Política descreve o ciclo de vida dos dados pessoais no ecossistema SIGESS: a coleta pública na Page, o processamento local da Extensão, a operação da entidade no Web, as integrações externas, os registros técnicos, as responsabilidades de cada parte e os direitos dos titulares.</p>} sections={sections} closingTitle="15. Canal oficial de privacidade" closingText={<>Solicitações de titulares, dúvidas e comunicações sobre privacidade devem ser encaminhadas para <a href="mailto:atendimento@sigess.com.br" className="font-medium text-emerald-700 hover:underline">atendimento@sigess.com.br</a>. O atendimento ocorre de segunda a sexta-feira, das 8h às 18h. O assunto pode indicar “Privacidade” ou “LGPD”.</>} />;
}
