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
          className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-border text-text-primary hover:bg-white/5 hover:border-border-hover transition-all active:scale-[0.98] ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }

    // Primary (Pill with trailing icon)
    return (
      <button
        ref={ref}
        className={`group inline-flex items-center justify-between rounded-full bg-accent text-bg px-1.5 py-1.5 pl-6 text-sm font-bold tracking-wide hover:bg-accent-hover transition-all active:scale-[0.98] ${className}`}
        {...props}
      >
        <span className="mr-4">{children}</span>
        {icon && (
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors">
            <ArrowRight weight="bold" className="w-4 h-4" />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
