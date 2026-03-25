"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? `color-mix(in srgb, var(--bg-primary) 95%, transparent)` : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="relative z-50">
          <span
            className="text-xl md:text-2xl font-bold tracking-[0.15em]"
            style={{ color: "var(--color-gold)" }}
          >
            MASTERCONT
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider uppercase transition-colors duration-300 hover:!text-[var(--color-gold)]"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggle}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[var(--color-gold)]"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--text-muted)",
            }}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#contato"
            className="ml-2 px-6 py-2.5 text-sm font-semibold tracking-wider uppercase transition-colors duration-300"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--bg-primary)",
            }}
          >
            Fale Conosco
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggle}
            className="relative z-50 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--text-muted)",
            }}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className="w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: "var(--color-gold)",
                transform: mobileOpen ? "rotate(45deg) translateY(5px)" : "none",
              }}
            />
            <span
              className="w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: "var(--color-gold)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: "var(--color-gold)",
                transform: mobileOpen ? "rotate(-45deg) translateY(-5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center"
            style={{ background: "color-mix(in srgb, var(--bg-primary) 98%, transparent)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-lg tracking-[0.2em] uppercase transition-colors hover:!text-[var(--color-gold)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-4 px-8 py-3 font-semibold tracking-wider uppercase"
                style={{ backgroundColor: "var(--color-gold)", color: "var(--bg-primary)" }}
              >
                Fale Conosco
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
