import { useState } from 'react';
import {
  Users,
  FileText,
  CurrencyDollar as DollarSign,
  ChartBar as BarChart3,
  Gear as Settings,
  CheckCircle,
  Receipt,
  Building,
  FileArrowDown as FileCheck,
  ClipboardText as ClipboardList,
  Calendar,
  MagnifyingGlass as Search,
  FileMagnifyingGlass as FileSearch,
} from '@phosphor-icons/react';

const modules = [
  {
    icon: Users,
    title: 'Sócios e cadastro',
    description: 'Cadastro, consulta e atualização dos dados pessoais, profissionais e associativos.',
    features: [
      'Dados pessoais, documentos, endereço e informações profissionais',
      'RGP, NIT, CPF e demais documentos do associado',
      'Situação associativa, observações e histórico cadastral',
      'Filtros por localidade, portaria, situação, RGP e aniversário',
      'Fotografia, ficha cadastral e carteirinha do associado',
    ],
    image: '/images/tela-socios.jpg',
    visualType: 'members',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Documentos',
    description: 'Emissão de documentos a partir das informações cadastradas no SIGESS.',
    features: [
      'Carteirinha e ficha cadastral do associado',
      'Declaração de residência e termos de representação',
      'Requerimentos e modelos próprios da entidade',
      'Preenchimento de testemunhas quando exigido pelo documento',
      'Geração dos documentos em PDF',
    ],
    image: '/images/requirements.png',
    visualType: 'documents',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: FileCheck,
    title: 'Seguro Defeso',
    description: 'Controle dos requerimentos, protocolos e recebimentos do Seguro Defeso.',
    features: [
      'Registro de protocolo e situação do requerimento no MTE',
      'Organização por período, portaria e status',
      'Confirmação e histórico do recebimento do benefício',
    ],
    image: '/images/requirements.png',
    visualType: 'documents',
    color: 'from-cyan-600 to-cyan-700',
  },
  {
    icon: ClipboardList,
    title: 'REAP',
    description: 'Gestão do REAP Simplificado e Anual por associado e ano de referência.',
    features: [
      'REAP Simplificado dos anos de 2021 a 2024',
      'REAP Anual a partir de 2025',
      'Importação e leitura dos comprovantes em PDF',
      'Consulta de pendências a partir das listas oficiais',
      'Controle de situação por associado e ano de referência',
      'Seleção de associados para processamento em lote pelo Robô',
    ],
    image: null,
    visualType: 'reap',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: DollarSign,
    title: 'Financeiro',
    description: 'Registro e acompanhamento das cobranças e recebimentos dos associados.',
    features: [
      'Anuidades, mensalidades, taxas e contribuições',
      'Repasses DAE e importação de pagamentos',
      'Cobranças individuais ou em lote integradas ao Asaas',
      'Sessões de pagamento e emissão de recibos',
      'Extrato financeiro individual do associado',
      'Histórico de alterações e cancelamentos',
    ],
    image: '/images/tela-financeiro.jpg',
    visualType: 'finance',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Building,
    title: 'Coordenadores e polos',
    description: 'Organização dos responsáveis, associados e unidades que compõem a entidade.',
    features: [
      'Cadastro de coordenadores e responsáveis regionais',
      'Vinculação de associados aos coordenadores',
      'Cadastro e administração de polos ou unidades',
      'Seleção da unidade ativa durante a operação',
      'Vinculação de usuários às unidades autorizadas',
    ],
    image: null,
    visualType: 'settings',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: BarChart3,
    title: 'Relatórios',
    description: 'Consultas consolidadas dos registros operacionais e financeiros da entidade.',
    features: [
      'Relatório de requerimentos de Seguro Defeso',
      'Relatório de associados em condição de aposentadoria',
      'Pagamentos registrados por período',
      'Repasses DAE registrados por período',
      'Filtros e exportação dos relatórios disponíveis',
    ],
    image: null,
    visualType: 'reports',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Settings,
    title: 'Gestão da entidade',
    description: 'Configuração dos dados institucionais, parâmetros e acessos do SIGESS.',
    features: [
      'Dados institucionais, endereço, contatos e identidade visual',
      'Cadastro de localidades e portarias',
      'Períodos de pesca, defeso e publicações',
      'Usuários, perfis e permissões de acesso',
      'Importação e exportação de dados da entidade',
      'Parâmetros de integração com a extensão SIGESS',
    ],
    image: null,
    visualType: 'settings',
    color: 'from-slate-500 to-slate-600',
  },
];

function ModuleVisual({ module }: { module: typeof modules[0] }) {
  if (module.image) {
    return (
      <div className="relative max-w-md mx-auto lg:max-w-none lg:w-4/5">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/50">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-auto"
          />
        </div>
        <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br ${module.color} opacity-10 -bottom-4 -right-4`} />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
        <div className="grid grid-cols-2 gap-3">
          {module.visualType === 'reports' ? (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Receipt className="w-24 h-24 text-purple-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                    <Receipt className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Inadimplentes</p>
                  <p className="text-xl font-bold text-slate-800">45</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-24 h-24 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Arrecadação</p>
                  <p className="text-xl font-bold text-slate-800">R$ 125K</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Building className="w-24 h-24 text-blue-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">DAE Pendente</p>
                  <p className="text-xl font-bold text-slate-800">23</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-24 h-24 text-amber-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                    <FileCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Exportados</p>
                  <p className="text-xl font-bold text-slate-800">156</p>
                </div>
              </div>
            </>
          ) : module.visualType === 'reap' ? (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Calendar className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Simplificado</p>
                  <p className="text-lg font-bold text-slate-800 mb-2">2021-2024</p>
                  <div className="flex gap-1">
                    {[21, 22, 23, 24].map(y => (
                      <div key={y} className="w-7 h-5 bg-teal-500 rounded flex items-center justify-center text-[9px] text-white font-bold tracking-tighter">'{y}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <FileSearch className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FileSearch className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">REAP Anual</p>
                  <p className="text-lg font-bold text-slate-800 mb-2">Padrão 2025+</p>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-teal-500 rounded-full animate-pulse" />
                    </div>
                    <p className="text-[10px] text-teal-600 font-bold uppercase">Analisando PDFs...</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Users className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Multiprocessamento</p>
                  <p className="text-lg font-bold text-slate-800 mb-2">5 Sócios/Lote</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-teal-100 flex items-center justify-center overflow-hidden">
                        <span className="text-[8px] font-bold text-teal-700">S{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Search className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Monitoramento</p>
                  <p className="text-lg font-bold text-slate-800 mb-2">Radar Automático</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-600 rounded-full border border-rose-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">12 Pendências</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Settings className="w-24 h-24 text-slate-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Settings className="w-5 h-5 text-slate-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Anuidade</p>
                  <p className="text-xl font-bold text-slate-800">R$ 120,00</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Settings className="w-24 h-24 text-slate-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Settings className="w-5 h-5 text-slate-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Defeso</p>
                  <p className="text-xl font-bold text-slate-800">Mar - Mai</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all col-span-2">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Users className="w-24 h-24 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Níveis de Permissão</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold border border-emerald-100 uppercase tracking-tight">Administrador</span>
                    <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold border border-blue-100 uppercase tracking-tight">Secretaria</span>
                    <span className="px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-[10px] font-bold border border-amber-100 uppercase tracking-tight">Financeiro</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Modules() {
  const [active, setActive] = useState(0);
  const module = modules[active];

  return (
    <section id="modulos" className="relative min-h-screen flex items-center py-10 lg:py-14 bg-white snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Módulos do sistema
          </h2>
          <p className="text-lg text-slate-600">
            Conheça as áreas do SIGESS e as operações disponíveis em cada uma delas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-12 items-start">
          {/* Navegação - lista lateral como um menu de app */}
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible -mx-1 px-1 lg:mx-0 lg:px-0 pb-2 lg:pb-0 lg:border-r lg:border-slate-100 lg:pr-4">
            {modules.map((m, i) => {
              const Icon = m.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  id={`modulo-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left whitespace-nowrap transition-colors duration-200 ${isActive ? 'bg-slate-50' : 'hover:bg-slate-50/60'
                    }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isActive ? `bg-gradient-to-br ${m.color} shadow-sm` : 'bg-slate-100'
                      }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <span className={`text-sm ${isActive ? 'font-bold text-slate-800' : 'font-medium text-slate-500'}`}>
                    {m.title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Painel do módulo ativo */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600">
                {module.description}
              </p>

              <ul className="space-y-3">
                {module.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <ModuleVisual module={module} />
          </div>
        </div>
      </div>
    </section>
  );
}
