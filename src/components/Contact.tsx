"use client";

const WA_LINK = "https://wa.me/556332150954?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mastercont%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";

export default function Contact() {
  return (
    <section
      id="contato"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "clamp(80px,10vw,140px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(50% 50% at 100% 0%, rgba(201,169,97,0.08), transparent 60%),
          radial-gradient(40% 50% at 0% 100%, rgba(201,169,97,0.05), transparent 60%)
        `,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "start",
        }} className="contact-main-grid">
          {/* Copy */}
          <div>
            <span className="eyebrow on-dark"><span className="mono">Vamos conversar</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px,6vw,72px)",
              lineHeight: 1.02,
              color: "var(--paper)",
              marginTop: 20,
            }}>
              Pronto para uma<br />
              contabilidade{" "}
              <span className="italic-gold">que trabalha</span><br />
              pelo seu crescimento?
            </h2>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 28, maxWidth: "48ch", lineHeight: 1.55 }}>
              Fale com um dos nossos sócios. O primeiro diagnóstico é gratuito — você sai da
              conversa sabendo exatamente o que pode ser feito pela sua empresa.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="btn btn-gold"
                style={{ padding: "16px 24px", fontSize: 15 }}
              >
                <WAIcon />
                Falar no WhatsApp
                <ArrowIcon />
              </a>
              <a
                href="mailto:contato@mastercontpmw.com.br"
                className="btn btn-ghost on-dark"
                style={{ padding: "16px 24px", fontSize: 15 }}
              >
                <MailIcon />
                Enviar e-mail
              </a>
            </div>
          </div>

          {/* Info card */}
          <aside style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 4,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}>
            <InfoRow icon={<PinIcon />} label="ENDEREÇO">
              Q. 206 Sul, Avenida LO 05, Lote 13<br />
              Salas 03, 05 e 06 — Plano Diretor Sul<br />
              Palmas — TO · 77.020-504
            </InfoRow>

            <InfoRow icon={<PhoneIcon />} label="TELEFONE / WHATSAPP">
              <a href="tel:+556332150954" style={{ transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >(63) 3215-0954</a>
            </InfoRow>

            <InfoRow icon={<MailIcon />} label="E-MAIL">
              <a href="mailto:contato@mastercontpmw.com.br" style={{ transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >contato@mastercontpmw.com.br</a>
            </InfoRow>

            <InfoRow icon={<InstagramIcon />} label="INSTAGRAM">
              <a href="https://www.instagram.com/mastercontpmw" target="_blank" rel="noopener" style={{ transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >@mastercontpmw</a>
            </InfoRow>

            <div style={{ paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8f887c" }}>ATENDIMENTO</div>
              <div style={{ marginTop: 6, color: "#d5cfc3", fontSize: 14 }}>Segunda a Sexta · 08h às 18h</div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{
        width: 38,
        height: 38,
        borderRadius: 999,
        background: "rgba(201,169,97,0.08)",
        border: "1px solid rgba(201,169,97,0.2)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: "var(--gold)",
      }}>
        {icon}
      </div>
      <div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.22em", color: "#8f887c", marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 14, color: "#d5cfc3", lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
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
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
