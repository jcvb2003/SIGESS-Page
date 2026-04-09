import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { FileText, Shield, LifeBuoy, Clock } from 'lucide-react';

export function TermsOfUse() {
  const lastUpdate = "09 de abril de 2026";

  const sections = [
    {
      icon: Shield,
      title: "1. Termos",
      content: "Ao acessar o site SIGESS, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site."
    },
    {
      icon: FileText,
      title: "2. Licença de Uso",
      content: "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site SIGESS apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode modificar ou copiar os materiais."
    },
    {
      icon: LifeBuoy,
      title: "3. Isenção de Responsabilidade",
      content: "Os materiais no site da SIGESS são fornecidos 'como estão'. SIGESS não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos."
    },
    {
      icon: Clock,
      title: "4. Limitações",
      content: "Em nenhum caso o SIGESS ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em SIGESS."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Termos de <span className="text-emerald-600">Uso</span>
            </h1>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
              Última atualização: {lastUpdate}
            </p>
          </div>

          {/* Content Wrapper */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden animate-fade-in-up">
            <div className="p-8 sm:p-12 space-y-12">
              <section className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  Bem-vindo ao SIGESS. Ao utilizar nossa plataforma, você concorda com os termos aqui estabelecidos. 
                  Por favor, leia-os atentamente para garantir uma experiência segura e produtiva.
                </p>
              </section>

              <div className="grid gap-12 sm:grid-cols-2">
                {sections.map((section) => (
                  <section key={section.title} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <section.icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mt-12">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  5. Precisão dos materiais
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Os materiais exibidos no site da SIGESS podem incluir erros técnicos, tipográficos ou fotográficos. 
                  SIGESS não garante que qualquer material em seu site seja preciso, completo ou atual. 
                  SIGESS pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
                </p>
              </section>
            </div>
          </div>

          {/* Contact help */}
          <div className="mt-12 text-center text-slate-500 text-sm">
            <p>Dúvidas sobre nossos termos? <button onClick={() => {
              globalThis.scrollTo({ top: 0, behavior: 'smooth' });
              // Simple way to navigate and scroll if needed, but Footer/Navbar handle this usually.
              // For now, consistent with project:
              globalThis.location.href = "/#contato";
            }} className="text-emerald-600 hover:underline font-medium">Entre em contato conosco.</button></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
