// Toggle untuk Dropdown Profil
document
  .getElementById("profileButton")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubbling agar dropdown tetap terbuka
    const profileDropdown = document.getElementById("profileDropdown");
    profileDropdown.classList.toggle("hidden");
  });

// Tutup dropdown ketika pengguna mengklik di luar area dropdown
document.addEventListener("click", function (event) {
  const profileDropdown = document.getElementById("profileDropdown");
  const profileButton = document.getElementById("profileButton");
  const isClickInside = profileButton.contains(event.target);

  if (!isClickInside && !profileDropdown.classList.contains("hidden")) {
    profileDropdown.classList.add("hidden"); // Menyembunyikan dropdown jika klik di luar
  }
});

// Fungsi Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide() {
  // Sembunyikan slide yang saat ini ditampilkan
  slides[currentSlide].classList.add("hidden");

  // Perbarui indeks ke slide berikutnya
  currentSlide = (currentSlide + 1) % slides.length;

  // Tampilkan slide berikutnya
  slides[currentSlide].classList.remove("hidden");
}

// Pengaturan interval untuk carousel
setInterval(showNextSlide, 3000); // Ganti setiap 3 detik
