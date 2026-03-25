"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Gestão Fiscal",
    description:
      "Controle rigoroso das obrigações fiscais, garantindo conformidade total e otimização da carga tributária da sua empresa.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M13 7l5 5m0 0l-5 5m5-5H6M3 12a9 9 0 1118 0 9 9 0 01-18 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Planejamento Tributário",
    description:
      "Estratégias legais e inteligentes para redução de impostos, maximizando o lucro sem riscos fiscais.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Consultoria Empresarial",
    description:
      "Análises financeiras profundas e orientação estratégica para decisões empresariais assertivas e crescimento sustentável.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Departamento Pessoal",
    description:
      "Gestão completa de folha de pagamento, encargos trabalhistas e conformidade com a legislação vigente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "BPO Financeiro",
    description:
      "Terceirização inteligente do financeiro, com controle de contas a pagar, receber e fluxo de caixa em tempo real.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Abertura de Empresas",
    description:
      "Assessoria completa na constituição societária, escolha do regime tributário ideal e legalização do seu negócio.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 md:py-32 relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--color-gold)20, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span
            className="text-xs tracking-[0.4em] uppercase mb-4 block"
            style={{ color: "var(--text-accent)" }}
          >
            O que fazemos
          </span>
          <h2
            className="text-3xl md:text-4xl font-light mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Serviços <span className="font-semibold">Especializados</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group p-8 md:p-10 border transition-all duration-500 relative overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="relative z-10">
                  <div className="mb-6" style={{ color: "var(--text-accent)" }}>
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                      {service.icon}
                    </motion.div>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3 tracking-wide"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
