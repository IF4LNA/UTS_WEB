document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scrolly-section");

  function checkSectionVisibility() {
    const triggerBottom = window.innerHeight * 0.75;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // Jalankan sekali saat halaman dimuat
  checkSectionVisibility();

  // Jalankan setiap kali halaman digulir
  window.addEventListener("scroll", checkSectionVisibility);
});
