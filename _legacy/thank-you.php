<!doctype html>
<html lang="es">

<head>
  <?php include 'inc/partials/head.php'; ?>
  <title>Nevox · ¡Solicitud Recibida!</title>
  <meta name="description" content="Tu solicitud de demo ha sido recibida. Pronto nos pondremos en contacto contigo." />
  <style>
    .thankyou-section {
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }

    /* Ambient glow backgrounds */
    .thankyou-section::before,
    .thankyou-section::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      filter: blur(100px);
      opacity: 0.15;
    }

    .thankyou-section::before {
      width: 500px;
      height: 500px;
      background: var(--primary-color);
      top: -100px;
      right: -100px;
      animation: float-glow 8s ease-in-out infinite;
    }

    .thankyou-section::after {
      width: 400px;
      height: 400px;
      background: var(--secondary-color);
      bottom: -80px;
      left: -80px;
      animation: float-glow 8s ease-in-out infinite reverse;
    }

    @keyframes float-glow {

      0%,
      100% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(30px, -30px);
      }
    }

    .thankyou-card {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 640px;
      width: 100%;
      background: var(--surface-color);
      padding: 4.5rem 3.5rem;
      border-radius: 2rem;
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--outline-color);
      animation: card-enter 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    @keyframes card-enter {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.96);
      }

      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    /* Animated checkmark */
    .success-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 2.5rem;
      position: relative;
      animation: icon-pop 0.6s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    }

    @keyframes icon-pop {
      from {
        opacity: 0;
        transform: scale(0.3);
      }

      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .success-icon-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--primary-gradient);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 12px 35px -8px rgba(59, 130, 246, 0.4);
    }

    .success-icon-circle i {
      color: white;
      font-size: 2.8rem;
    }

    /* Pulsing ring around the icon */
    .success-icon::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
      transform: translate(-50%, -50%);
      animation: ring-pulse 2s ease-out 0.8s infinite;
      opacity: 0;
    }

    @keyframes ring-pulse {
      0% {
        width: 100px;
        height: 100px;
        opacity: 0.5;
      }

      100% {
        width: 160px;
        height: 160px;
        opacity: 0;
      }
    }

    .thankyou-card h1 {
      font-size: 2.5rem;
      line-height: 1.15;
      margin-bottom: 1.25rem;
      animation: text-up 0.6s 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .thankyou-card h1 span {
      color: var(--primary-color);
    }

    .thankyou-card>p {
      color: var(--text-secondary);
      font-size: 1.15rem;
      line-height: 1.7;
      margin-bottom: 2.5rem;
      animation: text-up 0.6s 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    @keyframes text-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Steps / what happens next */
    .next-steps {
      text-align: left;
      background: var(--surface-low);
      border-radius: 1.25rem;
      padding: 2rem 2.25rem;
      margin-bottom: 2.5rem;
      animation: text-up 0.6s 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .next-steps h3 {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--primary-color);
      margin-bottom: 1.25rem;
      font-weight: 700;
    }

    .step-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.75rem 0;
    }

    .step-item+.step-item {
      border-top: 1px solid var(--outline-color);
    }

    .step-number {
      width: 32px;
      height: 32px;
      min-width: 32px;
      border-radius: 50%;
      background: var(--primary-gradient);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.8rem;
      font-family: "Manrope", sans-serif;
    }

    .step-content p {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .step-content strong {
      color: var(--text-primary);
    }

    /* Buttons */
    .thankyou-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      animation: text-up 0.6s 0.95s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    .btn-whatsapp-ty {
      background: #25d366;
      color: white;
      box-shadow: 0 10px 20px -5px rgba(37, 211, 102, 0.3);
    }

    .btn-whatsapp-ty:hover {
      background: #20ba5a;
      transform: translateY(-2px);
      box-shadow: 0 15px 30px -5px rgba(37, 211, 102, 0.4);
    }

    /* Confetti particles */
    .confetti-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
    }

    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      top: -10px;
      opacity: 0;
      animation: confetti-fall linear forwards;
    }

    @keyframes confetti-fall {
      0% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }

      100% {
        opacity: 0;
        transform: translateY(100vh) rotate(720deg);
      }
    }

    @media (max-width: 768px) {
      .thankyou-card {
        padding: 3rem 2rem;
        margin: 0 1rem;
      }

      .thankyou-card h1 {
        font-size: 1.85rem;
      }

      .thankyou-card>p {
        font-size: 1rem;
      }

      .next-steps {
        padding: 1.5rem;
      }

      .thankyou-buttons {
        flex-direction: column;
      }

      .thankyou-buttons .btn {
        width: 100%;
      }
    }
  </style>
</head>

<body>
  <?php include 'inc/partials/header.php'; ?>

  <main>
    <section class="thankyou-section">
      <div class="container" style="display: flex; justify-content: center;">
        <div class="thankyou-card">
          <div class="success-icon">
            <div class="success-icon-circle">
              <i class="fas fa-check"></i>
            </div>
          </div>

          <h1>¡Solicitud <span>recibida</span>!</h1>
          <p>
            Gracias por confiar en Nevox. Hemos recibido tu solicitud de demo y nuestro equipo
            se pondrá en contacto contigo muy pronto.
          </p>

          <div class="next-steps">
            <h3>¿Qué sigue?</h3>
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <p><strong>Revisamos tu solicitud</strong> — analizamos tu negocio para preparar una propuesta
                  personalizada.</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <p><strong>Te contactamos</strong> — en menos de 24 horas uno de nuestros especialistas se comunicará
                  contigo.</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <p><strong>Demo en vivo</strong> — te mostramos exactamente cómo la automatización puede transformar tu
                  negocio.</p>
              </div>
            </div>
          </div>

          <div class="thankyou-buttons">
            <a href="https://wa.me/584220990563" target="_blank" class="btn btn-whatsapp-ty">
              <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
            </a>
            <a href="/" class="btn btn-outline">
              <i class="fas fa-arrow-left"></i> Volver al Inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Confetti animation -->
  <div class="confetti-container" id="confettiContainer"></div>

  <?php include 'inc/partials/footer.php'; ?>

  <script>
    (function () {
      // Confetti burst on page load
      const container = document.getElementById('confettiContainer');
      const colors = ['#3b82f6', '#10b981', '#ffffff', '#00e5ff', '#1f2937'];
      const shapes = ['square', 'circle'];

      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const left = Math.random() * 100;
        const size = Math.random() * 8 + 6;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 1.5;

        confetti.style.left = left + '%';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = shape === 'circle' ? '50%' : '2px';
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        container.appendChild(confetti);
      }

      // Remove confetti after animation
      setTimeout(() => {
        container.remove();
      }, 5000);
    })();
  </script>

</body>

</html>
