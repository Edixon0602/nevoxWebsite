<footer>
  <div class="container">
    <div style="display: flex; justify-content: space-between; align-items: center; opacity: 0.6; font-size: 0.85rem;">
      <div>Nevox · <span id="currentYear"></span> · Automatización Inteligente</div>
      <div style="display: flex; gap: 2rem;">
        <a href="/privacy-policy">Privacidad</a>
      </div>
    </div>
  </div>
</footer>

<script>
  (function () {
    // Set current year
    document.getElementById("currentYear").innerText = new Date().getFullYear();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
      const links = navLinks.querySelectorAll("a");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.toggle("fa-bars");
          icon.classList.toggle("fa-times");
        }
      });

      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          const icon = menuToggle.querySelector("i");
          if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
          }
        });
      });
    }
  })();
</script>

<a href="https://wa.me/584220990563" target="_blank" class="float-whatsapp" aria-label="Contactar por WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
