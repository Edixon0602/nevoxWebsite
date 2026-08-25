import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Nevox",
  description: "Términos y condiciones de uso de los servicios de Nevox.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Términos y Condiciones
          </h1>
          <p className="text-text-secondary mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web de Nevox y nuestros servicios (incluyendo desarrollo de software, automatización de procesos e integraciones de IA), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder a los servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
              <p>
                Nevox ofrece servicios de desarrollo de software a medida, aplicaciones web, plataformas digitales, automatización de procesos de negocio (RPA) e integraciones de Inteligencia Artificial. Los entregables exactos, plazos y costos de cada proyecto se definen en un contrato de servicios o propuesta técnica independiente firmada por ambas partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
              <p className="mb-4">
                El diseño de sistemas, código fuente, componentes de automatización y arquitecturas de IA desarrolladas por Nevox son propiedad intelectual de la agencia hasta que se complete el pago total del proyecto, momento en el cual los derechos de uso o propiedad se transfieren al cliente según lo estipulado en su contrato específico.
              </p>
              <p>
                Todo el contenido visual, código fuente original y branding propio de Nevox en este sitio web está protegido por derechos de autor y no puede ser reproducido sin autorización.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Confidencialidad</h2>
              <p>
                Ambas partes acuerdan mantener en estricta confidencialidad cualquier información comercial, técnica o financiera compartida durante la prestación de los servicios. Nevox no compartirá tus datos operativos o secretos comerciales con terceros ni los utilizará para beneficiar a competidores directos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitación de Responsabilidad</h2>
              <p>
                Nevox implementa arquitecturas de software y soluciones tecnológicas basadas en las mejores prácticas de la industria. Sin embargo, no podemos garantizar resultados comerciales específicos dependientes de factores externos. Nevox no será responsable de daños indirectos, incidentales o consecuentes derivados del uso de nuestros sistemas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Modificaciones de los Términos</h2>
              <p>
                Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Si la revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material se determinará a nuestro exclusivo criterio.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
