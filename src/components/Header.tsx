"use client";

import { useState, useEffect } from "react";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Recuperação Tributária", href: "#recuperacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(246,243,236,.95)" : "rgba(246,243,236,.82)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: `1px solid ${scrolled ? "var(--line-light)" : "transparent"}`,
          transition: "background .3s, border-color .3s",
        }}
      >
        <div style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px clamp(20px,4vw,48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>
          {/* Brand */}
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MasterMark />
            <span style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "0.01em", color: "var(--ink)" }}>
              Mastercont
            </span>
            <span style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--muted)",
              borderLeft: "1px solid var(--line-light)",
              paddingLeft: 10,
              marginLeft: 4,
            }}>
              CRC/TO 000860/O
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: 14,
                  color: "var(--ink)",
                  opacity: 0.75,
                  position: "relative",
                  transition: "opacity .2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="btn btn-gold"
              style={{ padding: "11px 18px", fontSize: 13 }}
            >
              <WAIcon />
              Falar no WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="burger-btn"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: 10,
              }}
            >
              <span style={{ width: 20, height: 1.5, background: "var(--ink)", display: "block" }} />
              <span style={{ width: 20, height: 1.5, background: "var(--ink)", display: "block" }} />
              <span style={{ width: 20, height: 1.5, background: "var(--ink)", display: "block" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--ink)",
          color: "var(--paper)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          padding: "24px clamp(20px,4vw,48px)",
          transform: open ? "none" : "translateY(-100%)",
          transition: "transform .4s cubic-bezier(.8,0,.2,1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)" }}>Mastercont</span>
          <button onClick={() => setOpen(false)} style={{ fontSize: 24, padding: 10, color: "var(--paper)" }}>✕</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 40 }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "var(--serif)", fontSize: 36, color: "var(--paper)" }}
            >
              {label}
            </a>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 40 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn btn-gold"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <WAIcon /> Falar no WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .hidden-mobile { display: none !important; }
        .burger-btn { display: inline-flex !important; }
        @media (min-width: 900px) {
          .hidden-mobile { display: flex !important; }
          .burger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

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

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
