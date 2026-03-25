"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "M+", label: "em impostos economizados para clientes" },
  { value: 100, suffix: "%", label: "de conformidade fiscal garantida" },
  { value: 24, suffix: "h", label: "tempo de resposta máximo" },
  { value: 15, suffix: "+", label: "profissionais especializados" },
];

export default function Numbers() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/city-skyline.webp')" }}
      />
      <div className="absolute inset-0" style={{ background: "var(--overlay-heavy)" }} />
      <div className="absolute inset-0 animate-shimmer" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs tracking-[0.4em] uppercase mb-4 block"
            style={{ color: "var(--text-accent)" }}
          >
            Em números
          </span>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Resultados que <span className="font-semibold">falam por si</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              <motion.div
                whileInView={{ scale: [0.5, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
              >
                <span
                  className="text-3xl md:text-4xl lg:text-5xl font-bold block mb-2"
                  style={{ color: "var(--color-gold)" }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
              </motion.div>
              <span className="text-xs md:text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold)30, transparent)" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
