"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 }};
      case "down": return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 }};
      case "left": return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 }};
      case "right": return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 }};
      default: return { hidden: { opacity: 0 }, visible: { opacity: 1 }};
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
