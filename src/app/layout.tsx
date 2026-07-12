import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import Script from "next/script";
import { CalEmbed } from "@/components/ui/CalEmbed";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nevox | Agencia Digital & IA",
  description: "Haz que tu negocio crezca mientras duermes con automatización, IA y marketing digital de alto nivel.",
  openGraph: {
    title: "Nevox | Agencia Digital & IA",
    description: "Marketing digital, automatización con IA e inteligencia de negocios. Todo integrado. Sin fricciones.",
    url: "https://nevox.pro",
    siteName: "Nevox",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg text-text-primary selection:bg-accent/30">
        <CalEmbed />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PR3K8WBG');`
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G6F5EYJX8T"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G6F5EYJX8T');`
          }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2456241048139092');
            fbq('track', 'PageView');`
          }}
        />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PR3K8WBG"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2456241048139092&ev=PageView&noscript=1" alt="" />
        </noscript>
        {children}
      </body>
    </html>
  );
}
