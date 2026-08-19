const form = document.forms["home_form"];

const name = form.elements["name"];
const email = form.elements["email"];
const phone = form.elements["phone"];

const nameError = name.nextElementSibling;
const emailError = email.nextElementSibling;
const phoneError = phone.nextElementSibling;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear errors
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^01[0125][0-9]{8}$/;

  // Name
  if (name.value.trim() === "") {
    nameError.innerText = "Name is required";
    return;
  }

  if (name.value.trim().length < 3) {
    nameError.innerText = "Name must be at least 3 characters";
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

  // Phone
  if (phone.value.trim() === "") {
    phoneError.innerText = "Phone number is required";
    return;
  }

  if (!phoneRegex.test(phone.value)) {
    phoneError.innerText = "Please enter a valid Egyptian phone number";
    return;
  }

  alert("Form submitted successfully!");
});