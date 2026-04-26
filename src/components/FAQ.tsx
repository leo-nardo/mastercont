"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Vocês atendem empresas fora de Palmas?",
    a: "Sim. Temos estrutura 100% digital que permite atender clientes em todo o Brasil com a mesma qualidade. Para clientes em Palmas, o atendimento também pode ser presencial no nosso escritório.",
  },
  {
    q: "Como funciona a troca do contador atual para a Mastercont?",
    a: "Você só precisa assinar uma procuração. Nós cuidamos de toda a transição: solicitamos os arquivos ao contador anterior, analisamos a situação fiscal e garantimos que nada fique pendente. Em poucos dias sua contabilidade está rodando com a gente.",
  },
  {
    q: "Quanto custa a recuperação tributária?",
    a: "O diagnóstico inicial é gratuito. Só trabalhamos com modelo de êxito — você só paga um percentual sobre o crédito efetivamente recuperado. Se não há crédito, não há cobrança.",
  },
  {
    q: "Quais regimes tributários vocês atendem?",
    a: "Atendemos empresas em todos os regimes: Simples Nacional, Lucro Presumido e Lucro Real, além de MEI e Pessoa Física. Fazemos a análise para identificar o regime mais vantajoso no seu caso.",
  },
  {
    q: "Vocês ajudam na abertura de empresa?",
    a: "Sim. Cuidamos de todo o processo de abertura: enquadramento, registro na Junta Comercial, inscrições fiscais, licenças e tudo mais. O processo costuma levar de poucos dias a algumas semanas, dependendo da atividade.",
  },
  {
    q: "Como é feita a comunicação no dia a dia?",
    a: "Por WhatsApp, e-mail e reuniões online ou presenciais. Você tem contato direto com contadores — não com robôs. Reuniões estratégicas mensais ou trimestrais estão incluídas conforme o plano.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "var(--paper)",
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
        }} className="faq-head-grid">
          <div>
            <span className="eyebrow"><span className="mono">Perguntas frequentes</span></span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1.02,
              marginTop: 20,
              color: "var(--ink)",
            }}>
              Ainda tem<br />
              <span className="italic-gold">alguma dúvida?</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: "52ch", margin: 0, lineHeight: 1.6 }}>
            As perguntas que mais recebemos de empresários que estão avaliando trocar de contador
            ou iniciar um novo negócio. Se a sua não está aqui, chama no WhatsApp.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 900, margin: "0 auto", borderTop: "1px solid var(--line-light)" }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--line-light)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                    padding: "24px 0",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(20px,2.2vw,26px)",
                    lineHeight: 1.25,
                    color: isOpen ? "var(--gold-deep)" : "var(--ink)",
                    transition: "color .2s",
                  }}>
                    {f.q}
                  </span>
                  <span style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    border: `1px solid ${isOpen ? "var(--ink)" : "var(--line-light)"}`,
                    background: isOpen ? "var(--ink)" : "transparent",
                    color: isOpen ? "var(--gold)" : "var(--ink)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background .2s, border-color .2s, color .2s",
                  }}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height .4s ease, padding .3s",
                  paddingBottom: isOpen ? 28 : 0,
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: 16,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    maxWidth: "68ch",
                    paddingRight: 48,
                  }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .faq-head-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
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
