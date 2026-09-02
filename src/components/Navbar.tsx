import { useState, useEffect } from 'react';
import { List as Menu, X } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#para-quem', label: 'Para Quem' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#extensao', label: 'Robô' },
  { href: '#defeso', label: 'Defeso' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = isScrolled || location.pathname !== '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img src="/logo.svg" alt="SIGESS Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold text-slate-800">
              SIGESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium transition-colors hover:text-emerald-600 text-slate-600"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/utilitarios"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === '/utilitarios' ? 'text-emerald-600' : 'text-slate-600'
                }`}
            >
              Utilitários
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection('#planos')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white btn-glow"
            >
              Planos
            </Button>
            <a
              href="https://app.sigess.com.br/auth"
              className="inline-flex h-9 items-center justify-center rounded-md border-2 border-emerald-600 bg-transparent px-5 text-sm font-bold text-emerald-600 shadow-sm hover:bg-emerald-50 transition-colors"
            >
              Entrar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-100 bg-white shadow-lg animate-fade-in lg:hidden">
          <div className="space-y-2 px-4 py-4 pb-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/utilitarios"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium ${location.pathname === '/utilitarios' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-600'
                }`}
            >
              Utilitários
            </Link>
            <Button
              onClick={() => scrollToSection('#planos')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
            >
              Planos
            </Button>
            <a
              href="https://app.sigess.com.br/auth"
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-emerald-600 bg-transparent px-5 py-2.5 mt-3 text-sm font-bold text-emerald-600 shadow-sm hover:bg-emerald-50 transition-colors"
            >
              Entrar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
