export function CompleteManagement() {
  return (
    <div className="fidelity-hero-wrapper" style={{ overflow: 'hidden' }}>
      <style>{`
        .fidelity-hero-wrapper {
          --em: #059669;
          --em-dark: #047857;
          --em-light: #d1fae5;
          --em-xlight: #ecfdf5;
          --slate: #0f172a;
          --slate-mid: #334155;
          --slate-light: #94a3b8;
          --slate-xlight: #f1f5f9;
          --white: #ffffff;
          --font-head: 'Sora', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --r: 14px;
          --r-sm: 8px;
          --r-pill: 999px;

          font-family: var(--font-body);
          background: var(--white);
          color: var(--slate);
          line-height: 1.6;
        }

        .fidelity-hero-wrapper .hero {
          padding: 90px 48px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .fidelity-hero-wrapper .hero {
            grid-template-columns: 1fr;
            padding: 60px 24px;
          }
        }

        .fidelity-hero-wrapper .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--em-xlight);
          color: var(--em-dark);
          border: 1px solid var(--em-light);
          border-radius: var(--r-pill);
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .04em;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--em);
        }

        .fidelity-hero-wrapper .hero-title {
          font-family: var(--font-head);
          font-size: 52px;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
          color: var(--slate);
          margin-bottom: 24px;
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .fidelity-hero-wrapper .hero-title {
            font-size: 40px;
          }
        }

        .fidelity-hero-wrapper .hero-title span {
          color: var(--em);
        }

        .fidelity-hero-wrapper .hero-sub {
          font-size: 18px;
          color: var(--slate-mid);
          line-height: 1.65;
          margin-bottom: 36px;
          font-weight: 300;
          max-width: 480px;
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid #e2e8f0;
        }

        .fidelity-hero-wrapper .hero-stat-num {
          font-family: var(--font-head);
          font-size: 28px;
          font-weight: 800;
          color: var(--em);
          letter-spacing: -1px;
        }

        .fidelity-hero-wrapper .hero-stat-label {
          font-size: 13px;
          color: var(--slate-light);
          margin-top: 2px;
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .screen-mockup {
          background: var(--slate);
          border-radius: 16px;
          padding: 4px;
          box-shadow: 0 32px 80px rgba(15,23,42,0.18);
        }

        .fidelity-hero-wrapper .screen-bar {
          background: #1e293b;
          border-radius: 12px 12px 0 0;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .fidelity-hero-wrapper .screen-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .fidelity-hero-wrapper .screen-inner {
          background: #f8fafc;
          border-radius: 0 0 12px 12px;
          padding: 16px;
          overflow: hidden;
        }

        .fidelity-hero-wrapper .mock-header {
          background: white;
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          border: 1px solid #e2e8f0;
        }

        .fidelity-hero-wrapper .mock-title {
          font-family: var(--font-head);
          font-size: 16px;
          font-weight: 700;
          color: var(--slate);
        }

        .fidelity-hero-wrapper .mock-badge-green {
          background: #d1fae5;
          color: #065f46;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--r-pill);
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .mock-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }

        .fidelity-hero-wrapper .mock-card {
          background: white;
          border-radius: 8px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .fidelity-hero-wrapper .mock-card-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .05em;
          color: var(--slate-light);
          margin-bottom: 4px;
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .mock-card-val {
          font-family: var(--font-head);
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .fidelity-hero-wrapper .mock-card-val.green { color: #059669; }
        .fidelity-hero-wrapper .mock-card-val.red { color: #dc2626; }
        .fidelity-hero-wrapper .mock-card-val.amber { color: #d97706; }
        .fidelity-hero-wrapper .mock-card-val.blue { color: #2563eb; }

        .fidelity-hero-wrapper .mock-table {
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .fidelity-hero-wrapper .mock-table-head {
          background: #f8fafc;
          padding: 8px 12px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 8px;
          border-bottom: 1px solid #e2e8f0;
        }

        .fidelity-hero-wrapper .mock-th {
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: var(--slate-light);
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .mock-row {
          padding: 8px 12px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 8px;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
        }

        .fidelity-hero-wrapper .mock-row:last-child {
          border-bottom: none;
        }

        .fidelity-hero-wrapper .mock-name {
          font-size: 11px;
          font-weight: 600;
          color: var(--slate);
          font-family: var(--font-body);
        }

        .fidelity-hero-wrapper .mock-cpf {
          font-size: 10px;
          color: var(--slate-light);
          font-family: monospace;
          margin-top: 2px;
        }

        .fidelity-hero-wrapper .mock-status {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: var(--r-pill);
          font-family: var(--font-body);
          justify-content: center;
        }

        .fidelity-hero-wrapper .st-ok { background: #d1fae5; color: #065f46; }
        .fidelity-hero-wrapper .st-bad { background: #fee2e2; color: #991b1b; }
        .fidelity-hero-wrapper .st-warn { background: #fef3c7; color: #92400e; }

        @keyframes fidFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fidelity-hero-wrapper .hero-left {
          animation: fidFadeUp .6s ease both;
        }

        .fidelity-hero-wrapper .hero-visual {
          animation: fidFadeUp .6s .15s ease both;
        }
      `}</style>

      <div className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>Gestão sindical especializada
          </div>
          <h2 className="hero-title">Gestão completa para <span>entidades de pesca</span> artesanal</h2>
          <p className="hero-sub">
            O único sistema desenvolvido para a realidade do pescador artesanal brasileiro. Do cadastro do sócio ao controle do defeso, tudo em um só lugar — simples, seguro e 100% online.
          </p>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">Online, sem instalação</div>
            </div>
            <div>
              <div className="hero-stat-num">15min</div>
              <div className="hero-stat-label">Para ativar nova entidade</div>
            </div>
            <div>
              <div className="hero-stat-num">LGPD</div>
              <div className="hero-stat-label">Dados protegidos por lei</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="screen-mockup">
            <div className="screen-bar">
              <div className="screen-dot" style={{ background: '#ef4444' }}></div>
              <div className="screen-dot" style={{ background: '#f59e0b' }}></div>
              <div className="screen-dot" style={{ background: '#22c55e' }}></div>
            </div>
            <div className="screen-inner">
              <div className="mock-header">
                <span className="mock-title">Financeiro</span>
                <span className="mock-badge-green">2026</span>
              </div>
              <div className="mock-cards">
                <div className="mock-card">
                  <div className="mock-card-label">Arrecadado no ano</div>
                  <div className="mock-card-val green">R$ 48.200</div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-label">Inadimplentes</div>
                  <div className="mock-card-val red">127</div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-label">DAE pendentes</div>
                  <div className="mock-card-val amber">23</div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-label">Arrecadado no mês</div>
                  <div className="mock-card-val blue">R$ 3.840</div>
                </div>
              </div>
              <div className="mock-table">
                <div className="mock-table-head">
                  <span className="mock-th">Sócio</span>
                  <span className="mock-th">Situação</span>
                  <span className="mock-th">Regime</span>
                </div>
                <div className="mock-row">
                  <div><div className="mock-name">Ana da Silva</div><div className="mock-cpf">123.456.789-01</div></div>
                  <span className="mock-status st-ok">Em dia</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Anuidade</span>
                </div>
                <div className="mock-row">
                  <div><div className="mock-name">João Costa</div><div className="mock-cpf">234.567.890-12</div></div>
                  <span className="mock-status st-bad">2 anos atraso</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Anuidade</span>
                </div>
                <div className="mock-row">
                  <div><div className="mock-name">Maria Ferreira</div><div className="mock-cpf">345.678.901-23</div></div>
                  <span className="mock-status st-warn">Liberada</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Anuidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
