import { useState } from 'react';
import { Send, User, Building, MapPin, Mail, Users, CheckCircle, Video, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    entidade: '',
    municipio: '',
    email: '',
    socios: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Gostaria de uma proposta do SIGESS. Seguem meus dados:
*Nome:* ${formData.nome}
*Entidade:* ${formData.entidade}
*Município:* ${formData.municipio}
*Email:* ${formData.email}
*Nº de Sócios:* ${formData.socios}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5591993193461?text=${encodedMessage}`, '_blank');

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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Pronto para <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">modernizar</span> sua entidade?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Fale com nossa equipe, veja como o SIGESS acelera a rotina da secretaria
                e receba uma proposta para a sua realidade. A implantação inclui treinamento
                completo por videochamada e suporte humano rápido.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-slate-400 text-sm">Resposta rápida com atendimento humano</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Treinamento por videochamada</p>
                  <p className="text-slate-400 text-sm">Implantação guiada, prática e com tira-dúvidas</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Suporte 100% humano</p>
                  <p className="text-slate-400 text-sm">Atendimento por WhatsApp, Meet e telefone</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg font-semibold w-full sm:w-auto"
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
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Solicite uma proposta
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Implantação com treinamento completo e suporte humano incluso.
                </p>

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
                      <Label htmlFor="email" className="text-slate-700">
                        E-mail
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
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
