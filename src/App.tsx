import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { IconContext } from '@phosphor-icons/react';
import { Home } from './pages/Home';
import { Utilities } from './pages/Utilities';
import { TermsOfUse } from './pages/TermsOfUse';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PAGE_META } from './config/pageMeta';
import './App.css';

// Componente para resetar o scroll ao mudar de página
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// O carrossel de scroll-snap so existe na Home - fora dela o html nao
// deve ter scroll-snap-type, senao qualquer secao com snap-align (como
// o Footer, compartilhado por todas as paginas) vira o unico ponto de
// encaixe e a rolagem sempre "puxa" pra la.
function SnapCarouselToggle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('snap-carousel', pathname === '/');
    return () => {
      document.documentElement.classList.remove('snap-carousel');
    };
  }, [pathname]);

  return null;
}

// Mantém title, description, canonical e Open Graph sincronizados com a
// rota atual, já que o index.html é compartilhado por todas as rotas da SPA.
function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? PAGE_META['/'];
    const url = `https://sigess.com.br${pathname}`;

    document.title = meta.title;

    const setContent = (id: string, value: string) => {
      document.getElementById(id)?.setAttribute('content', value);
    };

    document.getElementById('canonical')?.setAttribute('href', url);
    setContent('meta-description', meta.description);
    setContent('og-url', url);
    setContent('og-title', meta.title);
    setContent('og-description', meta.description);
    setContent('twitter-title', meta.title);
    setContent('twitter-description', meta.description);
  }, [pathname]);

  return null;
}

export function AppContent() {
  return (
    <IconContext.Provider value={{ weight: 'duotone' }}>
      <>
        <ScrollToTop />
        <PageMeta />
        <SnapCarouselToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utilitarios" element={<Utilities />} />
          <Route path="/termos-uso" element={<TermsOfUse />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </>
    </IconContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
