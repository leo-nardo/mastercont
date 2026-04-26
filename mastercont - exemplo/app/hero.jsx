/* Nav + Hero */

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    ["Serviços", "#servicos"],
    ["Recuperação Tributária", "#recuperacao"],
    ["Sobre", "#sobre"],
    ["Depoimentos", "#depoimentos"],
    ["Contato", "#contato"],
  ];

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MasterMark />
              <span style={{ fontSize: 20, letterSpacing: "0.03em" }}>Mastercont</span>
            </span>
            <span className="mono-sup">CRC/TO 000860/O</span>
          </a>

          <nav className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <div className="nav-cta">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: "11px 18px", fontSize: 13 }}>
              <Icon.whatsapp style={{ width: 15, height: 15 }} />
              Falar no WhatsApp
            </a>
            <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="top">
          <span className="serif" style={{ fontSize: 22 }}>Mastercont</span>
          <button className="mobile-close" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="links">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 40 }}>
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
            <Icon.whatsapp style={{ width: 16, height: 16 }} /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

/* Small M mark used in nav */
function MasterMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mgold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e8d9a8"/>
          <stop offset="0.5" stopColor="#c9a961"/>
          <stop offset="1" stopColor="#a8873f"/>
        </linearGradient>
        <linearGradient id="msilv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfcfcf"/>
          <stop offset="1" stopColor="#7a7a7a"/>
        </linearGradient>
      </defs>
      <path d="M5 34 L12 6 L20 22 L28 6 L35 34 L29 34 L25 16 L20 28 L15 16 L11 34 Z" fill="url(#mgold)"/>
      <path d="M5 34 L12 6 L20 22 L15 16 L11 34 Z" fill="url(#msilv)" opacity="0.85"/>
      <line x1="4" y1="38" x2="36" y2="4" stroke="url(#mgold)" strokeWidth="0.8"/>
    </svg>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="top" className="hero dark">
      <div className="hero-grain" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow on-dark">
            <span className="mono">Contabilidade consultiva · Palmas / TO</span>
          </span>

          <h1 className="hero-title">
            Números que <em className="italic-gold">decidem</em>.<br/>
            Estratégia que <em className="italic-gold">cresce</em>.
          </h1>

          <p className="hero-lead">
            Unimos contabilidade, tecnologia e visão de negócio para transformar dados em
            decisões que reduzem custos, aumentam segurança e fazem a sua empresa
            crescer de forma sustentável.
          </p>

          <div className="hero-ctas">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold">
              <Icon.whatsapp style={{ width: 16, height: 16 }} />
              Falar com um contador agora
              <Icon.arrow className="arr" style={{ width: 16, height: 16 }} />
            </a>
            <a href="#servicos" className="btn btn-ghost on-dark">
              Conhecer serviços
            </a>
          </div>

          <div className="hero-trust">
            <div className="ht-item">
              <div className="ht-num serif">3<span className="ht-plus">+</span></div>
              <div className="ht-lbl">anos de atuação<br/>em Palmas — TO</div>
            </div>
            <div className="ht-div" />
            <div className="ht-item">
              <div className="ht-num serif">3</div>
              <div className="ht-lbl">sócios-fundadores<br/>contadores ativos</div>
            </div>
            <div className="ht-div" />
            <div className="ht-item">
              <div className="ht-num serif">100<span className="ht-plus">%</span></div>
              <div className="ht-lbl">atendimento consultivo<br/>e personalizado</div>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <img src="assets/team-together.jpeg" alt="Equipe Mastercont" />
            <div className="hero-photo-badge">
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--gold)" }}>CRC/TO</span>
              <span className="serif" style={{ fontSize: 22 }}>000860/O</span>
              <span style={{ fontSize: 11, color: "#b8b0a3" }}>Conselho Regional de Contabilidade</span>
            </div>
          </div>

          <div className="hero-caption mono">
            Yuri · Jaques · Paulo<br/>
            <span style={{ color: "var(--gold)" }}>— sócios-fundadores</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hm-track">
          {Array(3).fill(0).map((_, i) => (
            <div className="hm-group" key={i}>
              <span>Gestão Fiscal</span><Dot/>
              <span>Planejamento Tributário</span><Dot/>
              <span>Recuperação Tributária</span><Dot/>
              <span>BPO Financeiro</span><Dot/>
              <span>Departamento Pessoal</span><Dot/>
              <span>Abertura de Empresas</span><Dot/>
              <span>Certificado Digital</span><Dot/>
              <span>Registro de Marcas</span><Dot/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="hm-dot">◆</span>;
}

Object.assign(window, { Nav, Hero, MasterMark });
