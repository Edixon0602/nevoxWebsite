import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  innerClassName?: string;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", innerClassName = "", children, ...props }, ref) => {
    return (
      <div ref={ref} className={`double-bezel ${className}`} {...props}>
        <div className={`double-bezel-inner h-full p-8 ${innerClassName}`}>
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";
