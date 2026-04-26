/* Differentiators + Services */

function Differentiators() {
  const items = [
    {
      num: "01",
      title: "Consultiva, não burocrática",
      body: "Você não recebe apenas guias para pagar. Entregamos análises, interpretação de números e recomendações que impactam o seu caixa."
    },
    {
      num: "02",
      title: "Recuperação tributária",
      body: "Auditamos seus últimos 5 anos de PIS/COFINS em produtos monofásicos. Quando há crédito, você recebe de volta — legalmente."
    },
    {
      num: "03",
      title: "Tecnologia de ponta",
      body: "Plataformas modernas, dashboards claros e processos digitais. Menos papel, mais controle em tempo real sobre a sua empresa."
    },
    {
      num: "04",
      title: "Atendimento próximo",
      body: "Você fala direto com contadores, não com robôs. Reuniões estratégicas, WhatsApp e resposta rápida quando o assunto é urgente."
    },
  ];

  return (
    <section id="diferenciais" className="diff section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="mono">Por que Mastercont</span></span>
            <h2 style={{ marginTop: 20 }}>
              Contabilidade<br/>
              <span className="italic-gold">que empurra</span><br/>
              o seu negócio.
            </h2>
          </div>
          <p className="lead">
            Cumprir obrigação fiscal é o mínimo. Nosso trabalho é usar a contabilidade
            como ferramenta estratégica — para você pagar menos impostos quando for legal,
            recuperar o que foi pago a mais, e tomar decisões com dados na mão.
          </p>
        </div>

        <div className="diff-grid">
          {items.map(it => (
            <article className="diff-card reveal" key={it.num}>
              <div className="diff-num mono">{it.num}</div>
              <h3 className="diff-title serif">{it.title}</h3>
              <p className="diff-body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Services ============ */
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
      "Monitoramento de prazos e alertas"
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
      "Oportunidades setoriais de economia"
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
      "Acompanhamento até o crédito"
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
      "Declarações de pessoa física (ITR)"
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
      "Abertura, regularização e baixa de MEI"
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
      "Relatórios gerenciais mensais"
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
      "Procurações e contratos"
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
      "Proteção contra uso indevido de terceiros"
    ],
  },
];

function Services() {
  const [open, setOpen] = React.useState(null);

  return (
    <section id="servicos" className="services section-pad dark">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow on-dark"><span className="mono">Serviços</span></span>
            <h2 style={{ marginTop: 20, color: "var(--paper)" }}>
              Tudo o que sua empresa<br/>
              precisa <em className="italic-gold">em um só lugar</em>.
            </h2>
          </div>
          <p className="lead">
            Da abertura à consultoria estratégica, passando por fiscal, departamento pessoal e BPO financeiro.
            Você concentra operações — e ganha tempo para o que realmente importa: fazer o negócio crescer.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.key;
            return (
              <article
                key={s.key}
                className={`svc-card ${s.featured ? "featured" : ""} ${isOpen ? "open" : ""} reveal`}
                onClick={() => setOpen(isOpen ? null : s.key)}
              >
                <header className="svc-head">
                  <div className="svc-meta">
                    <span className="mono svc-num">{String(i+1).padStart(2,"0")}</span>
                    <span className="svc-tag">{s.tag}</span>
                    {s.featured && <span className="svc-badge mono">Mais procurado</span>}
                  </div>
                  <button className="svc-toggle" aria-label="Toggle">
                    {isOpen ? <Icon.minus style={{width:16,height:16}}/> : <Icon.plus style={{width:16,height:16}}/>}
                  </button>
                </header>

                <h3 className="svc-title serif">{s.title}</h3>
                <p className="svc-summary">{s.summary}</p>

                <div className="svc-details">
                  <div className="svc-details-inner">
                  <ul>
                    {s.bullets.map(b => (
                      <li key={b}>
                        <Icon.check style={{width:14,height:14,color:"var(--gold)"}}/>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waUrl(`Olá! Tenho interesse no serviço de ${s.title}. Podem me passar mais detalhes?`)}
                    target="_blank"
                    rel="noopener"
                    className="svc-cta"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Consultar sobre {s.title.toLowerCase()}
                    <Icon.arrow className="arr" style={{width:14,height:14}}/>
                  </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Differentiators, Services, SERVICES });
