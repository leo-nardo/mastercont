"use client";

import { useState } from "react";

const WA_NUMBER = "556332150954";
function waUrl(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const SERVICES = [
  {
    key: "gestao-fiscal",
    tag: "Obrigações",
    title: "Gestão Fiscal",
    summary: "Escrituração, apurações e obrigações fiscais em dia — federal, estadual e municipal.",
    bullets: [
      "Apuração de impostos e envio de declarações",
      "Escrituração fiscal digital (EFD / SPED)",
      "Controle de obrigações acessórias",
      "Monitoramento de prazos e alertas",
    ],
  },
  {
    key: "planejamento",
    tag: "Estratégia",
    title: "Planejamento Tributário",
    summary: "Reduza legalmente a carga tributária com o regime certo e decisões fiscais bem planejadas.",
    bullets: [
      "Análise de regime (Simples, Presumido, Real)",
      "Simulações comparativas de carga",
      "Planejamento anual e revisões periódicas",
      "Oportunidades setoriais de economia",
    ],
  },
  {
    key: "recuperacao",
    tag: "Dinheiro de volta",
    title: "Recuperação Tributária",
    featured: true,
    summary: "Restituição de PIS e COFINS pagos indevidamente em produtos monofásicos — comum em varejo e revendedores.",
    bullets: [
      "Auditoria dos últimos 5 anos",
      "Levantamento de créditos elegíveis",
      "Retificação de declarações",
      "Acompanhamento até o crédito",
    ],
  },
  {
    key: "consultoria",
    tag: "Consultoria",
    title: "Consultoria Empresarial",
    summary: "Consultoria tributária e contábil, regularização de pendências e auditoria em todas as esferas.",
    bullets: [
      "Consultoria tributária e contábil",
      "Regularização fiscal e cadastral",
      "Auditoria e perícia contábil",
      "Declarações de pessoa física (ITR)",
    ],
  },
  {
    key: "dp",
    tag: "Pessoas",
    title: "Departamento Pessoal / RH",
    summary: "Folha, admissões, obrigações trabalhistas e soluções para empregado doméstico e MEI.",
    bullets: [
      "Folha de pagamento e eSocial",
      "Admissões, férias e rescisões",
      "Formalização de empregado doméstico",
      "Abertura, regularização e baixa de MEI",
    ],
  },
  {
    key: "bpo",
    tag: "Financeiro",
    title: "BPO Financeiro",
    summary: "Terceirize contas a pagar, a receber, conciliações e relatórios com uma equipe especializada.",
    bullets: [
      "Contas a pagar e a receber",
      "Conciliação bancária diária",
      "Cobranças e acompanhamento de inadimplência",
      "Relatórios gerenciais mensais",
    ],
  },
  {
    key: "abertura",
    tag: "Novos negócios",
    title: "Abertura e Legalização",
    summary: "Abertura, alteração, transferência e baixa de empresas com agilidade e segurança jurídica.",
    bullets: [
      "Constituição de empresas",
      "Alteração contratual e transferência",
      "Regularização em órgãos fiscais",
      "Procurações e contratos",
    ],
  },
  {
    key: "extras",
    tag: "Apoio",
    title: "Certificado Digital + Registro de Marcas",
    summary: "Emissão rápida de Certificado Digital e registro de marca junto ao INPI para proteger sua identidade.",
    bullets: [
      "Emissão e renovação de Certificado Digital",
      "Suporte completo na instalação",
      "Registro de marca no INPI",
      "Proteção contra uso indevido de terceiros",
    ],
  },
];

export default function Services() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section
      id="servicos"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
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
        }} className="svc-head-grid">
          <div>
            <span className="eyebrow on-dark"><span className="mono">Serviços</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1.02,
              marginTop: 20,
              color: "var(--paper)",
            }}>
              Tudo o que sua empresa<br />
              precisa <em className="italic-gold">em um só lugar</em>.
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "#b8b0a3", maxWidth: "52ch", margin: 0, lineHeight: 1.6 }}>
            Da abertura à consultoria estratégica, passando por fiscal, departamento pessoal e BPO financeiro.
            Você concentra operações — e ganha tempo para o que realmente importa: fazer o negócio crescer.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px), 1fr))",
          gap: 1,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          {SERVICES.map((s, i) => {
            const isOpen = openKey === s.key;
            return (
              <article
                key={s.key}
                onClick={() => setOpenKey(isOpen ? null : s.key)}
                style={{
                  position: "relative",
                  padding: "32px 32px 28px",
                  background: s.featured
                    ? `linear-gradient(180deg,rgba(201,169,97,${isOpen ? 0.12 : 0.08}),rgba(201,169,97,${isOpen ? 0.04 : 0.02}))`
                    : isOpen ? "var(--ink-2)" : "var(--ink)",
                  cursor: "pointer",
                  transition: "background .3s",
                }}
                onMouseEnter={e => {
                  if (!s.featured) (e.currentTarget as HTMLElement).style.background = "var(--ink-2)";
                }}
                onMouseLeave={e => {
                  if (!s.featured) (e.currentTarget as HTMLElement).style.background = isOpen ? "var(--ink-2)" : "var(--ink)";
                }}
              >
                {/* Card head */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", flex: 1, minWidth: 0 }}>
                    <span className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--gold)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#8f887c",
                      padding: "4px 10px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 999,
                      fontFamily: "var(--mono)",
                    }}>
                      {s.tag}
                    </span>
                    {s.featured && (
                      <span className="mono" style={{
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        padding: "5px 10px",
                        border: "1px solid var(--gold)",
                        borderRadius: 999,
                        background: "rgba(0,0,0,0.3)",
                        whiteSpace: "nowrap",
                      }}>
                        Mais procurado
                      </span>
                    )}
                  </div>
                  <button
                    aria-label="Toggle"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: isOpen ? "var(--gold)" : "var(--paper)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "border-color .2s, color .2s",
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>
                </div>

                <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(26px,2.6vw,34px)",
                  lineHeight: 1.08,
                  marginBottom: 10,
                  maxWidth: "22ch",
                  color: "var(--paper)",
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "#b8b0a3", margin: 0, lineHeight: 1.55, maxWidth: "48ch" }}>
                  {s.summary}
                </p>

                {/* Expandable details */}
                <div style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows .45s ease, margin-top .3s ease, opacity .3s ease",
                  opacity: isOpen ? 1 : 0,
                  marginTop: isOpen ? 24 : 0,
                }}>
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "grid", gap: 10 }}>
                      {s.bullets.map((b) => (
                        <li key={b} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 14,
                          color: "#d5cfc3",
                          paddingTop: 10,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}>
                          <CheckIcon />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waUrl(`Olá! Tenho interesse no serviço de ${s.title}. Podem me passar mais detalhes?`)}
                      target="_blank"
                      rel="noopener"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: "var(--gold)",
                        padding: "10px 16px",
                        border: "1px solid rgba(201,169,97,0.35)",
                        borderRadius: 999,
                        transition: "background .2s, border-color .2s, color .2s",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                        (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,97,0.35)";
                      }}
                    >
                      Consultar sobre {s.title.toLowerCase()}
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .svc-head-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
    </svg>
  );
}
function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
      <path d="M5 12h14" strokeLinecap="round"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, color: "var(--gold)", marginTop: 4, flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14 }}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
