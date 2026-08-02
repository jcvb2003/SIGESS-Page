export const FPS = 30;

export const sceneDurations = {
  prelude: 4 * FPS,
  manual: 10 * FPS,
  audience: 6 * FPS,
  intro: 6 * FPS,
  web: 10 * FPS,
  automation: 4 * FPS,
  gov: 10 * FPS,
  reap: 7 * FPS,
  defeso: 11 * FPS,
  esocial: 6 * FPS,
  human: 4 * FPS,
  end: 2 * FPS,
};

export const TOTAL_FRAMES = Object.values(sceneDurations).reduce(
  (total, duration) => total + duration,
  0,
);

export const narration = [
  {at: "00:01", text: "Sua entidade ainda depende de processos manuais?"},
  {at: "00:07", text: "Cadastros espalhados, documentos preenchidos um a um e várias contas GOV abertas durante o atendimento?"},
  {at: "00:14", text: "Se você administra uma associação, sindicato ou colônia de pescadores, conhece bem essa rotina."},
  {at: "00:20", text: "Conheça o SIGESS: gestão e automação desenvolvidas especialmente para entidades de pesca."},
  {at: "00:26", text: "São duas frentes integradas. No sistema web, você organiza os sócios, emite documentos, acompanha o financeiro e consulta os relatórios da entidade."},
  {at: "00:36", text: "E o Robô do SIGESS executa as tarefas repetitivas."},
  {at: "00:40", text: "Ele coleta os dados para o cadastro, abre várias sessões GOV ao mesmo tempo e ajuda a identificar divergências antes do envio."},
  {at: "00:50", text: "No REAP, preenche e processa em lote as versões Simplificada e Anual."},
  {at: "00:57", text: "No Seguro Defeso, auxilia na digitação dos requerimentos e mostra quem já recebeu o benefício sem precisar acessar a conta GOV de cada pescador."},
  {at: "01:08", text: "Também gera ou consulta guias do eSocial para vários associados de uma só vez."},
  {at: "01:14", text: "Enquanto o SIGESS automatiza a rotina, sua equipe continua atendendo."},
  {at: "01:18", text: "SIGESS. Gestão e automação para entidades de pesca."},
];
