"use client";

"use client";

const items = [
  {
    num: "01",
    title: "Consultiva, não burocrática",
    body: "Você não recebe apenas guias para pagar. Entregamos análises, interpretação de números e recomendações que impactam o seu caixa.",
  },
  {
    num: "02",
    title: "Recuperação tributária",
    body: "Auditamos seus últimos 5 anos de PIS/COFINS em produtos monofásicos. Quando há crédito, você recebe de volta — legalmente.",
  },
  {
    num: "03",
    title: "Tecnologia de ponta",
    body: "Plataformas modernas, dashboards claros e processos digitais. Menos papel, mais controle em tempo real sobre a sua empresa.",
  },
  {
    num: "04",
    title: "Atendimento próximo",
    body: "Você fala direto com contadores, não com robôs. Reuniões estratégicas, WhatsApp e resposta rápida quando o assunto é urgente.",
  },
];

export default function Differentiators() {
  return (
    <section
      id="diferenciais"
      style={{
        background: "var(--paper)",
        padding: "clamp(80px,10vw,140px) 0",
        position: "relative",
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
        }} className="section-head-grid">
          <div>
            <span className="eyebrow"><span className="mono">Por que Mastercont</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1.02,
              marginTop: 20,
              color: "var(--ink)",
            }}>
              Contabilidade<br />
              <span className="italic-gold">que empurra</span><br />
              o seu negócio.
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: "52ch", margin: 0, lineHeight: 1.6 }}>
            Cumprir obrigação fiscal é o mínimo. Nosso trabalho é usar a contabilidade
            como ferramenta estratégica — para você pagar menos impostos quando for legal,
            recuperar o que foi pago a mais, e tomar decisões com dados na mão.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 0,
          borderTop: "1px solid var(--line-light)",
          borderLeft: "1px solid var(--line-light)",
        }}>
          {items.map((it) => (
            <article
              key={it.num}
              style={{
                padding: "36px 28px 40px",
                borderRight: "1px solid var(--line-light)",
                borderBottom: "1px solid var(--line-light)",
                background: "var(--paper)",
                transition: "background .3s",
                position: "relative",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--paper-2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--paper)")}
            >
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold-deep)", marginBottom: 32 }}>
                {it.num}
              </div>
              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: 24,
                lineHeight: 1.15,
                marginBottom: 12,
                maxWidth: "14ch",
                color: "var(--ink)",
              }}>
                {it.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .section-head-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
