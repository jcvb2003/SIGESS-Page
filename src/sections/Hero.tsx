import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { CheckCircle } from '@phosphor-icons/react';

const SIGESS_LETTERS = 'SIGESS'.split('');

export function Hero() {
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);
  const [canLoadVideo, setCanLoadVideo] = useState(false);

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

    if (mascotRef.current) {
      animate(mascotRef.current, {
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: 'easeOutBack',
        duration: 1000,
        delay: 200,
      });
    }
  }, []);

  useEffect(() => {
    let timer: number | undefined;

    const deferVideo = () => {
      timer = window.setTimeout(() => setCanLoadVideo(true), 1200);
    };

    if (document.readyState === 'complete') {
      deferVideo();
    } else {
      window.addEventListener('load', deferVideo, { once: true });
    }

    return () => {
      window.removeEventListener('load', deferVideo);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden pt-20 snap-start snap-always scroll-mt-16 lg:min-h-screen lg:scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,0.9fr)_minmax(560px,1.1fr)] xl:gap-16 animate-fade-in-up">
          <div className="flex min-w-0 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              <div className="flex items-center justify-center relative select-none lg:justify-start">
              {/* Mascote do Peixinho SIGESS */}
              <img
                ref={mascotRef}
                src="/images/mascote.png"
                alt="Mascote SIGESS"
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain -mr-5 sm:-mr-7 lg:-mr-9 z-10 cursor-pointer transform -translate-y-2 sm:-translate-y-3 lg:-translate-y-4 opacity-0 transition-all duration-300 hover:scale-105"
              />

              <h1
                ref={wordmarkRef}
                aria-label="SIGESS"
                className="flex text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-emerald-600 z-0"
              >
                {SIGESS_LETTERS.map((letter, index) => (
                  <span key={index} aria-hidden="true" className="hero-letter inline-block opacity-0">
                    {letter}
                  </span>
                ))}
              </h1>
              </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight max-w-2xl">
              Simplifique a <span className="text-emerald-600">gestão</span> da sua entidade de <span className="text-emerald-600">pesca artesanal</span>
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              O único sistema desenvolvido para a realidade do pescador artesanal brasileiro.
              Do cadastro do sócio ao controle do defeso, tudo em um só lugar - simples,
              seguro e 100% online.
            </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">
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

          <div className="w-full min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-950 ring-1 ring-white/70">
              <div className="flex items-center border-b border-white/10 bg-slate-900 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {canLoadVideo ? (
                <video
                  className="aspect-video w-full bg-slate-950 object-cover"
                  controls
                  playsInline
                  preload="none"
                  poster="/images/sigess-motion-poster.jpg"
                  aria-label="Vídeo institucional do SIGESS"
                >
                  <source src="/videos/sigess-institucional.mp4" type="video/mp4" />
                  Seu navegador não oferece suporte à reprodução de vídeos.
                </video>
              ) : (
                <div className="aspect-video w-full bg-slate-100" aria-hidden="true" />
              )}
            </div>
            <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
              Veja como o SIGESS une gestão e automação na rotina da sua entidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
