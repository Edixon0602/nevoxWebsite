export type ModalidadPago = "2-pagos" | "3-pagos";

export type EstadoPropuesta = "borrador" | "enviada" | "aceptada";

export interface BloqueAlcance {
  titulo: string;
  descripcion: string;
}

export interface Entregable {
  titulo: string;
  descripcion: string;
}

export interface Fase {
  periodo: string;
  titulo: string;
  detalle: string;
}

export interface Aceptacion {
  aceptada: boolean;
  modalidad: ModalidadPago;
  nombre: string;
  email: string;
  nota: string;
  fecha: string;
}

export interface Propuesta {
  slug: string;
  titulo: string;
  proyecto: string;
  cliente: string;
  resumen: string;
  alcance: BloqueAlcance[];
  entregables: Entregable[];
  stack: string[];
  tiempo: string;
  inversion: number;
  moneda: string;
  costoServidor?: {
    monto: number;
    periodicidad?: string;
    descripcion?: string;
  };
  fases: Fase[];
  condiciones: string[];
  estado: EstadoPropuesta;
  creada: string;
  validaHasta?: string;
  aceptacion?: Aceptacion | null;
  passwordHash?: string;
}

export interface Cuota {
  numero: number;
  etiqueta: string;
  monto: number;
  porcentaje: number;
}

export const MODALIDADES: Record<
  ModalidadPago,
  { id: ModalidadPago; nombre: string; descripcion: string; hitos: string[] }
> = {
  "2-pagos": {
    id: "2-pagos",
    nombre: "2 pagos",
    descripcion: "50% al iniciar y 50% contra entrega.",
    hitos: ["Inicio del proyecto", "Contra entrega final"],
  },
  "3-pagos": {
    id: "3-pagos",
    nombre: "3 pagos",
    descripcion: "33% al iniciar, 33% a la mitad y 33% contra entrega.",
    hitos: [
      "Inicio del proyecto",
      "A mitad del proyecto",
      "Contra entrega final",
    ],
  },
};

export function calcularCuotas(
  inversion: number,
  modalidad: ModalidadPago
): Cuota[] {
  const numeroPagos = modalidad === "3-pagos" ? 3 : 2;
  const totalCentavos = Math.round(inversion * 100);
  const base = Math.floor(totalCentavos / numeroPagos);
  const resto = totalCentavos - base * numeroPagos;
  const hitos = MODALIDADES[modalidad].hitos;

  return Array.from({ length: numeroPagos }, (_, i) => {
    const centavos = base + (i < resto ? 1 : 0);
    return {
      numero: i + 1,
      etiqueta: hitos[i],
      monto: centavos / 100,
      porcentaje: Math.round((centavos / totalCentavos) * 100),
    };
  });
}

export function formatearMonto(monto: number, moneda = "USD"): string {
  const valor = monto.toLocaleString("en-US", {
    minimumFractionDigits: monto % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `${moneda === "USD" ? "$" : ""}${valor}${
    moneda === "USD" ? "" : ` ${moneda}`
  }`;
}

export function formatearFecha(fecha?: string): string {
  if (!fecha) return "";
  const date = new Date(fecha);
  if (Number.isNaN(date.getTime())) return fecha;
  return date.toLocaleDateString("es-VE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function slugify(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function esModalidadValida(valor: unknown): valor is ModalidadPago {
  return valor === "2-pagos" || valor === "3-pagos";
}
