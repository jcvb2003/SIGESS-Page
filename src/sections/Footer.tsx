import { Fish, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const footerLinks = {
  produto: [
    { label: 'Módulos', href: '#modulos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Defeso', href: '#defeso' },
    { label: 'Planos', href: '#planos' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Contato', href: '#contato' },
  ],
  suporte: [
    { label: 'Central de ajuda', href: '#' },
    { label: 'Documentação', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'WhatsApp', href: '#' },
  ],
  legal: [
    { label: 'Termos de uso', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SIGESS</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Gestão completa para sindicatos e colônias de pescadores artesanais. 
              O único sistema desenvolvido especificamente para a realidade da pesca artesanal brasileira.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">contato@sigess.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">(99) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Brasil</span>
              </div>
            </div>
          </div>

          {/* Links - Produto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Suporte */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SIGESS. Todos os direitos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group"
            >
              <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
