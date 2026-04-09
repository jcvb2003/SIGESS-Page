import { Wrench, Sparkles } from 'lucide-react';

export function UtilitiesHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-emerald-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Wrench className="w-4 h-4" />
          <span>Ecossistema de Ferramentas</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in-up">
          Utilitários <span className="text-emerald-600">SIGESS</span>
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          Ferramentas desenvolvidas para facilitar o dia a dia da secretaria de pesca. 
          Extração de dados de PDFs, geradores de documentos e muito mais.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-emerald-600 font-medium animate-fade-in delay-200">
          <Sparkles className="w-5 h-5" />
          <span>Novas ferramentas sendo adicionadas semanalmente</span>
        </div>
      </div>
    </section>
  );
}
