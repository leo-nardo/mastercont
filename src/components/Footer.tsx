"use client";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", color: "var(--paper)", padding: "64px 0 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)" }}>
        {/* Top */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1.8fr",
          gap: 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }} className="footer-top-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MasterMark />
              <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)" }}>Mastercont</span>
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: "#8f887c", maxWidth: "34ch", lineHeight: 1.55 }}>
              Contabilidade consultiva que transforma números em decisões estratégicas.
            </p>
          </div>

          {/* Cols */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.22em", color: "#6a645b", marginBottom: 16 }}>NAVEGAÇÃO</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Serviços", "#servicos"],
                  ["Recuperação tributária", "#recuperacao"],
                  ["Sobre", "#sobre"],
                  ["Depoimentos", "#depoimentos"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{ fontSize: 14, color: "#b8b0a3", transition: "color .2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#b8b0a3")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.22em", color: "#6a645b", marginBottom: 16 }}>CONTATO</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
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
                      style={{ fontSize: 14, color: "#b8b0a3", transition: "color .2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#b8b0a3")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          paddingTop: 28,
          flexWrap: "wrap",
        }}>
          <div className="mono" style={{ display: "flex", gap: 12, fontSize: 11, color: "#6a645b", letterSpacing: "0.12em", alignItems: "center" }}>
            <span>CRC/TO 000860/O</span>
            <span style={{ color: "var(--gold)" }}>·</span>
            <span>CNPJ 47.321.741/0001-38</span>
          </div>
          <div className="mono" style={{ fontSize: 11, color: "#6a645b", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Mastercont Contadores Associados
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-top-grid { grid-template-columns: 1fr !important; }
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
