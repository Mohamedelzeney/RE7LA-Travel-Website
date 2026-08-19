const form = document.forms["login_form"];

const email = form.elements["email"];
const password = form.elements["password"];

const emailError = email.nextElementSibling;
const passwordError = password.nextElementSibling;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset errors
  emailError.innerText = "";
  passwordError.innerText = "";

  // Email validation
  if (email.value.trim() === "") {
    emailError.innerText = "Email is required";
    return;
  }

  if (!emailRegex.test(email.value)) {
    emailError.innerText = "Please enter a valid email";
    return;
  }

  // Password validation
  if (password.value.trim() === "") {
    passwordError.innerText = "Password is required";
    return;
  }

  if (password.value.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
    return;
  }

  alert("Login successful!");
});
