import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Terminos_EN() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto px-6 py-32">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          Terms and Conditions
        </h1>
        <div className="text-text-secondary leading-relaxed space-y-4">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of Nevox's Website, located at nevox.pro.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Nevox if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <p>
            For more information, please contact us at hola@nevox.pro.
          </p>
        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}
