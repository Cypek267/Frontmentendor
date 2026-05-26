const form = document.getElementById("contactForm");
const toast = document.getElementById("successToast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();

  let valid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");

  // Required checks
  if (!firstName.value.trim()) {
    showError("firstNameError", "This field is required");
    valid = false;
  }

  if (!lastName.value.trim()) {
    showError("lastNameError", "This field is required");
    valid = false;
  }

  // Email validation
  if (!email.value.trim()) {
    showError("emailError", "This field is required");
    valid = false;
  } else if (!validateEmail(email.value)) {
    showError("emailError", "Please enter a valid email address");
    valid = false;
  }

  // Radio validation
  const querySelected =
    document.querySelector('input[name="query"]:checked');

  if (!querySelected) {
    showError("queryError", "Please select a query type");
    valid = false;
  }

  // Message validation
  if (!message.value.trim()) {
    showError("messageError", "This field is required");
    valid = false;
  }

  // Consent validation
  if (!consent.checked) {
    showError("consentError", "To submit this form, please consent");
    valid = false;
  }

  // Success
  if (valid) {
    toast.classList.remove("hidden");

    form.reset();

    setTimeout(() => {
      toast.classList.add("hidden");
    }, 4000);
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}