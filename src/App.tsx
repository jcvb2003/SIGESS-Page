import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { IconContext } from '@phosphor-icons/react';
import { Home } from './pages/Home';
import { Utilities } from './pages/Utilities';
import { TermsOfUse } from './pages/TermsOfUse';
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

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'SIGESS - Gestão para Entidades de Pesca',
    description:
      'Simplifique a gestão da sua entidade de pescadores. O SIGESS é um sistema de gestão de sócios com programas voltados para a atividade pesqueira e controle de sindicatos, associações e colônias.',
  },
  '/utilitarios': {
    title: 'Utilitários SIGESS - Ferramentas Gratuitas para Entidades de Pesca',
    description:
      'Ferramentas gratuitas para facilitar o dia a dia da secretaria de pesca: extração de dados de PDFs, geradores de documentos e mais.',
  },
  '/termos-uso': {
    title: 'Termos de Uso - SIGESS',
    description:
      'Termos de uso da plataforma SIGESS: condições de licença, isenção de responsabilidade e limitações de uso do site.',
  },
};

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

function App() {
  return (
    <IconContext.Provider value={{ weight: 'duotone' }}>
      <Router>
        <ScrollToTop />
        <PageMeta />
        <SnapCarouselToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utilitarios" element={<Utilities />} />
          <Route path="/termos-uso" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </IconContext.Provider>
  );
}

export default App;
