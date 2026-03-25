"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="0" y1="0" x2="200" y2="200" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="40" y1="0" x2="200" y2="160" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="200" y2="120" stroke="#c9a84c" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.03] rotate-180">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="0" y1="0" x2="200" y2="200" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="40" y1="0" x2="200" y2="160" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="80" y1="0" x2="200" y2="120" stroke="#c9a84c" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <span
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em]"
            style={{ color: "var(--color-gold)" }}
          >
            MASTERCONT
          </span>
          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12" style={{ background: "rgba(201,168,76,0.4)" }} />
            <span
              className="text-xs sm:text-sm tracking-[0.4em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Contadores Associados
            </span>
            <span className="h-[1px] w-12" style={{ background: "rgba(201,168,76,0.4)" }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--text-accent)" }}
        >
          Escritório de Contabilidade em Palmas&nbsp;–&nbsp;TO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Contabilidade que transforma
          <br />
          <span className="font-semibold">números em vantagem competitiva</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Planejamento tributário, gestão fiscal estratégica e consultoria
          empresarial de alto nível em Palmas e todo o Tocantins. Para empresas
          que buscam crescimento sólido e sustentável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto px-10 py-4 font-semibold tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--bg-primary)" }}
          >
            Agende uma Consulta
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto px-10 py-4 border font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center p-1.5"
          style={{ border: "1px solid var(--border-subtle)" }}
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
