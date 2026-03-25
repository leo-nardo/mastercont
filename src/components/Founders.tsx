"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Founders() {
  return (
    <section id="sobre" className="relative">
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 bg-cover bg-top bg-fixed bg-charcoal-lighter"
          style={{ backgroundImage: "url('/images/founders.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-gold block mb-4"
              />
              <span className="text-xs tracking-[0.4em] text-gold uppercase mb-4 block">
                Liderança
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3">
                Sócios <span className="font-semibold">Fundadores</span>
              </h2>
              <p className="text-silver-light text-base md:text-lg max-w-xl leading-relaxed">
                Três décadas de experiência combinada em contabilidade
                estratégica, unidas por uma visão: elevar o padrão da gestão
                contábil empresarial no Brasil.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="py-20 md:py-28" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <span
                className="text-xs tracking-[0.4em] uppercase mb-6 block"
                style={{ color: "var(--text-accent)" }}
              >
                Nossa Filosofia
              </span>
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Excelência como
                <br />
                <span className="font-semibold">padrão mínimo</span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-gold mb-6"
              />
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                Na MASTERCONT, acreditamos que a contabilidade vai muito além de
                cumprir obrigações. É sobre transformar dados em inteligência,
                números em estratégia, e compliance em vantagem competitiva.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Cada cliente recebe atenção personalizada de uma equipe sênior,
                com análises proativas que antecipam cenários e protegem o
                patrimônio da sua empresa.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Empresas Atendidas" },
                  { number: "15+", label: "Anos de Mercado" },
                  { number: "98%", label: "Retenção de Clientes" },
                  { number: "3", label: "Sócios Especialistas" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 border text-center transition-colors duration-300"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <span
                      className="text-2xl md:text-3xl font-bold block mb-1"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {stat.number}
                    </span>
                    <span
                      className="text-xs tracking-wider uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
