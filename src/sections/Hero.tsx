import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z"
            fill="#059669"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Fish className="w-4 h-4" />
              <span>Gestão para Pesca Artesanal</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Simplifique a{' '}
                <span className="text-emerald-600">gestão</span>{' '}
                da sua entidade de pesca
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                Chega de planilhas, cadernos e perda de tempo. O SIGESS organiza seus sócios,
                documentos e finanças de forma simples, segura e 100% online.
              </p>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap gap-4">
              {[
                'Acesso de qualquer lugar',
                'Dados seguros na nuvem',
                'Suporte dedicado',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold btn-glow group"
              >
                Quero conhecer o SIGESS
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#modulos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold"
              >
                Ver módulos
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div
            ref={imageRef}
            className="relative animate-slide-in-right transition-transform duration-300 ease-out"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
              <img
                src="/images/dashboard-preview.jpg"
                alt="Dashboard do SIGESS"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">8.250+</p>
                  <p className="text-sm text-slate-500">Sócios gerenciados</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-emerald-600 text-white rounded-xl shadow-xl p-3 animate-float delay-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Fish className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium opacity-90">Defeso 2026</p>
                  <p className="text-sm font-bold">Em andamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
