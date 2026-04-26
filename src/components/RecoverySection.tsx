"use client";

import { useState } from "react";

const WA_NUMBER = "556332150954";
const sectors = [
  "Farmácias e drogarias","Postos de combustíveis",
  "Autopeças e acessórios","Bares, lanchonetes e restaurantes",
  "Mercearias e mercados de bairro","Perfumarias e cosméticos",
];

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function RecoverySection() {
  const [revenue, setRevenue] = useState(50000);
  const [months, setMonths] = useState(60);

  const estimateMin = Math.round(revenue * months * 0.006);
  const estimateMax = Math.round(revenue * months * 0.015);

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Olá! Simulei no site: faturamento R$ ${revenue.toLocaleString("pt-BR")}/mês por ${months} meses. Gostaria de um diagnóstico gratuito de recuperação tributária.`
  )}`;

  return (
    <section id="recuperacao" className="rec-section">
      <div className="rec-glow" aria-hidden="true" />
      <div className="rec-container">
        <div className="rec-grid">
          {/* Copy */}
          <div className="rec-copy">
            <span className="eyebrow on-dark"><span className="mono">Recuperação Tributária</span></span>
            <h2 className="rec-h2">
              Sua empresa pode ter<br />
              <span className="italic-gold">dinheiro para receber</span><br />
              de volta.
            </h2>
            <p className="rec-lead">
              A tributação de PIS e COFINS em produtos monofásicos é concentrada na indústria
              ou importador — mas é comum haver recolhimentos indevidos nas etapas seguintes.
              Auditamos os últimos 5 anos da sua empresa e recuperamos esses créditos legalmente.
            </p>

            <div className="rec-sectors-wrap">
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "#8f887c", marginBottom: 12 }}>
                SETORES QUE MAIS RECUPERAM
              </div>
              <div className="rec-sectors-grid">
                {sectors.map((s) => (
                  <div key={s} className="rec-sector">
                    <CheckIcon /><span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator */}
          <aside className="rec-calc">
            <div className="rec-calc-top" />
            <div style={{ marginBottom: 24 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "var(--gold)" }}>SIMULADOR</span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, marginTop: 8, color: "var(--paper)" }}>
                Estime seu potencial de crédito
              </h3>
            </div>

            <SliderField
              label="Faturamento mensal médio"
              display={fmt(revenue)}
              min={10000} max={1000000} step={5000}
              value={revenue}
              onChange={setRevenue}
              scaleLeft="R$ 10k" scaleRight="R$ 1M"
            />
            <SliderField
              label="Período a auditar"
              display={`${months} meses`}
              min={12} max={60} step={12}
              value={months}
              onChange={setMonths}
              scaleLeft="12m" scaleRight="60m"
            />

            <div className="rec-result">
              <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", color: "var(--gold)", marginBottom: 8 }}>
                POTENCIAL ESTIMADO DE CRÉDITO
              </div>
              <div className="rec-result-val">
                {fmt(estimateMin)}{" "}
                <span style={{ opacity: .5, fontSize: ".6em" }}>a</span>{" "}
                {fmt(estimateMax)}
              </div>
              <div className="rec-disclaimer">
                Estimativa ilustrativa baseada em médias de mercado. O valor real depende de auditoria.{" "}
                <strong style={{ color: "var(--gold)" }}>O diagnóstico é gratuito.</strong>
              </div>
            </div>

            <a href={waLink} target="_blank" rel="noopener" className="btn btn-gold rec-cta">
              <WAIcon /> Solicitar diagnóstico gratuito
            </a>
          </aside>
        </div>
      </div>

      <style>{`
        .rec-section {
          background: var(--ink-2); color: var(--paper);
          padding: clamp(64px,9vw,140px) 0;
          position: relative; overflow: hidden;
        }
        .rec-glow {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(50% 50% at 90% 10%, rgba(201,169,97,.08), transparent 60%),
            radial-gradient(40% 50% at 10% 90%, rgba(201,169,97,.05), transparent 60%);
        }
        .rec-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
          position: relative; z-index: 1;
        }
        .rec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px,6vw,80px); align-items: start;
        }
        .rec-h2 {
          font-family: var(--serif);
          font-size: clamp(36px,5vw,68px);
          line-height: 1.02; color: var(--paper);
          margin-top: 18px; margin-bottom: 24px;
        }
        .rec-lead {
          font-size: 16px; color: #b8b0a3; line-height: 1.55;
          max-width: 52ch; margin-bottom: 36px;
        }
        .rec-sectors-wrap {
          padding-top: 24px; border-top: 1px solid rgba(255,255,255,.08);
        }
        .rec-sectors-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px 20px;
        }
        .rec-sector {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: #d5cfc3;
        }

        /* Calc card */
        .rec-calc {
          background: var(--ink);
          border: 1px solid rgba(201,169,97,.22);
          border-radius: 4px; padding: 28px;
          position: relative;
          box-shadow: 0 40px 80px rgba(0,0,0,.4);
        }
        .rec-calc-top {
          position: absolute; top: -1px; left: -1px; right: -1px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .rec-result {
          margin-top: 24px; padding: 18px 20px;
          background: rgba(201,169,97,.06);
          border: 1px solid rgba(201,169,97,.25); border-radius: 4px;
        }
        .rec-result-val {
          font-family: var(--serif);
          font-size: clamp(22px,3vw,38px);
          line-height: 1.05; color: var(--paper);
          margin-bottom: 10px; letter-spacing: -.01em;
        }
        .rec-disclaimer { font-size: 12px; color: #8f887c; line-height: 1.5; }
        .rec-cta { width: 100%; justify-content: center; margin-top: 18px; }

        @media (max-width: 860px) {
          .rec-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .rec-sectors-grid { grid-template-columns: 1fr; }
          .rec-calc { padding: 20px; }
        }
      `}</style>
    </section>
  );
}

function SliderField({
  label, display, min, max, step, value, onChange, scaleLeft, scaleRight,
}: {
  label: string; display: string; min: number; max: number; step: number;
  value: number; onChange: (v: number) => void; scaleLeft: string; scaleRight: string;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, fontSize: 13, color: "#b8b0a3" }}>
        <span>{label}</span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--paper)", letterSpacing: "-.01em" }}>{display}</span>
      </label>
      <input
        type="range" className="gold-range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#6a645b", marginTop: 6, letterSpacing: ".08em" }}>
        <span>{scaleLeft}</span><span>{scaleRight}</span>
      </div>
    </div>
  );
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, color: "var(--gold)", flexShrink: 0 }}><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function WAIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;
}
