import { useState, useEffect } from 'react';
import { Menu, X, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#para-quem', label: 'Para Quem' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#defeso', label: 'Defeso' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-800' : 'text-slate-800'
              }`}>
              SIGESS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${isScrolled ? 'text-slate-600' : 'text-slate-600'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection('#contato')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white btn-glow"
            >
              Solicitar Proposta
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
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
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
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contato')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
            >
              Solicitar Proposta
            </Button>
            <a
              href="https://progess.com.br/auth"
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
