const steps = [
  {
    n: "01",
    t: "Conversa inicial",
    d: "Você fala com um contador pelo WhatsApp ou em reunião. Entendemos seu negócio, porte e principais dores.",
  },
  {
    n: "02",
    t: "Diagnóstico",
    d: "Analisamos sua situação fiscal, regime tributário e identificamos oportunidades — inclusive recuperação de créditos.",
  },
  {
    n: "03",
    t: "Proposta sob medida",
    d: "Apresentamos o escopo, prazos e investimento. Sem letra miúda, sem surpresas no contrato.",
  },
  {
    n: "04",
    t: "Virada de chave",
    d: "Cuidamos da transição com seu contador atual. Em poucos dias sua contabilidade está rodando conosco.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      style={{
        background: "var(--paper)",
        padding: "clamp(80px,10vw,140px) 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)" }}>
        {/* Section head */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 48,
          marginBottom: "clamp(40px,6vw,72px)",
          alignItems: "end",
        }} className="proc-head-grid">
          <div>
            <span className="eyebrow"><span className="mono">Como funciona</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1.02,
              marginTop: 20,
              color: "var(--ink)",
            }}>
              Do primeiro contato<br />
              <span className="italic-gold">à virada de chave</span><br />
              em 4 passos.
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: "52ch", margin: 0, lineHeight: 1.6 }}>
            Sem burocracia desnecessária. Você fala com gente — não com formulários e respostas automáticas.
            Nossa meta é assumir sua contabilidade com segurança e no menor tempo possível.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 32,
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Track line */}
              <div style={{ position: "relative", display: "flex", alignItems: "center", height: 16 }}>
                <span style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "var(--gold)",
                  boxShadow: "0 0 0 3px var(--paper), 0 0 0 4px var(--gold)",
                  flexShrink: 0,
                  zIndex: 2,
                  display: "block",
                }} />
                {i < steps.length - 1 && (
                  <span style={{
                    flex: 1,
                    height: 1,
                    background: "var(--line-light)",
                    marginLeft: 8,
                    display: "block",
                  }} />
                )}
              </div>
              {/* Body */}
              <div style={{ paddingRight: 12 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--gold-deep)" }}>
                  PASSO {s.n}
                </div>
                <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  margin: "10px 0 10px",
                  color: "var(--ink)",
                }}>
                  {s.t}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 15, margin: 0, lineHeight: 1.55 }}>
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .proc-head-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
