"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/office-dark.webp')" }}
      />
      <div className="absolute inset-0" style={{ background: "var(--overlay-heavy)" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.06)] via-transparent to-[rgba(201,168,76,0.03)]" />

      <div className="absolute top-8 right-8 w-48 h-48 opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="160" height="160" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
          <rect x="40" y="40" width="120" height="120" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
          <rect x="60" y="60" width="80" height="80" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        <AnimatedSection>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-gold block mx-auto mb-8"
          />
          <span
            className="text-xs tracking-[0.4em] uppercase mb-6 block"
            style={{ color: "var(--text-accent)" }}
          >
            Próximo passo
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Pronto para elevar o padrão
            <br />
            <span className="font-semibold">da sua contabilidade?</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Agende uma consultoria gratuita e descubra como podemos otimizar a
            gestão fiscal e tributária da sua empresa. Sem compromisso, com total
            confidencialidade.
          </p>
          <motion.a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20com%20a%20MASTERCONT."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-12 py-4 font-semibold tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.35)]"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--bg-primary)" }}
          >
            Agendar Consultoria Gratuita
          </motion.a>
          <p className="mt-6 text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>
            Resposta em até 2 horas úteis
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
