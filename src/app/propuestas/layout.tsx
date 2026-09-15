import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Propuestas | Nevox",
  description: "Propuestas técnicas y comerciales de Nevox.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PropuestasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        {children}
      </div>
      <Footer />
    </main>
  );
}
