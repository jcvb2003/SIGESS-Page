import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'O SIGESS transformou a nossa secretaria. Antes levávamos dias para organizar os requerimentos do defeso. Hoje fazemos tudo em horas.',
    author: 'Presidente',
    entity: 'Colônia Z-50 de Oeiras do Pará',
    rating: 5,
  },
  {
    quote: 'Finalmente um sistema que entende a realidade dos sindicatos de pesca. O controle financeiro é exatamente o que a gente precisava.',
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
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-slate-600">
            Entidades de pesca artesanal de todo o Brasil já utilizam o SIGESS
            para simplificar sua gestão.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 card-hover relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-emerald-700 font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.entity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
