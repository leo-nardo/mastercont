"use client";

const socios = [
  { name: "Yuri Morais de Sales", role: "CEO & Sócio-Fundador", img: "/images/yuri.jpeg" },
  { name: "Paulo Henrique Sousa Santos", role: "CEO & Sócio-Fundador", img: "/images/paulo.jpeg" },
  { name: "Jaques Oliveira da Silva", role: "CEO & Sócio-Fundador", img: "/images/jaques.jpeg" },
];

export default function Founders() {
  return (
    <section
      id="sobre"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "clamp(80px,10vw,140px) 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)" }}>
        {/* About grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "start",
          marginBottom: 80,
        }} className="about-main-grid">
          {/* Copy */}
          <div>
            <span className="eyebrow on-dark"><span className="mono">Sobre a Mastercont</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1.02,
              marginTop: 20,
              color: "var(--paper)",
            }}>
              Uma nova geração<br />
              de contabilidade{" "}
              <span className="italic-gold">em Palmas</span>.
            </h2>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 28, maxWidth: "52ch", lineHeight: 1.6 }}>
              Somos um escritório de contabilidade com atuação consultiva, que une estratégia e
              tecnologia para transformar dados em inteligência de negócio.
            </p>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 16, maxWidth: "52ch", lineHeight: 1.6 }}>
              Mais do que cumprir obrigações fiscais, entregamos análises, planejamento tributário
              e suporte gerencial, utilizando ferramentas modernas para garantir mais agilidade,
              controle e precisão nas informações.
            </p>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 16, maxWidth: "52ch", lineHeight: 1.6 }}>
              Com atendimento próximo e visão estratégica, ajudamos sua empresa a reduzir custos,
              tomar decisões mais seguras e crescer de forma sustentável.
            </p>

            {/* Credentials */}
            <div style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}>
              <Cred label="CRC/TO" value="000860/O" />
              <Cred label="CNPJ" value="47.321.741/0001-38" />
              <Cred label="FUNDAÇÃO" value="Jul · 2022" />
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team-together.jpeg"
              alt="Equipe Mastercont no escritório"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "contrast(1.02) saturate(0.9) brightness(0.95)",
                objectPosition: "center 30%",
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg,transparent 60%,rgba(10,10,10,0.7) 100%)",
            }} />
            <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 2 }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)" }}>ESCRITÓRIO MASTERCONT</span>
              <span style={{ display: "block", marginTop: 4, fontSize: 12, color: "#b8b0a3" }}>Palmas — Tocantins</span>
            </div>
          </div>
        </div>

        {/* Founders grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          paddingTop: 60,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {socios.map((s) => (
            <article key={s.name} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                aspectRatio: "3/4",
                overflow: "hidden",
                background: "var(--ink-2)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement | null;
                  if (img) { img.style.filter = "none"; img.style.transform = "scale(1.02)"; }
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement | null;
                  if (img) { img.style.filter = "grayscale(0.15) contrast(1.02)"; img.style.transform = "none"; }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    filter: "grayscale(0.15) contrast(1.02)",
                    transition: "filter .4s, transform .5s",
                  }}
                />
              </div>
              <div style={{ padding: "20px 4px 0" }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)" }}>
                  {s.role.toUpperCase()}
                </div>
                <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 26,
                  marginTop: 8,
                  color: "var(--paper)",
                  lineHeight: 1.15,
                }}>
                  {s.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Cred({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8f887c" }}>{label}</div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--paper)", letterSpacing: "-0.01em" }}>{value}</div>
    </div>
  );
}
