"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fade-up on scroll — replaces the wrapper div, className passes through. */
export function AnimateIn({
  children, delay = 0, y = 28, duration = 0.65, className, style,
}: {
  children: ReactNode; delay?: number; y?: number; duration?: number;
  className?: string; style?: CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref} className={className} style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — children with variants={fadeUp} animate in sequence. */
export function StaggerIn({
  children, className, style,
}: {
  children: ReactNode; className?: string; style?: CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref} className={className} style={style}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.div>
  );
}

/** Variants object — use on motion.article / motion.figure / motion.div children of StaggerIn. */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
