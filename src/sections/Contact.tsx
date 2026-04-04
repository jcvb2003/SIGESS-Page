import { useState } from 'react';
import { MessageCircle, Send, User, Building, MapPin, Phone, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    entidade: '',
    municipio: '',
    telefone: '',
    socios: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o SIGESS para minha entidade de pesca.');
    window.open(`https://wa.me/5591993193461?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-gradient-dark">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
                Contato
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Pronto para modernizar sua entidade?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Fale conosco pelo WhatsApp ou preencha o formulário. Nossa equipe 
                entra em contato para apresentar o sistema e montar uma proposta 
                para a sua realidade.
              </p>
            </div>

            {/* Contact options */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-slate-400 text-sm">Resposta em minutos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">E-mail</p>
                  <p className="text-slate-400 text-sm">contato@sigess.com.br</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-slate-600">
                  Entraremos em contato em breve para apresentar o SIGESS.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Solicite uma proposta
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-slate-700">
                      Nome
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="entidade" className="text-slate-700">
                      Entidade
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="entidade"
                        name="entidade"
                        placeholder="Nome da sua entidade"
                        value={formData.entidade}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="municipio" className="text-slate-700">
                      Município
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="municipio"
                        name="municipio"
                        placeholder="Cidade/UF"
                        value={formData.municipio}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-slate-700">
                        Telefone
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          id="telefone"
                          name="telefone"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="socios" className="text-slate-700">
                        Nº de Sócios
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          id="socios"
                          name="socios"
                          type="number"
                          placeholder="Aproximado"
                          value={formData.socios}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold btn-glow"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar solicitação
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Ao enviar, você concorda em receber contato da nossa equipe.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
