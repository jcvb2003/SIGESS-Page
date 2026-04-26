import { CheckCircle, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Instância exclusiva e segura',
  'Todos os módulos inclusos',
  'Suporte técnico dedicado',
  'Atualizações contínuas',
  'Sem limite de usuários internos',
  'Dados protegidos e isolados',
];

export function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Planos e contratação
          </h2>
          <p className="text-lg text-slate-600">
            Modelo de licenciamento anual por entidade. O valor é definido conforme o número de sócios cadastrados.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  <span>Licença anual</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold">
                  Proposta personalizada
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Valor ajustado à realidade da sua entidade.
                </p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <p className="text-slate-300 text-lg font-semibold mb-2">Proposta personalizada</p>
                <p className="text-slate-400 text-sm mb-8">
                  Valor ajustado à realidade da sua entidade
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold btn-glow group"
                  >
                    Solicitar proposta
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg font-semibold"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Sem taxa de setup', desc: 'Comece imediatamente' },
            { label: 'Cancelamento flexível', desc: 'Sem multa ou fidelidade' },
            { label: 'Suporte incluso', desc: 'Atendimento humano' },
            { label: 'Garantia de 30 dias', desc: 'Dinheiro de volta' },
          ].map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-slate-800 mb-1">{item.label}</p>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
