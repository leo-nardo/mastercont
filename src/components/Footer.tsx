"use client";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        {/* Top grid: brand + nav columns */}
        <div className="footer-top-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <MasterMark />
              <span className="footer-logo-name">Mastercont</span>
            </div>
            <p className="footer-tagline">
              Contabilidade consultiva que transforma números em decisões estratégicas.
            </p>
          </div>

          <div className="footer-nav-cols">
            <div>
              <div className="mono footer-col-label">NAVEGAÇÃO</div>
              <ul className="footer-links">
                {[
                  ["Serviços", "#servicos"],
                  ["Sobre", "#sobre"],
                  ["Depoimentos", "#depoimentos"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="footer-link">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mono footer-col-label">CONTATO</div>
              <ul className="footer-links">
                {[
                  ["(63) 3215-0954", "tel:+556332150954"],
                  ["WhatsApp", WA_LINK],
                  ["contato@mastercontpmw.com.br", "mailto:contato@mastercontpmw.com.br"],
                  ["@mastercontpmw", "https://www.instagram.com/mastercontpmw"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener" : undefined}
                      className="footer-link"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="mono footer-creds">
            <span>CRC/TO 000860/O</span>
            <span className="footer-dot">·</span>
            <span>CNPJ 47.321.741/0001-38</span>
          </div>
          <div className="mono footer-copy">
            © {new Date().getFullYear()} Mastercont Contadores Associados
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #050505; color: var(--paper);
          padding: 64px 0 28px;
        }
        .footer-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }
        .footer-top-grid {
          display: grid; grid-template-columns: 1.2fr 1.8fr;
          gap: 48px; padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .footer-logo { display: flex; align-items: center; gap: 10px; }
        .footer-logo-name { font-family: var(--serif); font-size: 22px; color: var(--paper); }
        .footer-tagline {
          margin-top: 14px; font-size: 13px; color: #8f887c;
          max-width: 34ch; line-height: 1.55;
        }
        .footer-nav-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .footer-col-label {
          font-size: 10px; letter-spacing: .22em; color: #6a645b; margin-bottom: 16px;
        }
        .footer-links {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .footer-link { font-size: 14px; color: #b8b0a3; transition: color .2s; }
        .footer-link:hover { color: var(--gold); }
        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; padding-top: 28px; flex-wrap: wrap;
        }
        .footer-creds {
          display: flex; gap: 12px; font-size: 11px;
          color: #6a645b; letter-spacing: .12em; align-items: center; flex-wrap: wrap;
        }
        .footer-dot { color: var(--gold); }
        .footer-copy { font-size: 11px; color: #6a645b; letter-spacing: .1em; }

        @media (max-width: 720px) {
          .footer-top-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 480px) {
          .footer-root { padding: 48px 0 24px; }
          .footer-nav-cols { gap: 28px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
          .footer-link { font-size: 13px; }
        }
      `}</style>
    </footer>
  );
}

function MasterMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="fgold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e8d9a8"/>
          <stop offset="0.5" stopColor="#c9a961"/>
          <stop offset="1" stopColor="#a8873f"/>
        </linearGradient>
        <linearGradient id="fsilv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfcfcf"/>
          <stop offset="1" stopColor="#7a7a7a"/>
        </linearGradient>
      </defs>
      <path d="M5 34 L12 6 L20 22 L28 6 L35 34 L29 34 L25 16 L20 28 L15 16 L11 34 Z" fill="url(#fgold)"/>
      <path d="M5 34 L12 6 L20 22 L15 16 L11 34 Z" fill="url(#fsilv)" opacity="0.85"/>
      <line x1="4" y1="38" x2="36" y2="4" stroke="url(#fgold)" strokeWidth="0.8"/>
    </svg>
  );
}
