import * as React from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "link";
  children: React.ReactNode;
  icon?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, icon = true, ...props }, ref) => {
    
    if (variant === "link") {
      return (
        <button
          ref={ref}
          className={`group inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors ${className}`}
          {...props}
        >
          {children}
          {icon && (
            <ArrowRight
              weight="bold"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            />
          )}
        </button>
      );
    }

    if (variant === "ghost") {
      return (
        <button
          ref={ref}
          className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border border-white/10 bg-white/[0.03] text-text-primary hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-[0.98] ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }

    // Primary
    return (
      <button
        ref={ref}
        className={`group inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent text-bg px-6 py-3 text-sm font-semibold tracking-tight hover:bg-accent-hover transition-all active:scale-[0.98] shadow-sm ${className}`}
        {...props}
      >
        <span>{children}</span>
        {icon && (
          <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
