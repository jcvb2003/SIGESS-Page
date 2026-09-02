import { useState } from 'react';
import { Quotes as Quote, Star } from '@phosphor-icons/react';
import { useInView } from '@/hooks/useInView';

const testimonials = [
  {
    quote: 'O SIGESS transformou a nossa secretaria. Antes levávamos dias para organizar os requerimentos do defeso. Hoje fazemos tudo em minutos.',
    author: 'Presidente',
    entity: 'Colônia Z-50 de Oeiras do Pará',
    rating: 5,
  },
  {
    quote: 'Finalmente um sistema que entende a realidade das entidades de pesca. O controle financeiro é exatamente o que a gente precisava.',
    author: 'Secretária',
    entity: 'SINPESCA - Breves',
    rating: 5,
  },
  {
    quote: 'O preenchimento do REAP é coisa de outro mundo. A facilidade que cada automação trouxe para o nosso dia a dia é incrível!',
    author: 'Presidente',
    entity: 'SINPESCA - Oeiras do Pará',
    rating: 5,
    image: '/images/santana.png',
  },
  {
    quote: 'O suporte é excelente. Sempre que precisamos, a equipe está pronta para ajudar. Recomendo para todas as entidades de pesca.',
    author: 'Diretor',
    entity: 'APOP',
    rating: 5,
  },
];

export function Testimonials() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const selectTestimonial = (index: number) => {
    setActiveTestimonial(index);
    const slide = gridRef.current?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <section className="relative flex items-center bg-white py-8 snap-start snap-always scroll-mt-16 sm:py-10 lg:min-h-screen lg:py-14 lg:scroll-mt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto mb-8 max-w-3xl text-center will-animate sm:mb-10 lg:mb-16 ${headerVisible ? 'is-visible' : ''}`}
        >
          <h2 className="mb-3 text-3xl font-bold text-slate-800 md:mb-4 md:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Entidades de pesca artesanal de todo o Brasil já utilizam o SIGESS
            para simplificar sua gestão.
          </p>
        </div>

        {/* Testimonials Carousel on mobile / grid on desktop */}
        <div
          ref={gridRef}
          role="region"
          aria-label="Depoimentos de clientes"
          onScroll={(event) => {
            const carousel = event.currentTarget;
            const slides = Array.from(carousel.children);
            const nextIndex = slides.reduce((closestIndex, slide, index) => {
              const closestSlide = slides[closestIndex] as HTMLElement;
              const currentSlide = slide as HTMLElement;
              const closestDistance = Math.abs(closestSlide.offsetLeft - carousel.scrollLeft);
              const currentDistance = Math.abs(currentSlide.offsetLeft - carousel.scrollLeft);
              return currentDistance < closestDistance ? index : closestIndex;
            }, 0);

            setActiveTestimonial(nextIndex);
          }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative w-full shrink-0 snap-start rounded-2xl border border-slate-100 bg-white p-5 pt-14 shadow-sm will-animate anim-delay-${index} sm:p-6 sm:pt-14 md:w-auto md:shrink md:p-8 ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Quote icon */}
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 shadow-lg md:-left-2 md:-top-4 md:h-10 md:w-10 md:rounded-xl">
                <Quote className="h-4 w-4 text-white md:h-5 md:w-5" />
              </div>

              {/* Rating */}
              <div className="mb-3 flex gap-1 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-5 text-base leading-relaxed text-slate-700 sm:mb-6 md:text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                  />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:h-12 sm:w-12">
                    <span className="text-lg font-bold text-emerald-700">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.author}</p>
                  <p className="text-xs text-slate-500 sm:text-sm">{testimonial.entity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 md:hidden" aria-label="Navegação dos depoimentos">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.entity}
              type="button"
              aria-label={`Ver depoimento ${index + 1}`}
              aria-current={activeTestimonial === index ? 'true' : undefined}
              onClick={() => selectTestimonial(index)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <span className={`h-2 rounded-full transition-all ${activeTestimonial === index
                ? 'w-6 bg-emerald-600'
                : 'w-2 bg-slate-300'
                }`}
              />
              <span className="sr-only">Depoimento {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
