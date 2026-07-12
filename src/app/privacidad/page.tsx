import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nevox",
  description: "Política de privacidad y tratamiento de datos de Nevox.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-text-secondary mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Información que recopilamos</h2>
              <p className="mb-4">
                En Nevox, recopilamos información para brindar mejores servicios tecnológicos y de automatización a todos nuestros clientes. La información que recogemos incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Información de contacto (nombre, correo electrónico, teléfono) proporcionada a través de nuestros formularios o enlaces de Cal.com.</li>
                <li>Datos analíticos de navegación (direcciones IP, comportamiento en el sitio) mediante herramientas como Google Analytics y Meta Pixel.</li>
                <li>Información operativa de tu negocio cuando decides compartirla durante nuestras sesiones estratégicas de descubrimiento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la información</h2>
              <p className="mb-4">
                Utilizamos los datos recopilados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveer, operar y mantener nuestros servicios de agencia.</li>
                <li>Mejorar y personalizar la experiencia del usuario en nuestro sitio web.</li>
                <li>Comprender y analizar cómo utilizas nuestros servicios para desarrollar nuevos productos, servicios o características.</li>
                <li>Comunicarnos contigo, ya sea directamente o a través de nuestros partners, para servicio al cliente, actualizaciones y marketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Inteligencia Artificial y Datos</h2>
              <p>
                Al utilizar nuestros servicios de automatización con IA, es posible que procesemos datos de tu negocio. Garantizamos que estos datos no se utilizan para entrenar modelos públicos de lenguaje sin tu consentimiento explícito. Toda la infraestructura de IA implementada se diseña bajo estrictos estándares de aislamiento de datos corporativos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies y Tecnologías de Rastreo</h2>
              <p>
                Utilizamos cookies y tecnologías de rastreo similares para observar la actividad en nuestro sitio y retener cierta información. Puedes configurar tu navegador para que rechace todas las cookies o para que te avise cuándo se envía una cookie. Sin embargo, si no aceptas las cookies, es posible que algunas funciones estén limitadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Seguridad de los datos</h2>
              <p>
                La seguridad de tus datos es prioritaria para nosotros. Sin embargo, recuerda que ningún método de transmisión a través de Internet o de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar los mejores medios comerciales para proteger tu información personal, no podemos garantizar su seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contacto</h2>
              <p>
                Si tienes alguna pregunta o reclamo sobre esta Política de Privacidad, puedes contactarnos enviando un correo electrónico directamente a través de nuestros canales oficiales.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
