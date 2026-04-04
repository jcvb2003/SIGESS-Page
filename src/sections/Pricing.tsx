import { CheckCircle, Users, ArrowRight, MessageCircle } from 'lucide-react';
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
                    <MessageCircle className="w-5 h-5 mr-2" />
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
