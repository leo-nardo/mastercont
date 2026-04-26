"use client";

import { useState } from "react";
import { AnimateIn } from "./AnimateIn";

const FAQS = [
  { q: "Vocês atendem empresas fora de Palmas?",
    a: "Sim. Temos estrutura 100% digital que permite atender clientes em todo o Brasil com a mesma qualidade. Para clientes em Palmas, o atendimento também pode ser presencial no nosso escritório." },
  { q: "Como funciona a troca do contador atual para a Mastercont?",
    a: "Você só precisa assinar uma procuração. Nós cuidamos de toda a transição: solicitamos os arquivos ao contador anterior, analisamos a situação fiscal e garantimos que nada fique pendente. Em poucos dias sua contabilidade está rodando com a gente." },
  { q: "Quanto custa a recuperação tributária?",
    a: "O diagnóstico inicial é gratuito. Só trabalhamos com modelo de êxito — você só paga um percentual sobre o crédito efetivamente recuperado. Se não há crédito, não há cobrança." },
  { q: "Quais regimes tributários vocês atendem?",
    a: "Atendemos empresas em todos os regimes: Simples Nacional, Lucro Presumido e Lucro Real, além de MEI e Pessoa Física. Fazemos a análise para identificar o regime mais vantajoso no seu caso." },
  { q: "Vocês ajudam na abertura de empresa?",
    a: "Sim. Cuidamos de todo o processo de abertura: enquadramento, registro na Junta Comercial, inscrições fiscais, licenças e tudo mais. O processo costuma levar de poucos dias a algumas semanas, dependendo da atividade." },
  { q: "Como é feita a comunicação no dia a dia?",
    a: "Por WhatsApp, e-mail e reuniões online ou presenciais. Você tem contato direto com contadores — não com robôs. Reuniões estratégicas mensais ou trimestrais estão incluídas conforme o plano." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <AnimateIn className="faq-head">
          <span className="eyebrow"><span className="mono">Perguntas frequentes</span></span>
          <h2 className="faq-h2">
            Ainda tem<br />
            <span className="italic-gold">alguma dúvida?</span>
          </h2>
          <p className="faq-lead">
            As perguntas que mais recebemos de empresários que estão avaliando trocar de contador
            ou iniciar um novo negócio. Se a sua não está aqui, chama no WhatsApp.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15} className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="faq-item">
                <button
                  className="faq-btn"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`faq-q-text ${isOpen ? "open" : ""}`}>{f.q}</span>
                  <span className={`faq-icon ${isOpen ? "open" : ""}`}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div className="faq-answer" style={{ maxHeight: isOpen ? 500 : 0, paddingBottom: isOpen ? 24 : 0 }}>
                  <p className="faq-a-text">{f.a}</p>
                </div>
              </div>
            );
          })}
        </AnimateIn>
      </div>

      <style>{`
        .faq-section {
          background: var(--paper);
          padding: clamp(64px,9vw,140px) 0;
        }
        .faq-container {
          max-width: 1240px; margin: 0 auto;
          padding: 0 clamp(20px,4vw,48px);
        }
        .faq-head {
          text-align: center;
          margin-bottom: clamp(40px,6vw,72px);
        }
        .faq-h2 {
          font-family: var(--serif);
          font-size: clamp(36px,5vw,68px);
          line-height: 1.02; margin-top: 20px; color: var(--ink);
        }
        .faq-lead {
          font-size: 16px; color: var(--muted);
          max-width: 56ch; margin: 20px auto 0; line-height: 1.6;
        }

        .faq-list {
          max-width: 900px; margin: 0 auto;
          border-top: 1px solid var(--line-light);
        }
        .faq-item { border-bottom: 1px solid var(--line-light); }
        .faq-btn {
          width: 100%; display: flex;
          justify-content: space-between; align-items: center;
          gap: 16px; padding: 22px 0; text-align: left;
          cursor: pointer; background: none; border: none;
        }
        .faq-q-text {
          font-family: var(--serif);
          font-size: clamp(17px,2vw,24px);
          line-height: 1.3; color: var(--ink); transition: color .2s;
        }
        .faq-q-text.open { color: var(--gold-deep); }
        .faq-icon {
          width: 36px; height: 36px; min-width: 36px;
          border-radius: 999px;
          border: 1px solid var(--line-light);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--ink); transition: background .2s, border-color .2s, color .2s;
        }
        .faq-icon.open {
          background: var(--ink); color: var(--gold); border-color: var(--ink);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height .4s ease, padding .3s;
        }
        .faq-a-text {
          margin: 0; font-size: 15px; color: var(--muted);
          line-height: 1.65; max-width: 68ch;
        }

        @media (max-width: 640px) {
          .faq-btn { padding: 18px 0; gap: 12px; }
          .faq-a-text { font-size: 14px; }
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
