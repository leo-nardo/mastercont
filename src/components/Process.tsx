const steps = [
  { n: "01", t: "Conversa inicial", d: "Você fala com um contador pelo WhatsApp ou em reunião. Entendemos seu negócio, porte e principais dores." },
  { n: "02", t: "Diagnóstico", d: "Analisamos sua situação fiscal, regime tributário e identificamos oportunidades — inclusive recuperação de créditos." },
  { n: "03", t: "Proposta sob medida", d: "Apresentamos o escopo, prazos e investimento. Sem letra miúda, sem surpresas no contrato." },
  { n: "04", t: "Virada de chave", d: "Cuidamos da transição com seu contador atual. Em poucos dias sua contabilidade está rodando conosco." },
];

export default function Process() {
  return (
    <section id="processo" className="proc-section">
      <div className="proc-container">
        <div className="proc-head">
          <span className="eyebrow"><span className="mono">Como funciona</span></span>
          <h2 className="proc-h2">
            Do primeiro contato<br />
            <span className="italic-gold">à virada de chave</span><br />
            em 4 passos.
          </h2>
          <p className="proc-lead">
            Sem burocracia desnecessária. Você fala com gente — não com formulários e respostas automáticas.
            Nossa meta é assumir sua contabilidade com segurança e no menor tempo possível.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="proc-track-h">
          {steps.map((s, i) => (
            <div key={s.n} className="proc-step-h">
              <div className="proc-line-h">
                <span className="proc-dot" />
                {i < steps.length - 1 && <span className="proc-bar-h" />}
              </div>
              <div className="proc-body">
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "var(--gold-deep)" }}>PASSO {s.n}</div>
                <h3 className="proc-title">{s.t}</h3>
                <p className="proc-desc">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="proc-track-v">
          {steps.map((s, i) => (
            <div key={s.n} className="proc-step-v">
              <div className="proc-line-v">
                <span className="proc-dot" />
                {i < steps.length - 1 && <span className="proc-bar-v" />}
              </div>
              <div className="proc-body proc-body-v">
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "var(--gold-deep)" }}>PASSO {s.n}</div>
                <h3 className="proc-title">{s.t}</h3>
                <p className="proc-desc">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .proc-section {
          background: var(--paper);
          padding: clamp(64px,9vw,140px) 0;
        }
        .proc-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }
        .proc-head {
          text-align: center;
          margin-bottom: clamp(40px,6vw,80px);
        }
        .proc-h2 {
          font-family: var(--serif);
          font-size: clamp(36px,5vw,68px);
          line-height: 1.02; margin-top: 20px; color: var(--ink);
        }
        .proc-lead {
          font-size: 16px; color: var(--muted);
          max-width: 56ch; margin: 20px auto 0; line-height: 1.6;
        }

        /* Horizontal (desktop) */
        .proc-track-h {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
        }
        .proc-step-h { display: flex; flex-direction: column; gap: 16px; }
        .proc-line-h {
          position: relative; display: flex; align-items: center; height: 16px;
        }
        .proc-dot {
          width: 12px; height: 12px; border-radius: 999px;
          background: var(--gold);
          box-shadow: 0 0 0 3px var(--paper), 0 0 0 4px var(--gold);
          flex-shrink: 0; z-index: 2; display: block;
        }
        .proc-bar-h {
          flex: 1; height: 1px; background: var(--line-light); margin-left: 8px;
        }

        /* Vertical (mobile) */
        .proc-track-v { display: none; }
        .proc-step-v { display: flex; gap: 20px; }
        .proc-line-v {
          display: flex; flex-direction: column; align-items: center;
          flex-shrink: 0; padding-top: 2px;
        }
        .proc-bar-v {
          width: 1px; flex: 1; min-height: 32px;
          background: var(--line-light); margin-top: 8px;
        }
        .proc-body { padding-right: 12px; }
        .proc-body-v { padding-right: 0; padding-bottom: 32px; }
        .proc-title {
          font-family: var(--serif); font-size: 26px;
          margin: 8px 0 8px; color: var(--ink);
        }
        .proc-desc { color: var(--muted); font-size: 15px; margin: 0; line-height: 1.55; }

        @media (max-width: 700px) {
          .proc-track-h { display: none; }
          .proc-track-v { display: flex; flex-direction: column; }
          .proc-title { font-size: 22px; }
        }
      `}</style>
    </section>
  );
}
