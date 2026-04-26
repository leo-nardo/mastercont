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
    <section
      id="depoimentos"
      style={{
        background: "var(--paper-2)",
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
        }} className="testi-head-grid">
          <div>
            <span className="eyebrow"><span className="mono">Depoimentos</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1.02,
              marginTop: 20,
              color: "var(--ink)",
            }}>
              Quem trabalha com a gente,<br />
              <span className="italic-gold">fica com a gente.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: "52ch", margin: 0, lineHeight: 1.6 }}>
            Atendemos empresas de diferentes portes e setores em Palmas e em todo o Brasil.
            Leia o que alguns dos nossos clientes dizem sobre trabalhar com a Mastercont.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              style={{
                position: "relative",
                background: "var(--paper)",
                padding: "36px 30px 30px",
                border: "1px solid var(--line-light)",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                minHeight: 340,
                margin: 0,
                transition: "transform .3s, box-shadow .3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 30px 60px rgba(10,10,10,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Quote icon */}
              <svg viewBox="0 0 32 32" fill="currentColor" style={{ position: "absolute", top: 22, right: 24, width: 36, height: 36, color: "var(--gold-soft)" }}>
                <path d="M10 8c-4 0-7 3-7 7v9h9v-9H6c0-2 1-4 4-4V8zm13 0c-4 0-7 3-7 7v9h9v-9h-6c0-2 1-4 4-4V8z"/>
              </svg>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: "var(--gold)" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <blockquote style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                lineHeight: 1.4,
                color: "var(--ink)",
                margin: "0 0 28px",
                flex: 1,
                letterSpacing: "-0.005em",
              }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption style={{ paddingTop: 20, borderTop: "1px solid var(--line-light)" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--ink)", marginBottom: 4 }}>{t.name}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--muted)", textTransform: "uppercase" }}>{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .testi-head-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
