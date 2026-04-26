"use client";

const socios = [
  { name: "Yuri Morais de Sales", role: "CEO & Sócio-Fundador", img: "/images/yuri.jpeg" },
  { name: "Paulo Henrique Sousa Santos", role: "CEO & Sócio-Fundador", img: "/images/paulo.jpeg" },
  { name: "Jaques Oliveira da Silva", role: "CEO & Sócio-Fundador", img: "/images/jaques.jpeg" },
];

export default function Founders() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        {/* About text — full width, no repeated photo */}
        <div className="about-text-wrap">
          <div className="about-text-col">
            <span className="eyebrow on-dark"><span className="mono">Sobre a Mastercont</span></span>
            <h2 className="about-h2">
              Uma nova geração<br />
              de contabilidade{" "}
              <span className="italic-gold">em Palmas</span>.
            </h2>
            <div className="about-body-cols">
              <p className="about-p">
                Somos um escritório de contabilidade com atuação consultiva, que une estratégia e
                tecnologia para transformar dados em inteligência de negócio.
              </p>
              <p className="about-p">
                Mais do que cumprir obrigações fiscais, entregamos análises, planejamento tributário
                e suporte gerencial, utilizando ferramentas modernas para garantir mais agilidade,
                controle e precisão nas informações. Com atendimento próximo e visão estratégica,
                ajudamos sua empresa a reduzir custos, tomar decisões mais seguras e crescer de
                forma sustentável.
              </p>
            </div>

            {/* Credentials */}
            <div className="about-creds">
              <Cred label="CRC/TO" value="000860/O" />
              <Cred label="CNPJ" value="47.321.741/0001-38" />
              <Cred label="FUNDAÇÃO" value="Jul · 2022" />
            </div>
          </div>
        </div>

        {/* Founders grid */}
        <div className="socios-header">
          <span className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "#8f887c" }}>
            SÓCIOS-FUNDADORES
          </span>
        </div>
        <div className="socios-grid">
          {socios.map((s) => (
            <article key={s.name} className="socio-card">
              <div
                className="socio-photo"
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement | null;
                  if (img) { img.style.filter = "none"; img.style.transform = "scale(1.03)"; }
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement | null;
                  if (img) { img.style.filter = "grayscale(.15) contrast(1.02)"; img.style.transform = "none"; }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.name}
                  className="socio-img"
                />
              </div>
              <div className="socio-info">
                <div className="mono" style={{ fontSize: 10, letterSpacing: ".2em", color: "var(--gold)" }}>
                  {s.role.toUpperCase()}
                </div>
                <h3 className="socio-name">{s.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--ink); color: var(--paper);
          padding: clamp(64px,9vw,140px) 0;
        }
        .about-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }

        /* Text block — full width */
        .about-text-wrap {
          margin-bottom: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .about-text-col { max-width: 100%; }
        .about-h2 {
          font-family: var(--serif);
          font-size: clamp(36px,5.5vw,70px);
          line-height: 1.02; margin-top: 20px; margin-bottom: 32px;
          color: var(--paper);
        }
        /* Two-column text on desktop */
        .about-body-cols {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 32px; margin-bottom: 0;
        }
        .about-p {
          font-size: 16px; color: #b8b0a3;
          line-height: 1.65; margin: 0;
        }
        .about-creds {
          display: flex; gap: 48px; margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,.08);
          flex-wrap: wrap;
        }

        /* Founders */
        .socios-header {
          margin-bottom: 24px;
        }
        .socios-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .socio-card { display: flex; flex-direction: column; }
        .socio-photo {
          aspect-ratio: 3/4; overflow: hidden;
          background: var(--ink-2);
          border: 1px solid rgba(255,255,255,.05);
        }
        .socio-img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center 15%;
          filter: grayscale(.15) contrast(1.02);
          transition: filter .4s, transform .5s;
        }
        .socio-info { padding: 18px 4px 0; }
        .socio-name {
          font-family: var(--serif); font-size: 24px;
          margin-top: 8px; color: var(--paper); line-height: 1.15;
        }

        @media (max-width: 860px) {
          .about-body-cols { grid-template-columns: 1fr; gap: 16px; }
          .socios-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .socio-name { font-size: 18px; }
        }
        @media (max-width: 560px) {
          .socios-grid { grid-template-columns: 1fr; gap: 20px; }
          .socio-photo { aspect-ratio: 4/3; }
          .socio-img { object-position: center 10%; }
          .about-creds { gap: 24px; }
        }
      `}</style>
    </section>
  );
}

function Cred({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div className="mono" style={{ fontSize: 10, letterSpacing: ".2em", color: "#8f887c" }}>{label}</div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--paper)", letterSpacing: "-.01em" }}>{value}</div>
    </div>
  );
}
