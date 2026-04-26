"use client";

const testimonials = [
  {
    name: "Wanessa Araujo Fonseca",
    role: "CEO · Nitor Representações",
    text: "Excelentes profissionais. Atenciosos, dão soluções para os problemas que surgem. Há muitos anos vêm auxiliando minha empresa.",
  },
  {
    name: "Bárbara Menns",
    role: "CEO · Bárbara Menns Augusto Pereira Ltda",
    text: "Estou muito satisfeita com os serviços da Mastercont. Empresa competente, atenciosa, profissional, atendimento ágil e claro — o que me trouxe segurança na gestão contábil. Recomendo e confio no trabalho!",
  },
  {
    name: "Rodimila Cardoso",
    role: "CEO · Atlanta Academia",
    text: "A melhor contabilidade do estado do Tocantins, super atenciosos e prestação de serviço de qualidade.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testi-section">
      <div className="testi-container">
        <div className="testi-head">
          <div>
            <span className="eyebrow"><span className="mono">Depoimentos</span></span>
            <h2 className="testi-h2">
              Quem trabalha com a gente,<br />
              <span className="italic-gold">fica com a gente.</span>
            </h2>
          </div>
          <p className="testi-lead">
            Atendemos empresas de diferentes portes e setores em Palmas e em todo o Brasil.
            Leia o que alguns dos nossos clientes dizem sobre trabalhar com a Mastercont.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testi-card">
              <svg viewBox="0 0 32 32" fill="currentColor" className="testi-quote">
                <path d="M10 8c-4 0-7 3-7 7v9h9v-9H6c0-2 1-4 4-4V8zm13 0c-4 0-7 3-7 7v9h9v-9h-6c0-2 1-4 4-4V8z"/>
              </svg>
              <div className="testi-stars">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: "var(--gold)" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="testi-text">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="testi-meta">
                <div className="testi-name">{t.name}</div>
                <div className="mono testi-role">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .testi-section {
          background: var(--paper-2);
          padding: clamp(64px,9vw,140px) 0;
        }
        .testi-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }
        .testi-head {
          display: grid; grid-template-columns: 1fr 1.4fr;
          gap: 48px; margin-bottom: clamp(36px,6vw,72px); align-items: end;
        }
        .testi-h2 {
          font-family: var(--serif);
          font-size: clamp(34px,5vw,64px);
          line-height: 1.02; margin-top: 20px; color: var(--ink);
        }
        .testi-lead { font-size: 16px; color: var(--muted); max-width: 52ch; margin: 0; line-height: 1.6; }

        .testi-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .testi-card {
          position: relative; background: var(--paper);
          padding: 32px 26px 26px;
          border: 1px solid var(--line-light); border-radius: 2px;
          display: flex; flex-direction: column;
          min-height: 320px; margin: 0;
          transition: transform .3s, box-shadow .3s;
        }
        .testi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px rgba(10,10,10,.1);
        }
        .testi-quote {
          position: absolute; top: 20px; right: 22px;
          width: 32px; height: 32px; color: var(--gold-soft);
        }
        .testi-stars { display: flex; gap: 3px; margin-bottom: 14px; }
        .testi-text {
          font-family: var(--serif); font-size: 18px;
          line-height: 1.45; color: var(--ink);
          margin: 0 0 24px; flex: 1; letter-spacing: -.005em;
        }
        .testi-meta {
          padding-top: 18px; border-top: 1px solid var(--line-light);
        }
        .testi-name {
          font-family: var(--serif); font-size: 17px;
          color: var(--ink); margin-bottom: 4px;
        }
        .testi-role {
          font-size: 10px; letter-spacing: .12em;
          color: var(--muted); text-transform: uppercase;
        }

        @media (max-width: 820px) {
          .testi-head { grid-template-columns: 1fr; gap: 16px; }
          .testi-grid { grid-template-columns: 1fr; }
          .testi-card { min-height: auto; }
        }
      `}</style>
    </section>
  );
}
