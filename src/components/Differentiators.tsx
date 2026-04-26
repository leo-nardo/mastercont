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
    <section id="diferenciais" className="diff-section">
      <div className="diff-container">
        {/* Section head */}
        <div className="diff-head">
          <div>
            <span className="eyebrow"><span className="mono">Por que Mastercont</span></span>
            <h2 className="diff-h2">
              Contabilidade<br />
              <span className="italic-gold">que empurra</span><br />
              o seu negócio.
            </h2>
          </div>
          <p className="diff-lead">
            Cumprir obrigação fiscal é o mínimo. Nosso trabalho é usar a contabilidade
            como ferramenta estratégica — para você pagar menos impostos quando for legal,
            recuperar o que foi pago a mais, e tomar decisões com dados na mão.
          </p>
        </div>

        {/* Cards grid */}
        <div className="diff-grid">
          {items.map((it) => (
            <article key={it.num} className="diff-card">
              <div className="mono diff-num">{it.num}</div>
              <h3 className="diff-title">{it.title}</h3>
              <p className="diff-body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .diff-section {
          background: var(--paper);
          padding: clamp(64px,9vw,140px) 0;
        }
        .diff-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }
        .diff-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          margin-bottom: clamp(36px,6vw,72px);
          align-items: end;
        }
        .diff-h2 {
          font-family: var(--serif);
          font-size: clamp(34px,5vw,64px);
          line-height: 1.02; margin-top: 20px; color: var(--ink);
        }
        .diff-lead {
          font-size: 16px; color: var(--muted);
          max-width: 52ch; margin: 0; line-height: 1.6;
        }
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--line-light);
          border-left: 1px solid var(--line-light);
        }
        .diff-card {
          padding: 32px 24px 36px;
          border-right: 1px solid var(--line-light);
          border-bottom: 1px solid var(--line-light);
          background: var(--paper);
          transition: background .3s;
        }
        .diff-card:hover { background: var(--paper-2); }
        .diff-num {
          font-size: 11px; letter-spacing: .2em;
          color: var(--gold-deep); margin-bottom: 28px;
        }
        .diff-title {
          font-family: var(--serif); font-size: 22px;
          line-height: 1.15; margin-bottom: 10px;
          color: var(--ink); max-width: 14ch;
        }
        .diff-body {
          font-size: 14px; color: var(--muted); line-height: 1.55; margin: 0;
        }

        @media (max-width: 820px) {
          .diff-head { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 900px) {
          .diff-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .diff-card { padding: 24px 18px 28px; }
          .diff-title { font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
