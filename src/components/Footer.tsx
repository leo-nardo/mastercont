"use client";

export default function Footer() {
  return (
    <footer id="contato" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <div className="lg:col-span-1">
            <span
              className="text-2xl font-bold tracking-[0.15em] block mb-4"
              style={{ color: "var(--color-gold)" }}
            >
              MASTERCONT
            </span>
            <span
              className="text-xs tracking-[0.3em] uppercase block mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Contadores Associados
            </span>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Contabilidade de alto padrão para empresas que buscam excelência
              em gestão fiscal e crescimento sustentável.
            </p>
          </div>

          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Serviços
            </h3>
            <ul className="space-y-3">
              {[
                "Gestão Fiscal",
                "Planejamento Tributário",
                "Consultoria Empresarial",
                "Departamento Pessoal",
                "BPO Financeiro",
                "Abertura de Empresas",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-sm transition-colors duration-300 hover:!text-[var(--color-gold)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Contato
            </h3>
            <ul className="space-y-4 text-sm" style={{ color: "var(--text-muted)" }}>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  Av. Paulista, 1000 - Sala 1201
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" style={{ color: "var(--color-gold)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>(11) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" style={{ color: "var(--color-gold)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contato@mastercont.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Horário
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li className="flex justify-between">
                <span>Seg - Sex</span>
                <span style={{ color: "var(--text-primary)" }}>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span style={{ color: "var(--text-primary)" }}>09:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border flex items-center justify-center transition-all duration-300 hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border flex items-center justify-center transition-all duration-300 hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-subtle)" }} className="py-6">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} MASTERCONT - Contadores Associados.
            Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
            CRC/SP 0000000 | CNPJ 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
