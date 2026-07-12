"use client";

import { useEffect } from "react";

export const CalEmbed = () => {
  useEffect(() => {
    if ((window as any).Cal) return;

    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          let script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    // Asignamos también en minúscula por seguridad por si data-attributes lo buscan así
    (window as any).cal = Cal;
    
    Cal("init", { origin: "https://cal.com" });
    Cal("ui", {
      styles: { branding: { brandColor: "#00e5a0" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, []);

  return null;
};
