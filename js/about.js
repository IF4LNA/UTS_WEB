// JavaScript untuk menangani animasi
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    // Jika bagian (section) ada dalam tampilan, tambahkan kelas "visible" untuk animasi
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
      section.classList.remove("hidden");
    }
  });
});
