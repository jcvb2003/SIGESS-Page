import { Envelope as Mail, Phone, MapPin, InstagramLogo as Instagram, LinkedinLogo as Linkedin, FacebookLogo as Facebook } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const footerLinks = {
  produto: [
    { label: 'Módulos', href: '#modulos' },
    { label: 'Robô', href: '#extensao' },
    { label: 'Defeso', href: '#defeso' },
    { label: 'Utilitários', href: '/utilitarios', isExternal: false },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Termos de uso', href: '/termos-uso' },
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'LGPD', href: '/privacidade' },
  ],
};

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="snap-start scroll-mt-16 bg-slate-950 py-6 text-slate-400 lg:scroll-mt-20 lg:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-10 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="mb-3 flex items-center gap-3 lg:mb-5" aria-label="SIGESS Home">
              <img src="/logo.svg" alt="SIGESS Logo" className="h-8 w-auto sm:h-10" />
              <span className="text-xl font-bold text-white">SIGESS</span>
            </Link>
            <p className="mb-3 max-w-sm text-sm leading-6 text-slate-400 lg:mb-5 lg:text-base lg:leading-normal">
              Gestão completa para sindicatos, colônias e associações de pescadores artesanais.
              O único sistema desenvolvido especificamente para a realidade da pesca artesanal brasileira.
            </p>

            {/* Contact info */}
            <div className="space-y-1 lg:space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span className="text-sm">atendimento@sigess.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span className="text-sm">(91) 99319-3461</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span className="text-sm">Oeiras do Pará - PA</span>
              </div>
            </div>
          </div>

          {/* Links - Produto */}
          <div>
            <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-white lg:mb-4 lg:text-base lg:normal-case lg:tracking-normal">Produto</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-0 lg:block lg:space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  {link.href.startsWith('#') ? (
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.href)}
                      className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-emerald-400 lg:min-h-0"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-emerald-400 lg:min-h-0"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Legal */}
          <div>
            <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-white lg:mb-4 lg:text-base lg:normal-case lg:tracking-normal">Legal</h4>
            <ul className="space-y-0 lg:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-emerald-400 lg:min-h-0"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href === '#' ? undefined : link.href}
                      onClick={link.href === '#' ? (e) => e.preventDefault() : undefined}
                      className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-emerald-400 lg:min-h-0"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 pt-0 sm:flex-row lg:mt-10 lg:gap-4 lg:pt-0">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {new Date().getFullYear()} SIGESS. Todos os direitos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2 lg:gap-4">
            <SocialIcon
              href="https://instagram.com"
              icon={Instagram}
              label="Instagram"
            />
            <SocialIcon
              href="https://linkedin.com"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://facebook.com"
              icon={Facebook}
              label="Facebook"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  readonly href: string;
  readonly icon: React.ElementType;
  readonly label: string;
}

function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-transparent transition-colors hover:border-emerald-600 hover:bg-emerald-600/10 lg:h-9 lg:w-9"
      aria-label={label}
    >
      <Icon className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-emerald-400 lg:h-3 lg:w-3" />
    </a>
  );
}
