import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { CheckCircle } from '@phosphor-icons/react';

const SIGESS_LETTERS = 'SIGESS'.split('');

export function Hero() {
  const wordmarkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!wordmarkRef.current) return;

    const letters = wordmarkRef.current.querySelectorAll('.hero-letter');

    animate(letters, {
      translateY: [-32, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 900,
      delay: stagger(70),
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden snap-start snap-always scroll-mt-16 lg:scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in-up">
          <div className="flex flex-col items-center gap-5">
            <h1
              ref={wordmarkRef}
              aria-label="SIGESS"
              className="flex text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-emerald-600"
            >
              {SIGESS_LETTERS.map((letter, index) => (
                <span key={index} aria-hidden="true" className="hero-letter inline-block opacity-0">
                  {letter}
                </span>
              ))}
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight max-w-2xl">
              Simplifique a <span className="text-emerald-600">gestão</span> da sua entidade de <span className="text-emerald-600">pesca artesanal</span>
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              O único sistema desenvolvido para a realidade do pescador artesanal brasileiro.
              Do cadastro do sócio ao controle do defeso, tudo em um só lugar - simples,
              seguro e 100% online.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'REAP em cerca de 20 segundos',
              'Guia GPS/DAE e REAP em lote',
              'Treinamento completo + suporte humano',
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
        </div>
      </div>
    </section>
  );
}
