"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";

type SectionWrapperProps = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
  containerClassName?: string;
  size?: "default" | "large" | "hero";
};

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className = "", containerClassName = "", children, size = "default", ...props }, ref) => {
    const pyClass =
      size === "hero" ? "pt-32 pb-24 md:pt-40 md:pb-32" : size === "large" ? "py-32 md:py-40" : "py-24 md:py-32";

    return (
      <motion.section
        ref={ref}
        className={`${pyClass} ${className}`}
        initial={{ opacity: 0, y: 64, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        {...props}
      >
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 w-full ${containerClassName}`}>
          {children}
        </div>
      </motion.section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";
