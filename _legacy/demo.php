<!doctype html>
<html lang="es">

<head>
  <?php include 'inc/partials/head.php'; ?>
  <title>Nevox · Automatización Inteligente</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css">
  <style>
    /* intl-tel-input overrides */
    .iti {
      width: 100%;
    }

    .iti__flag-container {
      border-radius: 0.5rem 0 0 0.5rem;
    }

    .iti__selected-flag {
      background: transparent;
      border-right: 1.5px solid var(--outline-color);
      padding: 0 1rem;
    }

    .iti__country-list {
      background: var(--surface-color);
      border: 1px solid var(--outline-color);
      border-radius: 0.5rem;
      box-shadow: var(--shadow-soft);
      color: var(--text-primary);
    }

    .iti__country.iti__highlight {
      background-color: var(--surface-low);
    }

    .iti__country-name {
      color: var(--text-primary);
    }

    .iti__dial-code {
      color: var(--text-secondary);
    }

    .campaign-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
      padding: 10rem 0 8rem;
    }

    .hero-content {
      text-align: left;
    }

    .hero-content h1 {
      font-size: 3rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }

    .hero-image-container {
      position: relative;
    }

    .hero-image-container img {
      width: 100%;
      border-radius: 2rem;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
      transition: var(--transition-smooth);
    }

    .hero-image-container img:hover {
      transform: translateY(-10px) scale(1.02);
    }

    .hero-form {
      background: var(--surface-color);
      padding: 2.5rem;
      border-radius: 1.5rem;
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--outline-color);
      max-width: 450px;
    }

    .hero-form h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .hero-form p {
      font-size: 0.95rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group input {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1.5px solid var(--outline-color);
      background: var(--bg-color);
      font-family: inherit;
      transition: var(--transition-smooth);
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(0, 74, 198, 0.1);
    }

    .vision-section {
      background: #1a1c1c;
      color: white;
      text-align: center;
      padding: 8rem 0;
      position: relative;
      overflow: hidden;
    }

    .vision-section h2 {
      color: white;
      font-size: 3rem;
      max-width: 900px;
      margin: 0 auto 2rem;
      position: relative;
      z-index: 2;
    }

    .vision-section p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.25rem;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .vision-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(0, 74, 198, 0.2) 0%, rgba(0, 74, 198, 0) 70%);
      pointer-events: none;
      z-index: 1;
    }

    .testimonial-card {
      background: var(--surface-low);
      padding: 4rem;
      border-radius: 2rem;
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      text-align: center;
      border: 1px solid var(--outline-color);
    }

    .testimonial-quote {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.6;
      color: var(--text-primary);
      max-width: 800px;
    }

    .testimonial-author {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .testimonial-author span:first-child {
      font-weight: 800;
      font-size: 1.1rem;
    }

    .testimonial-author span:last-child {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    @media (max-width: 1024px) {
      .campaign-hero {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
      }

      .hero-content {
        text-align: center;
      }

      .hero-form {
        margin: 0 auto;
      }
    }

    @media (max-width: 768px) {
      .campaign-hero {
        padding: 2rem 0 8rem;
      }

      .hero-content h1 {
        font-size: 2.75rem;
      }

      .vision-section h2 {
        font-size: 2.25rem;
      }
    }
  </style>
</head>

<body>
  <?php include 'inc/partials/header.php'; ?>

  <main>
    <section class="container">
      <div class="campaign-hero hero">
        <div class="hero-content">
          <span class="hero-badge">Nevox · AI Agency</span>
          <h1>Deja de perder ventas por falta de respuesta. <span>Automatiza tus canales de venta 24/7 con
              IA.</span>
          </h1>
          <p>
            Hacemos que tu negocio responda a cada mensaje al instante. Usamos inteligencia artificial para atender a
            tus clientes por todos tus canales de ventas las 24 horas, para que tú solo te encargues de cerrar la
            venta.
          </p>
        </div>

        <div class="hero-form">
          <h2>Descubre qué puedes automatizar</h2>
          <p>Te ayudo a encontrar los procesos que puedes automatizar y te propongo soluciones concretas.</p>
          <form id="requestDemoForm" method="post" action="inc/ProcessForm">
            <input type="hidden" name="action" value="request-demo">
            <div class="form-group">
              <input type="text" placeholder="Nombre" required name="name">
            </div>
            <div class="form-group">
              <input type="email" placeholder="Correo electrónico" required name="email">
            </div>
            <div class="form-group">
              <input type="tel" placeholder="Teléfono" required name="tel" id="phone">
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Solicitar mi Demo Gratuita</button>
          </form>
          <p style="font-size: 0.75rem; margin-top: 1.5rem; opacity: 0.6; text-align: center;">
            Al enviar, aceptas nuestra <a href="privacy-policy">Política de Privacidad y Datos</a>.
          </p>
        </div>
      </div>
    </section>

    <section class="vision-section">
      <div class="vision-glow"></div>
      <div class="container">
        <h2>Inteligencia que piensa contigo, no por ti.</h2>
        <p>Nevox es tu aliado digital: detecta oportunidades y se encarga de lo repetitivo. La diferencia entre una
          herramienta y un socio.</p>

        <div class="testimonial-card">
          <div class="testimonial-quote">
            "La verdad, pensé que iba a ser un lío integrar automatización en el negocio. Pero Nevox nos resolvió los
            procesos más tediosos sin complicarnos la vida. Hoy respondemos consultas al instante y no se nos escapa
            ningún cliente por falta de respuesta."
          </div>
          <div class="testimonial-author">
            <span style="color: var(--primary-color)">Maria Gonzalez</span>
            <span>Dueña, Clínica Dental Montalban</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <?php include 'inc/partials/footer.php'; ?>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const phoneInput = document.querySelector("#phone");
      const form = document.querySelector("#requestDemoForm");

      const iti = window.intlTelInput(phoneInput, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
          fetch("https://get.geojs.io/v1/ip/country.json")
            .then(res => res.json())
            .then(data => success(data.country))
            .catch(() => success("es")); // Default to Spain si falla el lookup
        },
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",
      });

      form.addEventListener("submit", function (e) {
        // Actualizar el valor del input con el código de área antes de enviar el form
        if (phoneInput.value.trim() !== "") {
          phoneInput.value = iti.getNumber();
        }
      });
    });
  </script>

</body>

</html>