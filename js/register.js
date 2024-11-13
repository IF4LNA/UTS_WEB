// Fungsi untuk memvalidasi form register
function validateRegister() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validasi nama lengkap
  if (name.trim() === "") {
    alert("Full Name is required.");
    return;
  }

  // Validasi email
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validasi username
  if (username.trim() === "") {
    alert("Username is required.");
    return;
  }

  // Validasi password
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Validasi konfirmasi password
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Jika semua validasi lolos
  alert("Registration successful!");
}
