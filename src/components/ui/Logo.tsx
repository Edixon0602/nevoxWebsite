import * as React from "react";
import Image from "next/image";

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-12 w-12 shrink-0">
        <Image 
          src="/logo-final.png" 
          alt="Nevox Logo"
          fill
          className="object-contain scale-[1.35]"
          priority
        />
      </div>
      <span className="font-display font-bold text-2xl tracking-tight text-text-primary">
        Nevox
      </span>
    </div>
  );
};
