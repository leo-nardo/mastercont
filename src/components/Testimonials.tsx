"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO, Almeida Construções",
    text: "A MASTERCONT transformou completamente a gestão financeira da nossa empresa. Em dois anos, reduzimos em 30% nossa carga tributária de forma totalmente legal. Profissionais excepcionais.",
    initials: "RA",
  },
  {
    name: "Fernanda Torres",
    role: "Diretora, FT Importações",
    text: "A equipe da MASTERCONT não é apenas um escritório contábil — são verdadeiros parceiros estratégicos. A proatividade e atenção aos detalhes são incomparáveis no mercado.",
    initials: "FT",
  },
  {
    name: "Carlos Eduardo Silva",
    role: "Sócio-Fundador, CES Tecnologia",
    text: "Desde que migramos para a MASTERCONT, temos a tranquilidade de saber que nossa contabilidade está nas mãos de especialistas. O atendimento personalizado faz toda a diferença.",
    initials: "CS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32 relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--color-gold)20, transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <span
            className="text-xs tracking-[0.4em] uppercase mb-4 block"
            style={{ color: "var(--text-accent)" }}
          >
            Depoimentos
          </span>
          <h2
            className="text-3xl md:text-4xl font-light mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            O que nossos <span className="font-semibold">clientes dizem</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </AnimatedSection>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border transition-all duration-300 hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)] group"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            aria-label="Depoimento anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border transition-all duration-300 hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)] group"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            aria-label="Próximo depoimento"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="min-h-[320px] md:min-h-[280px] px-12 md:px-16 flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center w-full"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-lg"
                  style={{ background: "var(--bg-primary)", color: "var(--color-gold)" }}
                >
                  {testimonials[current].initials}
                </div>
                <p
                  className="text-lg md:text-xl leading-relaxed mb-8 italic max-w-2xl mx-auto"
                  style={{ color: "var(--text-secondary)" }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div>
                  <span
                    className="font-semibold block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {testimonials[current].name}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-accent)" }}>
                    {testimonials[current].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2.5 rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "2.5rem" : "0.625rem",
                  background: i === current ? "var(--color-gold)" : "var(--border-subtle)",
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
