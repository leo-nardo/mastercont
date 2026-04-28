"use client";

import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left: copy */}
        <div className="hero-copy">
          <motion.span
            className="eyebrow on-dark"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          >
            <span className="mono">Contabilidade consultiva · Palmas / TO</span>
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
          >
            Números que <em className="italic-gold">decidem</em>.<br />
            Estratégia que <em className="italic-gold">cresce</em>.
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.35 }}
          >
            Unimos contabilidade, tecnologia e visão de negócio para transformar dados em
            decisões que reduzem custos, aumentam segurança e fazem a sua empresa crescer
            de forma sustentável.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.48 }}
          >
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold hero-cta-primary">
              <WAIcon />
              Falar com um contador agora
              <ArrowIcon />
            </a>
            <a href="#servicos" className="btn btn-ghost on-dark hero-cta-secondary">
              Conhecer serviços
            </a>
          </motion.div>

          <motion.div
            className="hero-promise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <div className="hero-promise-body">
              <div className="hero-promise-title">Atendimento consultivo</div>
              <div className="hero-promise-sub">Contato direto com contadores — sem robôs, sem formulários</div>
            </div>
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.25 }}
        >
          <div className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team-together.webp" alt="Equipe Mastercont" />
            <div className="hero-photo-overlay" />
            <div className="hero-photo-badge">
              <span className="hero-badge-label mono">CRC/TO</span>
              <span className="hero-badge-num">000860/O</span>
            </div>
          </div>
          <div className="hero-caption mono">
            Yuri · Jaques · Paulo
            <span className="hero-caption-role"> — sócios-fundadores</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          position: relative; overflow: hidden;
          background:
            radial-gradient(80% 60% at 80% 0%, rgba(201,169,97,.08), transparent 60%),
            radial-gradient(60% 40% at 0% 100%, rgba(201,169,97,.05), transparent 60%),
            var(--ink);
          color: var(--paper);
          min-height: calc(100svh - 56px);
          display: flex; flex-direction: column;
        }
        .hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>");
          opacity: .6; pointer-events: none; mix-blend-mode: overlay;
        }

        .hero-inner {
          max-width: 1240px; margin: 0 auto; width: 100%;
          padding: clamp(36px,5vw,72px) clamp(20px,4vw,48px);
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(32px,5vw,72px);
          align-items: center; position: relative; z-index: 2;
          flex: 1;
        }

        .hero-copy { display: flex; flex-direction: column; }

        .hero-title {
          font-family: var(--serif);
          font-size: clamp(42px, 6.5vw, 92px);
          line-height: .98; margin: 20px 0 24px;
          letter-spacing: -.02em; color: var(--paper);
        }
        .hero-lead {
          font-size: clamp(15px, 1.5vw, 19px);
          color: #c4bdb0; max-width: 52ch;
          margin: 0 0 32px; line-height: 1.55;
        }

        .hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 48px; }
        .hero-cta-primary { padding: 14px 22px; }

        /* Promise strip */
        .hero-promise {
          display: flex; align-items: center; gap: 20px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,.08);
        }
        .hero-promise-body {
          display: flex; flex-direction: column; gap: 4px;
        }
        .hero-promise-title {
          font-size: 14px; color: var(--paper); font-weight: 500;
          letter-spacing: .01em;
        }
        .hero-promise-sub {
          font-size: 12px; color: #8f887c; line-height: 1.45;
        }

        /* Photo */
        .hero-media { position: relative; }
        .hero-photo {
          position: relative; border-radius: 2px; overflow: hidden;
          aspect-ratio: 3/4;
          max-height: min(580px, calc(100svh - 180px));
          box-shadow: 0 40px 80px rgba(0,0,0,.5);
        }
        .hero-photo img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center 30%;
          filter: contrast(1.02) saturate(.95);
        }
        .hero-photo-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,transparent 50%,rgba(10,10,10,.35) 100%);
          pointer-events: none;
        }
        .hero-photo-badge {
          position: absolute; left: 16px; bottom: 16px;
          padding: 10px 14px;
          background: rgba(10,10,10,.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201,169,97,.28);
          border-radius: 2px;
          display: flex; flex-direction: column; gap: 3px; z-index: 2;
        }
        .hero-badge-label {
          font-size: 10px; letter-spacing: .18em; color: var(--gold);
        }
        .hero-badge-num {
          font-family: var(--serif); font-size: 22px; color: var(--paper); line-height: 1;
        }

        /* Caption below photo */
        .hero-caption {
          margin-top: 10px;
          font-size: 11px; text-align: right;
          color: #8f887c; letter-spacing: .06em; line-height: 1.45;
        }
        .hero-caption-role { color: var(--gold); }

        /* ── Mobile ── */
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-photo { aspect-ratio: 4/3; max-height: 320px; }
          .hero-photo img { object-position: center 20%; }
        }
        @media (max-width: 540px) {
          .hero-photo-badge { padding: 8px 11px; left: 12px; bottom: 12px; }
          .hero-badge-label { font-size: 9px; }
          .hero-badge-num { font-size: 16px; }
        }
        @media (max-width: 640px) {
          .hero-ctas { flex-direction: column; gap: 10px; }
          .hero-cta-primary, .hero-cta-secondary {
            width: 100%; justify-content: center;
            border-radius: 999px;
          }
          .hero-promise-sub { font-size: 11px; }
        }
      `}</style>
    </section>
  );
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="arr" style={{ width: 16, height: 16, flexShrink: 0 }}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
