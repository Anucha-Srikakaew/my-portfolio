"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionHeader({ num, title }: { num: string; title: string }) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="section-header">
      <span className="section-num">{num}</span>
      <span className="section-title">{title}</span>
      <span className="section-line" aria-hidden="true">
        <motion.span
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
        />
      </span>
    </div>
  );
}
