import { Anchor, Users, Building2 } from 'lucide-react';

const entities = [
  {
    icon: Anchor,
    title: 'Colônias de Pescadores',
    description: 'Z-2, Z-1 e demais colônias municipais. Gestão completa para organizações de todos os portes.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'Sindicatos de Pescadores',
    description: 'Incluindo entidades com polos em diferentes municípios. Controle centralizado de todas as unidades.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Building2,
    title: 'Associações de Pescadores',
    description: 'De pequeno e médio porte. Solução acessível e completa para associações em crescimento.',
    color: 'bg-amber-50 text-amber-600',
  },
];

export function ForWho() {
  return (
    <section id="para-quem" className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Público-alvo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Para quem é o SIGESS
          </h2>
          <p className="text-lg text-slate-600">
            O SIGESS foi desenvolvido por quem conhece a pesca artesanal. 
            Atendemos diferentes tipos de entidades com a mesma dedicação.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {entities.map((entity, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl ${entity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <entity.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {entity.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {entity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">
            Não encontrou sua categoria? Entre em contato para saber como podemos ajudar.
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Falar com nossa equipe
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
