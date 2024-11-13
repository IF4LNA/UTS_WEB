function validateLogin() {
  // Mendapatkan elemen input dan error message
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  // Reset pesan error
  usernameError.classList.add("hidden");
  passwordError.classList.add("hidden");

  // Validasi jika field kosong
  if (!username) {
    usernameError.textContent = "Username tidak boleh kosong.";
    usernameError.classList.remove("hidden");
    return;
  }

  if (!password) {
    passwordError.textContent = "Password tidak boleh kosong.";
    passwordError.classList.remove("hidden");
    return;
  }

  // Validasi username dan password yang benar
  if (username !== "fajar.fikri") {
    usernameError.textContent = "Username salah.";
    usernameError.classList.remove("hidden");
    Swal.fire({
      icon: "error",
      title: "Username salah",
      text: "Cek kembali username yang Anda masukkan.",
      confirmButtonColor: "#FF8C00", // Warna tombol orange
    });
  } else if (password !== "admin123") {
    passwordError.textContent = "Password salah.";
    passwordError.classList.remove("hidden");
    Swal.fire({
      icon: "error",
      title: "Password salah",
      text: "Cek kembali password yang Anda masukkan.",
      confirmButtonColor: "#FF8C00", // Warna tombol orange
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Login Berhasil!",
      text: "Anda akan dialihkan ke halaman utama.",
      confirmButtonColor: "#FF8C00", // Warna tombol orange
    }).then(() => {
      window.location.href = "home.html"; // Halaman tujuan setelah login berhasil
    });
  }
}
