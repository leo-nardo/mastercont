"use client";

import { useState } from "react";

const WA_NUMBER = "556332150954";
function waUrl(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const SERVICES = [
  { key: "gestao-fiscal", tag: "Obrigações", title: "Gestão Fiscal",
    summary: "Escrituração, apurações e obrigações fiscais em dia — federal, estadual e municipal.",
    bullets: ["Apuração de impostos e envio de declarações","Escrituração fiscal digital (EFD / SPED)","Controle de obrigações acessórias","Monitoramento de prazos e alertas"] },
  { key: "planejamento", tag: "Estratégia", title: "Planejamento Tributário",
    summary: "Reduza legalmente a carga tributária com o regime certo e decisões fiscais bem planejadas.",
    bullets: ["Análise de regime (Simples, Presumido, Real)","Simulações comparativas de carga","Planejamento anual e revisões periódicas","Oportunidades setoriais de economia"] },
  { key: "recuperacao", tag: "Dinheiro de volta", title: "Recuperação Tributária", featured: true,
    summary: "Restituição de PIS e COFINS pagos indevidamente em produtos monofásicos — comum em varejo e revendedores.",
    bullets: ["Auditoria dos últimos 5 anos","Levantamento de créditos elegíveis","Retificação de declarações","Acompanhamento até o crédito"] },
  { key: "consultoria", tag: "Consultoria", title: "Consultoria Empresarial",
    summary: "Consultoria tributária e contábil, regularização de pendências e auditoria em todas as esferas.",
    bullets: ["Consultoria tributária e contábil","Regularização fiscal e cadastral","Auditoria e perícia contábil","Declarações de pessoa física (ITR)"] },
  { key: "dp", tag: "Pessoas", title: "Departamento Pessoal / RH",
    summary: "Folha, admissões, obrigações trabalhistas e soluções para empregado doméstico e MEI.",
    bullets: ["Folha de pagamento e eSocial","Admissões, férias e rescisões","Formalização de empregado doméstico","Abertura, regularização e baixa de MEI"] },
  { key: "bpo", tag: "Financeiro", title: "BPO Financeiro",
    summary: "Terceirize contas a pagar, a receber, conciliações e relatórios com uma equipe especializada.",
    bullets: ["Contas a pagar e a receber","Conciliação bancária diária","Cobranças e acompanhamento de inadimplência","Relatórios gerenciais mensais"] },
  { key: "abertura", tag: "Novos negócios", title: "Abertura e Legalização",
    summary: "Abertura, alteração, transferência e baixa de empresas com agilidade e segurança jurídica.",
    bullets: ["Constituição de empresas","Alteração contratual e transferência","Regularização em órgãos fiscais","Procurações e contratos"] },
  { key: "extras", tag: "Apoio", title: "Certificado Digital + Registro de Marcas",
    summary: "Emissão rápida de Certificado Digital e registro de marca junto ao INPI para proteger sua identidade.",
    bullets: ["Emissão e renovação de Certificado Digital","Suporte completo na instalação","Registro de marca no INPI","Proteção contra uso indevido de terceiros"] },
];

export default function Services() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="servicos" className="svc-section">
      <div className="svc-container">
        <div className="svc-head">
          <span className="eyebrow on-dark"><span className="mono">Serviços</span></span>
          <h2 className="svc-h2">
            Tudo o que sua empresa<br />
            precisa <em className="italic-gold">em um só lugar</em>.
          </h2>
          <p className="svc-lead">
            Da abertura à consultoria estratégica, passando por fiscal, departamento pessoal e BPO financeiro.
            Você concentra operações — e ganha tempo para o que realmente importa.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const isOpen = openKey === s.key;
            return (
              <article
                key={s.key}
                className={`svc-card ${s.featured ? "featured" : ""} ${isOpen ? "open" : ""}`}
                onClick={() => setOpenKey(isOpen ? null : s.key)}
              >
                <div className="svc-card-head">
                  <div className="svc-meta">
                    <span className="mono svc-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mono svc-tag-pill">{s.tag}</span>
                    {s.featured && <span className="mono svc-badge">Mais procurado</span>}
                  </div>
                  <button className="svc-toggle" aria-label="Expandir">
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>
                </div>

                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-summary">{s.summary}</p>

                <div className="svc-details" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0, marginTop: isOpen ? 20 : 0 }}>
                  <div className="svc-details-inner">
                    <ul className="svc-bullets">
                      {s.bullets.map((b) => (
                        <li key={b}><CheckIcon /><span>{b}</span></li>
                      ))}
                    </ul>
                    <a
                      href={waUrl(`Olá! Tenho interesse no serviço de ${s.title}. Podem me passar mais detalhes?`)}
                      target="_blank" rel="noopener"
                      className="svc-cta-link"
                      onClick={(e) => e.stopPropagation()}
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
        .svc-section {
          background: var(--ink); color: var(--paper);
          padding: clamp(64px,9vw,140px) 0;
        }
        .svc-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }
        .svc-head {
          text-align: center;
          margin-bottom: clamp(40px,6vw,80px);
        }
        .svc-h2 {
          font-family: var(--serif);
          font-size: clamp(36px,5vw,68px);
          line-height: 1.02; margin-top: 20px; color: var(--paper);
        }
        .svc-lead { font-size: 16px; color: #b8b0a3; max-width: 56ch; margin: 20px auto 0; line-height: 1.6; }

        .svc-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1px; background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.08);
        }
        .svc-card {
          padding: 28px 28px 24px;
          background: var(--ink);
          cursor: pointer; transition: background .3s;
        }
        .svc-card:hover { background: var(--ink-2); }
        .svc-card.featured {
          background: linear-gradient(180deg,rgba(201,169,97,.08),rgba(201,169,97,.02));
        }
        .svc-card.featured:hover {
          background: linear-gradient(180deg,rgba(201,169,97,.12),rgba(201,169,97,.04));
        }

        .svc-card-head {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 12px; margin-bottom: 20px;
        }
        .svc-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; flex: 1; min-width: 0; }
        .svc-num { color: var(--gold); font-size: 11px; letter-spacing: .18em; }
        .svc-tag-pill {
          font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
          color: #8f887c; padding: 3px 9px;
          border: 1px solid rgba(255,255,255,.1); border-radius: 999px;
        }
        .svc-badge {
          font-size: 10px; letter-spacing: .18em; text-transform: uppercase;
          color: var(--gold); padding: 4px 9px;
          border: 1px solid var(--gold); border-radius: 999px;
          background: rgba(0,0,0,.3); white-space: nowrap;
        }
        .svc-toggle {
          width: 34px; height: 34px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.15);
          color: var(--paper); display: inline-flex;
          align-items: center; justify-content: center;
          transition: border-color .2s, color .2s; flex-shrink: 0;
          min-width: 34px; /* touch target */
        }
        .svc-card.open .svc-toggle { border-color: var(--gold); color: var(--gold); }

        .svc-title {
          font-family: var(--serif);
          font-size: clamp(22px,2.4vw,34px);
          line-height: 1.08; margin-bottom: 8px;
          max-width: 22ch; color: var(--paper);
        }
        .svc-summary {
          font-size: 14px; color: #b8b0a3;
          margin: 0; line-height: 1.55; max-width: 48ch;
        }

        .svc-details {
          display: grid;
          transition: grid-template-rows .4s ease, margin-top .3s ease, opacity .3s ease;
        }
        .svc-details-inner { overflow: hidden; min-height: 0; }
        .svc-bullets {
          list-style: none; padding: 0; margin: 0 0 16px;
          display: grid; gap: 0;
        }
        .svc-bullets li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 13px; color: #d5cfc3;
          padding: 9px 0;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        .svc-cta-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--gold);
          padding: 9px 14px;
          border: 1px solid rgba(201,169,97,.35); border-radius: 999px;
          transition: background .2s, border-color .2s, color .2s;
          margin-bottom: 4px;
        }
        .svc-cta-link:hover {
          background: var(--gold); color: var(--ink); border-color: var(--gold);
        }

        @media (max-width: 640px) {
          .svc-grid { grid-template-columns: 1fr; }
          .svc-card { padding: 22px 20px 18px; }
        }
      `}</style>
    </section>
  );
}

function PlusIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>;
}
function MinusIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}><path d="M5 12h14" strokeLinecap="round"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, color: "var(--gold)", marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 13, height: 13 }}><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
