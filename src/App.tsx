import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utilitarios" element={<Utilities />} />
        <Route path="/termos-uso" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
