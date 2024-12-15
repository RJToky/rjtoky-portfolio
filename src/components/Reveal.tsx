import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

interface RevealProps {
  children?: React.ReactNode;
  width?: "fit-content" | "100%";
  duration?: number;
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  width = "fit-content",
  duration = 0.5,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ width }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
