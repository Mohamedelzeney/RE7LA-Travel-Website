const form = document.forms["signup_form"];

const name = form.elements["name"];
const email = form.elements["email"];
const password = form.elements["password"];
const confirmPassword = form.elements["confirm-password"];

const nameError = name.nextElementSibling;
const emailError = email.nextElementSibling;
const passwordError = password.nextElementSibling;
const confirmPasswordError = confirmPassword.nextElementSibling;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear errors
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name
  if (name.value.trim() === "") {
    nameError.innerText = "Name is required";
    return;
  }
  if (name.value.length < 3) {
    nameError.innerText = "Name must at least 3 character";
    return;
  }

  // Email
  if (email.value.trim() === "") {
    emailError.innerText = "Email is required";
    return;
  }

  if (!emailRegex.test(email.value)) {
    emailError.innerText = "Please enter a valid email";
    return;
  }

  // Password
  if (password.value.trim() === "") {
    passwordError.innerText = "Password is required";
    return;
  }

  if (password.value.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
    return;
  }

  // Confirm password
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.innerText = "Please confirm your password";
    return;
  }

  if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerText = "Passwords do not match";
    return;
  }

  alert("Account created successfully!");
});
