import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

export const Problem = () => {
  return (
    <SectionWrapper size="large">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Col: Typographic statement */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary text-balance leading-[1.1]">
            Estás perdiendo horas en tareas que una máquina debería hacer.
          </h2>
        </div>

        {/* Right Col: Pain points expansion */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8 pt-2 md:pt-4">
          <p className="text-text-secondary text-lg leading-relaxed">
            Tu equipo está saturado respondiendo los mismos mensajes, actualizando hojas de cálculo manualmente y gestionando campañas que no convierten. 
          </p>
          <div className="flex flex-col gap-6 pl-6 border-l-2 border-accent/20">
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-semibold text-text-primary">El techo de cristal</span>
              <span className="text-sm text-text-secondary">No puedes escalar las ventas si la operación colapsa al duplicar el volumen.</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-semibold text-text-primary">Atención intermitente</span>
              <span className="text-sm text-text-secondary">Clientes potenciales enfriándose porque nadie los atiende a las 2 AM.</span>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
