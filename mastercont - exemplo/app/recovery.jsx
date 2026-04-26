/* Recuperação Tributária com calculadora + Processo */

function RecoverySection() {
  const [revenue, setRevenue] = React.useState(50000);
  const [months, setMonths] = React.useState(60);

  // Estimativa conservadora: 0.8% da receita em monofásicos pode retornar.
  // É uma estimativa ilustrativa; texto deixa isso claro.
  const estimateMin = Math.round(revenue * months * 0.006);
  const estimateMax = Math.round(revenue * months * 0.015);

  const fmt = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const sectors = [
    "Farmácias e drogarias",
    "Postos de combustíveis",
    "Autopeças e acessórios",
    "Bares, lanchonetes e restaurantes",
    "Mercearias e mercados de bairro",
    "Perfumarias e cosméticos",
  ];

  return (
    <section id="recuperacao" className="recovery section-pad">
      <div className="rec-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="rec-grid">
          <div className="rec-copy">
            <span className="eyebrow on-dark"><span className="mono">Recuperação Tributária</span></span>
            <h2 className="rec-title">
              Sua empresa pode ter<br/>
              <span className="italic-gold">dinheiro para receber</span><br/>
              de volta.
            </h2>
            <p className="rec-lead">
              A tributação de PIS e COFINS em produtos monofásicos é concentrada na indústria
              ou importador — mas é comum haver recolhimentos indevidos nas etapas seguintes.
              Nós auditamos os últimos 5 anos da sua empresa e recuperamos esses créditos legalmente.
            </p>

            <div className="rec-sectors">
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "#8f887c", marginBottom: 12 }}>
                SETORES QUE MAIS RECUPERAM
              </div>
              <div className="rec-sectors-grid">
                {sectors.map(s => (
                  <div key={s} className="rec-sector">
                    <Icon.check style={{width:14,height:14,color:"var(--gold)"}}/>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rec-calc">
            <div className="rec-calc-header">
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--gold)" }}>
                SIMULADOR
              </span>
              <h3 className="serif" style={{ fontSize: 28, marginTop: 8, color: "var(--paper)" }}>
                Estime seu potencial de crédito
              </h3>
            </div>

            <div className="rec-field">
              <label>
                <span>Faturamento mensal médio</span>
                <span className="rec-value">{fmt(revenue)}</span>
              </label>
              <input
                type="range"
                min="10000" max="1000000" step="5000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
              />
              <div className="rec-scale mono">
                <span>R$ 10k</span><span>R$ 1M</span>
              </div>
            </div>

            <div className="rec-field">
              <label>
                <span>Período a auditar</span>
                <span className="rec-value">{months} meses</span>
              </label>
              <input
                type="range"
                min="12" max="60" step="12"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
              />
              <div className="rec-scale mono">
                <span>12m</span><span>60m</span>
              </div>
            </div>

            <div className="rec-result">
              <div className="rec-result-label mono">POTENCIAL ESTIMADO DE CRÉDITO</div>
              <div className="rec-result-value serif">
                {fmt(estimateMin)} <span style={{ opacity: 0.5, fontSize: "0.6em" }}>a</span> {fmt(estimateMax)}
              </div>
              <div className="rec-disclaimer">
                Estimativa ilustrativa baseada em médias de mercado para comércios com produtos monofásicos.
                O valor real depende de auditoria. <strong style={{ color: "var(--gold)" }}>O diagnóstico é gratuito.</strong>
              </div>
            </div>

            <a
              href={waUrl(`Olá! Simulei no site: faturamento R$ ${revenue.toLocaleString("pt-BR")}/mês por ${months} meses. Gostaria de um diagnóstico gratuito de recuperação tributária.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-gold"
              style={{ width: "100%", justifyContent: "center", marginTop: 20 }}
            >
              <Icon.whatsapp style={{width:16,height:16}}/>
              Solicitar diagnóstico gratuito
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============ Processo ============ */
function Process() {
  const steps = [
    { n: "01", t: "Conversa inicial", d: "Você fala com um contador pelo WhatsApp ou em reunião. Entendemos seu negócio, porte e principais dores." },
    { n: "02", t: "Diagnóstico", d: "Analisamos sua situação fiscal, regime tributário e identificamos oportunidades — inclusive recuperação de créditos." },
    { n: "03", t: "Proposta sob medida", d: "Apresentamos o escopo, prazos e investimento. Sem letra miúda, sem surpresas no contrato." },
    { n: "04", t: "Virada de chave", d: "Cuidamos da transição com seu contador atual. Em poucos dias sua contabilidade está rodando conosco." },
  ];

  return (
    <section id="processo" className="process section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="mono">Como funciona</span></span>
            <h2 style={{ marginTop: 20 }}>
              Do primeiro contato<br/>
              <span className="italic-gold">à virada de chave</span><br/>
              em 4 passos.
            </h2>
          </div>
          <p className="lead">
            Sem burocracia desnecessária. Você fala com gente — não com formulários e respostas automáticas.
            Nossa meta é assumir sua contabilidade com segurança e no menor tempo possível.
          </p>
        </div>

        <div className="proc-track">
          {steps.map((s, i) => (
            <div className="proc-step reveal" key={s.n}>
              <div className="proc-line" aria-hidden="true">
                <span className="proc-dot"></span>
                {i < steps.length - 1 && <span className="proc-bar"></span>}
              </div>
              <div className="proc-body">
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--gold-deep)" }}>
                  PASSO {s.n}
                </div>
                <h3 className="serif" style={{ fontSize: 28, margin: "10px 0 10px" }}>{s.t}</h3>
                <p style={{ color: "var(--muted)", fontSize: 15, margin: 0, lineHeight: 1.55 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { RecoverySection, Process });
