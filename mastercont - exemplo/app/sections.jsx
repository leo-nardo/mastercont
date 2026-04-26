/* About/Team + Testimonials + FAQ + Contact/Footer */

function About() {
  const socios = [
    { name: "Yuri Morais de Sales", role: "CEO & Sócio-Fundador", img: "assets/yuri.jpeg" },
    { name: "Paulo Henrique Sousa Santos", role: "CEO & Sócio-Fundador", img: "assets/paulo.jpeg" },
    { name: "Jaques Oliveira da Silva", role: "CEO & Sócio-Fundador", img: "assets/jaques.jpeg" },
  ];

  return (
    <section id="sobre" className="about section-pad dark">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow on-dark"><span className="mono">Sobre a Mastercont</span></span>
            <h2 style={{ marginTop: 20, fontSize: "clamp(38px, 5.2vw, 64px)", color: "var(--paper)" }}>
              Uma nova geração<br/>
              de contabilidade <span className="italic-gold">em Palmas</span>.
            </h2>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 28, maxWidth: "52ch", lineHeight: 1.6 }}>
              Fundada em 2022, a Mastercont nasce da união de três contadores com experiência
              consolidada no mercado — e a vontade de fazer contabilidade de um jeito diferente:
              consultiva, digital e próxima do cliente.
            </p>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 16, maxWidth: "52ch", lineHeight: 1.6 }}>
              Cada sócio acompanha pessoalmente os clientes. Você não é mais um número em
              uma planilha — é um negócio que entendemos e queremos ver crescer.
            </p>

            <div className="about-creds">
              <div className="ac-item">
                <div className="mono ac-lbl">CRC/TO</div>
                <div className="serif ac-val">000860/O</div>
              </div>
              <div className="ac-item">
                <div className="mono ac-lbl">CNPJ</div>
                <div className="serif ac-val">47.321.741/0001-38</div>
              </div>
              <div className="ac-item">
                <div className="mono ac-lbl">FUNDAÇÃO</div>
                <div className="serif ac-val">Jul · 2022</div>
              </div>
            </div>
          </div>

          <div className="about-photo">
            <img src="assets/team-together.jpeg" alt="Equipe Mastercont no escritório"/>
            <div className="about-photo-caption">
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)" }}>ESCRITÓRIO MASTERCONT</span>
              <span style={{ display: "block", marginTop: 4, fontSize: 12, color: "#b8b0a3" }}>Palmas — Tocantins</span>
            </div>
          </div>
        </div>

        <div className="socios-grid">
          {socios.map(s => (
            <article className="socio reveal" key={s.name}>
              <div className="socio-photo">
                <img src={s.img} alt={s.name} />
              </div>
              <div className="socio-info">
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)" }}>
                  {s.role.toUpperCase()}
                </div>
                <h3 className="serif" style={{ fontSize: 26, marginTop: 8, color: "var(--paper)", lineHeight: 1.15 }}>
                  {s.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Testimonials ============ */
const TESTIMONIALS = [
  {
    name: "Wanessa Araujo Fonseca",
    role: "CEO · Nitor Representações",
    text: "Excelentes profissionais. Atenciosos, dão soluções para os problemas que surgem. Há muitos anos vêm auxiliando minha empresa.",
  },
  {
    name: "Bárbara Menns",
    role: "CEO · Bárbara Menns Augusto Pereira Ltda",
    text: "Estou muito satisfeita com os serviços da Mastercont. Empresa competente, atenciosa, profissional, atendimento ágil e claro — o que me trouxe segurança na gestão contábil. Recomendo e confio no trabalho!",
  },
  {
    name: "Rodimila Cardoso",
    role: "CEO · Atlanta Academia",
    text: "A melhor contabilidade do estado do Tocantins, super atenciosos e prestação de serviço de qualidade.",
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="testi section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="mono">Depoimentos</span></span>
            <h2 style={{ marginTop: 20 }}>
              Quem trabalha com a gente,<br/>
              <span className="italic-gold">fica com a gente.</span>
            </h2>
          </div>
          <p className="lead">
            Atendemos empresas de diferentes portes e setores em Palmas e em todo o Brasil.
            Leia o que alguns dos nossos clientes dizem sobre trabalhar com a Mastercont.
          </p>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map(t => (
            <figure className="testi-card reveal" key={t.name}>
              <Icon.quote className="testi-q" />
              <div className="testi-stars">
                {Array(5).fill(0).map((_, i) => (
                  <Icon.star key={i} style={{ width: 14, height: 14, color: "var(--gold)" }}/>
                ))}
              </div>
              <blockquote className="testi-text serif">
                “{t.text}”
              </blockquote>
              <figcaption className="testi-meta">
                <div className="testi-name">{t.name}</div>
                <div className="testi-role mono">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
const FAQS = [
  {
    q: "Vocês atendem empresas fora de Palmas?",
    a: "Sim. Temos estrutura 100% digital que permite atender clientes em todo o Brasil com a mesma qualidade. Para clientes em Palmas, o atendimento também pode ser presencial no nosso escritório."
  },
  {
    q: "Como funciona a troca do contador atual para a Mastercont?",
    a: "Você só precisa assinar uma procuração. Nós cuidamos de toda a transição: solicitamos os arquivos ao contador anterior, analisamos a situação fiscal e garantimos que nada fique pendente. Em poucos dias sua contabilidade está rodando com a gente."
  },
  {
    q: "Quanto custa a recuperação tributária?",
    a: "O diagnóstico inicial é gratuito. Só trabalhamos com modelo de êxito — você só paga um percentual sobre o crédito efetivamente recuperado. Se não há crédito, não há cobrança."
  },
  {
    q: "Quais regimes tributários vocês atendem?",
    a: "Atendemos empresas em todos os regimes: Simples Nacional, Lucro Presumido e Lucro Real, além de MEI e Pessoa Física. Fazemos a análise para identificar o regime mais vantajoso no seu caso."
  },
  {
    q: "Vocês ajudam na abertura de empresa?",
    a: "Sim. Cuidamos de todo o processo de abertura: enquadramento, registro na Junta Comercial, inscrições fiscais, licenças e tudo mais. O processo costuma levar de poucos dias a algumas semanas, dependendo da atividade."
  },
  {
    q: "Como é feita a comunicação no dia a dia?",
    a: "Por WhatsApp, e-mail e reuniões online ou presenciais. Você tem contato direto com contadores — não com robôs. Reuniões estratégicas mensais ou trimestrais estão incluídas conforme o plano."
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="faq section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="mono">Perguntas frequentes</span></span>
            <h2 style={{ marginTop: 20 }}>
              Ainda tem<br/>
              <span className="italic-gold">alguma dúvida?</span>
            </h2>
          </div>
          <p className="lead">
            As perguntas que mais recebemos de empresários que estão avaliando trocar de contador
            ou iniciar um novo negócio. Se a sua não está aqui, chama no WhatsApp.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="serif">{f.q}</span>
                <span className="faq-icon">
                  {open === i ? <Icon.minus style={{width:16,height:16}}/> : <Icon.plus style={{width:16,height:16}}/>}
                </span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Contact + Footer ============ */
function Contact() {
  return (
    <section id="contato" className="contact section-pad dark">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="eyebrow on-dark"><span className="mono">Vamos conversar</span></span>
            <h2 style={{ marginTop: 20, fontSize: "clamp(40px, 6vw, 72px)", color: "var(--paper)", lineHeight: 1.02 }}>
              Pronto para uma<br/>
              contabilidade <span className="italic-gold">que trabalha</span><br/>
              pelo seu crescimento?
            </h2>
            <p style={{ fontSize: 17, color: "#b8b0a3", marginTop: 28, maxWidth: "48ch", lineHeight: 1.55 }}>
              Fale com um dos nossos sócios. O primeiro diagnóstico é gratuito — você sai da conversa
              sabendo exatamente o que pode ser feito pela sua empresa.
            </p>

            <div className="contact-ctas">
              <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-gold" style={{ padding: "16px 24px", fontSize: 15 }}>
                <Icon.whatsapp style={{width:18,height:18}}/>
                Falar no WhatsApp
                <Icon.arrow className="arr" style={{width:16,height:16}}/>
              </a>
              <a href="mailto:contato@mastercontpmw.com.br" className="btn btn-ghost on-dark" style={{ padding: "16px 24px", fontSize: 15 }}>
                <Icon.mail style={{width:16,height:16}}/>
                Enviar e-mail
              </a>
            </div>
          </div>

          <aside className="contact-info">
            <InfoRow icon={<Icon.pin style={{width:18,height:18,color:"var(--gold)"}}/>} label="ENDEREÇO">
              Q. 206 Sul, Avenida LO 05, Lote 13<br/>
              Salas 03, 05 e 06 — Plano Diretor Sul<br/>
              Palmas — TO · 77.020-504
            </InfoRow>

            <InfoRow icon={<Icon.phone style={{width:18,height:18,color:"var(--gold)"}}/>} label="TELEFONE / WHATSAPP">
              <a href="tel:+556332150954">(63) 3215-0954</a>
            </InfoRow>

            <InfoRow icon={<Icon.mail style={{width:18,height:18,color:"var(--gold)"}}/>} label="E-MAIL">
              <a href="mailto:contato@mastercontpmw.com.br">contato@mastercontpmw.com.br</a>
            </InfoRow>

            <InfoRow icon={<Icon.instagram style={{width:18,height:18,color:"var(--gold)"}}/>} label="INSTAGRAM">
              <a href="https://www.instagram.com/mastercontpmw" target="_blank" rel="noopener">
                @mastercontpmw
              </a>
            </InfoRow>

            <div className="contact-hours">
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8f887c" }}>
                ATENDIMENTO
              </div>
              <div style={{ marginTop: 6, color: "#d5cfc3", fontSize: 14 }}>
                Segunda a Sexta · 08h às 18h
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>
      <div>
        <div className="mono info-lbl">{label}</div>
        <div className="info-val">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MasterMark/>
              <span className="serif" style={{ fontSize: 22, color: "var(--paper)" }}>Mastercont</span>
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: "#8f887c", maxWidth: "34ch", lineHeight: 1.55 }}>
              Contabilidade consultiva que transforma números em decisões estratégicas.
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <div className="mono footer-label">NAVEGAÇÃO</div>
              <ul>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#recuperacao">Recuperação tributária</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="mono footer-label">CONTATO</div>
              <ul>
                <li><a href="tel:+556332150954">(63) 3215-0954</a></li>
                <li><a href={WA_LINK} target="_blank" rel="noopener">WhatsApp</a></li>
                <li><a href="mailto:contato@mastercontpmw.com.br">contato@mastercontpmw.com.br</a></li>
                <li><a href="https://www.instagram.com/mastercontpmw" target="_blank" rel="noopener">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-credentials">
            <span className="mono">CRC/TO 000860/O</span>
            <span className="dot">·</span>
            <span className="mono">CNPJ 47.321.741/0001-38</span>
          </div>
          <div className="footer-copy mono">
            © {new Date().getFullYear()} Mastercont Contadores Associados
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { About, Testimonials, FAQ, Contact, Footer });
