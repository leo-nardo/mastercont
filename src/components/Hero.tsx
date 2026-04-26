"use client";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";

const marqueeItems = [
  "Gestão Fiscal", "Planejamento Tributário", "Recuperação Tributária",
  "BPO Financeiro", "Departamento Pessoal", "Abertura de Empresas",
  "Certificado Digital", "Registro de Marcas",
];

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(80% 60% at 80% 0%, rgba(201,169,97,0.08), transparent 60%),
          radial-gradient(60% 40% at 0% 100%, rgba(201,169,97,0.05), transparent 60%),
          var(--ink)
        `,
        color: "var(--paper)",
      }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>")`,
          opacity: 0.6,
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* Inner grid */}
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(80px,12vw,140px) clamp(20px,4vw,48px) clamp(60px,8vw,100px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,420px), 1fr))",
        gap: "clamp(32px,5vw,72px)",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
      }}>
        {/* Left: copy */}
        <div>
          <span className="eyebrow on-dark">
            <span className="mono">Contabilidade consultiva · Palmas / TO</span>
          </span>

          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(48px,7.5vw,92px)",
            lineHeight: 0.98,
            margin: "22px 0 26px",
            letterSpacing: "-0.02em",
            color: "var(--paper)",
          }}>
            Números que{" "}
            <em className="italic-gold">decidem</em>.<br />
            Estratégia que{" "}
            <em className="italic-gold">cresce</em>.
          </h1>

          <p style={{
            fontSize: "clamp(16px,1.6vw,19px)",
            color: "#c4bdb0",
            maxWidth: "52ch",
            margin: "0 0 36px",
            lineHeight: 1.55,
          }}>
            Unimos contabilidade, tecnologia e visão de negócio para transformar dados em
            decisões que reduzem custos, aumentam segurança e fazem a sua empresa crescer
            de forma sustentável.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold">
              <WAIcon />
              Falar com um contador agora
              <ArrowIcon />
            </a>
            <a href="#servicos" className="btn btn-ghost on-dark">
              Conhecer serviços
            </a>
          </div>

          {/* Trust bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px,3vw,36px)",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            maxWidth: 640,
            flexWrap: "wrap",
          }}>
            <TrustItem num="3" plus="+" label={"anos de atuação\nem Palmas — TO"} />
            <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.1)" }} />
            <TrustItem num="3" label={"sócios-fundadores\ncontadores ativos"} />
            <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.1)" }} />
            <TrustItem num="100" plus="%" label={"atendimento consultivo\ne personalizado"} />
          </div>
        </div>

        {/* Right: photo */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            aspectRatio: "3/4",
            maxHeight: 640,
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team-together.jpeg"
              alt="Equipe Mastercont"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
                filter: "contrast(1.02) saturate(0.95)",
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg,transparent 50%,rgba(10,10,10,0.35) 100%)",
              pointerEvents: "none",
            }} />
            {/* CRC badge */}
            <div style={{
              position: "absolute",
              left: 20,
              bottom: 20,
              padding: "14px 18px",
              background: "rgba(10,10,10,0.72)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(201,169,97,0.28)",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              zIndex: 2,
            }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--gold)" }}>CRC/TO</span>
              <span className="serif" style={{ fontSize: 22, color: "var(--paper)" }}>000860/O</span>
              <span style={{ fontSize: 11, color: "#b8b0a3" }}>Conselho Regional de Contabilidade</span>
            </div>
          </div>

          <div className="mono" style={{
            position: "absolute",
            top: 18,
            right: 18,
            fontSize: 11,
            textAlign: "right",
            color: "#b8b0a3",
            letterSpacing: "0.06em",
            lineHeight: 1.45,
            zIndex: 2,
          }}>
            Yuri · Jaques · Paulo<br />
            <span style={{ color: "var(--gold)" }}>— sócios-fundadores</span>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div aria-hidden="true" style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "22px 0",
        overflow: "hidden",
        background: "rgba(0,0,0,0.25)",
      }}>
        <div className="hm-track">
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              fontFamily: "var(--serif)",
              fontSize: "clamp(22px,2.6vw,32px)",
              color: "#7a746b",
              whiteSpace: "nowrap",
              marginRight: 40,
            }}>
              {marqueeItems.map((item, j) => (
                <span key={j} style={{ display: "flex", alignItems: "center", gap: 40 }}>
                  <span style={{ letterSpacing: "-0.01em" }}>{item}</span>
                  <span style={{ color: "var(--gold)", fontSize: "0.5em" }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustItem({ num, plus, label }: { num: string; plus?: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(34px,4.5vw,52px)",
        lineHeight: 1,
        color: "var(--paper)",
        letterSpacing: "-0.02em",
      }}>
        {num}
        {plus && <span style={{ color: "var(--gold)", fontSize: "0.7em", verticalAlign: "super", marginLeft: 2 }}>{plus}</span>}
      </div>
      <div style={{ fontSize: 12, color: "#8f887c", lineHeight: 1.35, whiteSpace: "pre-line" }}>{label}</div>
    </div>
  );
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="arr" style={{ width: 16, height: 16 }}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
