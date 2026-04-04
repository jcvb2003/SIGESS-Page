import { 
  Users, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Settings,
  CheckCircle,
  Receipt,
  Building,
  FileCheck
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
    image: '/images/tela-defeso.jpg',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: DollarSign,
    title: 'Módulo Financeiro',
    description: 'Desenvolvido para a realidade financeira dos sindicatos de pesca.',
    features: [
      'Anuidades e mensalidades',
      'Gestão do DAE (Previdência Social)',
      'Contribuições compulsórias e facultativas',
      'Cadastros governamentais',
      'Comprovantes na hora',
    ],
    image: '/images/tela-financeiro.jpg',
    color: 'from-amber-500 to-amber-600',
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

export function Modules() {
  return (
    <section id="modulos" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Módulos do sistema
          </h2>
          <p className="text-lg text-slate-600">
            Tudo que sua entidade precisa em um só lugar. Cada módulo foi 
            pensado para o dia a dia da secretaria de pesca.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="space-y-16">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Icon and Title */}
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

                {/* Features List */}
                <ul className="space-y-3">
                  {module.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              {module.image ? (
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/50">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br ${module.color} opacity-10 -bottom-4 -right-4`} />
                </div>
              ) : (
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <div className="grid grid-cols-2 gap-4">
                      {module.title === 'Relatórios' ? (
                        <>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <Receipt className="w-8 h-8 text-purple-500 mb-2" />
                            <p className="text-sm font-medium text-slate-700">Inadimplentes</p>
                            <p className="text-2xl font-bold text-slate-800">45</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <DollarSign className="w-8 h-8 text-emerald-500 mb-2" />
                            <p className="text-sm font-medium text-slate-700">Arrecadação</p>
                            <p className="text-2xl font-bold text-slate-800">R$ 125K</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <Building className="w-8 h-8 text-blue-500 mb-2" />
                            <p className="text-sm font-medium text-slate-700">DAE Pendente</p>
                            <p className="text-2xl font-bold text-slate-800">23</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <FileCheck className="w-8 h-8 text-amber-500 mb-2" />
                            <p className="text-sm font-medium text-slate-700">Exportados</p>
                            <p className="text-2xl font-bold text-slate-800">156</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <Settings className="w-8 h-8 text-slate-500 mb-2" />
                            <p className="text-sm font-medium text-slate-700">Anuidade</p>
                            <p className="text-lg font-bold text-slate-800">R$ 120,00</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <Settings className="w-8 h-8 text-slate-500 mb-2" />
                            <p className="text-sm font-medium text-slate-700">Defeso</p>
                            <p className="text-lg font-bold text-slate-800">01/03 - 31/05</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm col-span-2">
                            <p className="text-sm font-medium text-slate-700 mb-2">Perfis de Acesso</p>
                            <div className="flex gap-2">
                              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Admin</span>
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Secretaria</span>
                              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">Financeiro</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
