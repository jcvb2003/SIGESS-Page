import { Anchor, Users, Buildings as Building2, Briefcase } from '@phosphor-icons/react';
import { useInView } from '@/hooks/useInView';

const entities = [
  {
    icon: Anchor,
    title: 'Colônias de Pescadores',
    description: 'Todas as colônias municipais. Gestão completa para organizações de todos os portes.',
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
  {
    icon: Briefcase,
    title: 'Advogados e Autônomos',
    description: 'Profissionais que prestam serviços a entidades de pesca e precisam de acesso organizado às informações dos sócios.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export function ForWho() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="para-quem" className="relative min-h-screen flex items-center py-10 lg:py-14 bg-white snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 will-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Para quem é o SIGESS
          </h2>
          <p className="text-lg text-slate-600">
            O SIGESS foi desenvolvido por quem conhece a pesca artesanal.
            Atendemos diferentes tipos de entidades com a mesma dedicação.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {entities.map((entity, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 will-animate anim-delay-${index} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl ${entity.color} flex items-center justify-center mb-6`}>
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
      </div>
    </section>
  );
}
