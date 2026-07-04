import { useState } from 'react';
import {
  Users,
  FileText,
  DollarSign,
  BarChart3,
  Settings,
  CheckCircle,
  Receipt,
  Building,
  FileCheck,
  ClipboardList,
  Calendar,
  Search,
  FileSearch,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const modules = [
  {
    icon: Users,
    title: 'Cadastro de Sócios',
    description: 'Gerencie todos os dados dos seus pescadores em um único lugar.',
    features: [
      'Documentos pessoais, RGP, NIT',
      'Endereço e foto do associado',
      'Situação associativa',
      'Busca rápida por nome ou CPF',
      'Cadastro com abas organizadas',
    ],
    image: '/images/tela-socios.jpg',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Documentos e Requerimentos',
    description: 'Gere automaticamente os requerimentos de Seguro-Defeso.',
    features: [
      'Requerimentos preenchidos automaticamente',
      'Controle por período do defeso',
      'Evite retrabalho e falhas',
      'Garanta que nenhum pescador fique sem benefício',
      'Histórico de requerimentos',
    ],
    image: '/images/requirements.png',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: DollarSign,
    title: 'Módulo Financeiro',
    description: 'Desenvolvido para a realidade financeira das entidades de pesca artesanal.',
    features: [
      'Anuidades e mensalidades',
      'Gestão do DAE (Previdência Social)',
      'Contribuições compulsórias e facultativas',
      'Boletos e guias com operação em massa',
      'Comprovantes na hora',
    ],
    image: '/images/tela-financeiro.jpg',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: ClipboardList,
    title: 'REAP',
    description: 'Controle completo do Relatório de Exercício da Atividade Pesqueira. Desde o acompanhamento das pendências ao preenchimento e envio para o governo.',
    features: [
      'Em muitos casos, um REAP pode ser feito em cerca de 20 segundos',
      'REAP Simplificado (2021-2024) por ano de emissão do RGP',
      'REAP Anual (2025 em diante) com importação de comprovantes PDF',
      'Identificação de pendências via lista oficial do governo',
      'Envio em lote para até 5 sócios via Extensão',
      'Histórico completo por sócio e ano de referência',
    ],
    image: null,
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: BarChart3,
    title: 'Relatórios',
    description: 'Relatórios gerados em tempo real para tomada de decisão.',
    features: [
      'Lista de inadimplentes',
      'Arrecadação por período',
      'Extrato individual de sócios',
      'Sócios com DAE pendente',
      'Exportação em PDF',
    ],
    image: null,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Settings,
    title: 'Configurações',
    description: 'Cada entidade configura seus próprios parâmetros.',
    features: [
      'Valores de anuidade personalizados',
      'Período do defeso configurável',
      'Cadastro de localidades',
      'Dados da entidade',
      'Perfis de acesso por funcionário',
    ],
    image: null,
    color: 'from-slate-500 to-slate-600',
  },
];

function ModuleVisual({ module }: { module: typeof modules[0] }) {
  if (module.image) {
    return (
      <div className="relative">
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
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <div className="grid grid-cols-2 gap-4">
          {module.title === 'Relatórios' ? (
            <>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Receipt className="w-24 h-24 text-purple-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                    <Receipt className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Inadimplentes</p>
                  <p className="text-2xl font-bold text-slate-800">45</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-24 h-24 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Arrecadação</p>
                  <p className="text-2xl font-bold text-slate-800">R$ 125K</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Building className="w-24 h-24 text-blue-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">DAE Pendente</p>
                  <p className="text-2xl font-bold text-slate-800">23</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-24 h-24 text-amber-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Exportados</p>
                  <p className="text-2xl font-bold text-slate-800">156</p>
                </div>
              </div>
            </>
          ) : module.title === 'REAP' ? (
            <>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Calendar className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Simplificado</p>
                  <p className="text-xl font-bold text-slate-800 mb-3">2021-2024</p>
                  <div className="flex gap-1">
                    {[21, 22, 23, 24].map(y => (
                      <div key={y} className="w-7 h-5 bg-teal-500 rounded flex items-center justify-center text-[9px] text-white font-bold tracking-tighter">'{y}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <FileSearch className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileSearch className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">REAP Anual</p>
                  <p className="text-xl font-bold text-slate-800 mb-3">Padrão 2025+</p>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-teal-500 rounded-full animate-pulse" />
                    </div>
                    <p className="text-[10px] text-teal-600 font-bold uppercase">Analisando PDFs...</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Users className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Multiprocessamento</p>
                  <p className="text-xl font-bold text-slate-800 mb-3">5 Sócios/Lote</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-teal-100 flex items-center justify-center overflow-hidden">
                        <span className="text-[8px] font-bold text-teal-700">S{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Search className="w-24 h-24 text-teal-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Monitoramento</p>
                  <p className="text-xl font-bold text-slate-800 mb-3">Radar Automático</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-600 rounded-full border border-rose-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">12 Pendências</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Settings className="w-24 h-24 text-slate-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-5 h-5 text-slate-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Anuidade</p>
                  <p className="text-2xl font-bold text-slate-800">R$ 120,00</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Settings className="w-24 h-24 text-slate-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-5 h-5 text-slate-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Defeso</p>
                  <p className="text-2xl font-bold text-slate-800">Mar - Mai</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all col-span-2">
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

  const prev = () => setActive(i => (i - 1 + modules.length) % modules.length);
  const next = () => setActive(i => (i + 1) % modules.length);

  return (
    <section id="modulos" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Módulos do sistema
          </h2>
          <p className="text-lg text-slate-600">
            Tudo que sua entidade precisa em um só lugar. Cada módulo foi
            pensado para o dia a dia da secretaria de pesca.
          </p>
        </div>

        {/* Navegação por abas */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {modules.map((m, i) => {
            const Icon = m.icon;
            const isActive = i === active;
            return (
              <button
                key={i}
                id={`modulo-tab-${i}`}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                    ? `bg-gradient-to-br ${m.color} text-white shadow-md scale-[1.03]`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* Painel do módulo ativo */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
                <module.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                {module.title}
              </h3>
            </div>

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

        {/* Controles de navegação prev/next */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            id="modulo-prev"
            onClick={prev}
            aria-label="Módulo anterior"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {modules.map((_, i) => (
              <button
                key={i}
                id={`modulo-dot-${i}`}
                onClick={() => setActive(i)}
                aria-label={`Ir para ${modules[i].title}`}
                className={`rounded-full transition-all duration-200 ${i === active
                    ? 'w-6 h-2.5 bg-emerald-500'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>

          <button
            id="modulo-next"
            onClick={next}
            aria-label="Próximo módulo"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
