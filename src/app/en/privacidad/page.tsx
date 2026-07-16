import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacidad_EN() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto px-6 py-32">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          Privacy Policy
        </h1>
        <div className="text-text-secondary leading-relaxed space-y-4">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p>
            At Nevox, accessible from nevox.pro, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Nevox and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at hola@nevox.pro.
          </p>
        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}
