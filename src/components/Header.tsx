"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
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
      <header className={`mct-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="mct-nav-inner">
          {/* Brand */}
          <a href="#top" className="mct-brand">
            <Image src="/logo-m-only.png" alt="Mastercont" width={32} height={32} style={{ objectFit: "contain" }} />
            <span className="mct-brand-name">Mastercont</span>
            <span className="mct-crc">CRC/TO 000860/O</span>
          </a>

          {/* Desktop nav */}
          <nav className="mct-links">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="mct-link">{label}</a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="mct-actions">
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold mct-wa-btn">
              <WAIcon /> Falar no WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="mct-burger"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mct-mobile ${open ? "open" : ""}`}>
        <div className="mct-mobile-top">
          <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)" }}>Mastercont</span>
          <button onClick={() => setOpen(false)} className="mct-mobile-close">✕</button>
        </div>
        <nav className="mct-mobile-links">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="mct-mobile-link">
              {label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: "auto", paddingTop: 40 }}>
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
            <WAIcon /> Falar no WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .mct-nav {
          position: sticky; top: 0; z-index: 50;
          background: rgba(246,243,236,.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: background .3s, border-color .3s;
        }
        .mct-nav.scrolled {
          background: rgba(246,243,236,.95);
          border-bottom-color: var(--line-light);
        }
        .mct-nav-inner {
          max-width: 1240px; margin: 0 auto;
          padding: 14px clamp(20px,4vw,48px);
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
        }
        .mct-brand {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--serif); letter-spacing: .01em; color: var(--ink);
          flex-shrink: 0;
        }
        .mct-brand-name { font-size: 20px; }
        .mct-crc {
          font-family: var(--mono); font-size: 10px;
          text-transform: uppercase; letter-spacing: .18em;
          color: var(--muted);
          border-left: 1px solid var(--line-light);
          padding-left: 10px; margin-left: 4px;
        }
        .mct-links {
          display: none; gap: 24px; align-items: center;
        }
        .mct-link {
          font-size: 13px; color: var(--ink); opacity: .75;
          transition: opacity .2s; white-space: nowrap;
        }
        .mct-link:hover { opacity: 1; }
        .mct-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .mct-wa-btn { padding: 10px 16px; font-size: 13px; }
        .mct-burger {
          display: flex; flex-direction: column;
          gap: 5px; padding: 8px; cursor: pointer;
        }
        .mct-burger span {
          width: 22px; height: 1.5px;
          background: var(--ink); display: block;
        }

        /* Mobile menu */
        .mct-mobile {
          position: fixed; inset: 0;
          background: var(--ink); color: var(--paper);
          z-index: 100; display: flex; flex-direction: column;
          padding: 24px clamp(20px,4vw,48px);
          transform: translateY(-100%);
          transition: transform .4s cubic-bezier(.8,0,.2,1);
        }
        .mct-mobile.open { transform: none; }
        .mct-mobile-top {
          display: flex; justify-content: space-between; align-items: center;
        }
        .mct-mobile-close {
          font-size: 24px; padding: 10px; color: var(--paper);
        }
        .mct-mobile-links {
          display: flex; flex-direction: column; gap: 4px; margin-top: 32px;
        }
        .mct-mobile-link {
          font-family: var(--serif); font-size: clamp(28px, 8vw, 40px);
          color: var(--paper); padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,.06);
          transition: color .2s;
        }
        .mct-mobile-link:hover { color: var(--gold); }

        /* Desktop: show nav, hide burger */
        @media (min-width: 900px) {
          .mct-links { display: flex; }
          .mct-burger { display: none; }
        }
        /* Mobile: hide CRC badge and WA button */
        @media (max-width: 639px) {
          .mct-crc { display: none; }
          .mct-wa-btn { display: none; }
          .mct-brand-name { font-size: 18px; }
        }
      `}</style>
    </>
  );
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15, flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
