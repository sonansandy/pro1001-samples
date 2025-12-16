document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#newsletter-form");
  const firstNameInput = document.querySelector("#first-name");
  const emailInput = document.querySelector("#email");
  const feedback = document.querySelector("#newsletter-feedback");

  if (!form) return;

  function showMessage(message, type = "error") {
    feedback.textContent = message;
    feedback.className = `form-feedback form-feedback--${type}`;
  }

  function clearMessage() {
    feedback.textContent = "";
    feedback.className = "form-feedback";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessage();

    const firstName = firstNameInput.value.trim();
    const email = emailInput.value.trim();

    if (!firstName) {
      showMessage("Please enter your first name.");
      firstNameInput.focus();
      return;
    }

    if (!email) {
      showMessage("Please enter your email address.");
      emailInput.focus();
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // ✅ Success (simulated submit)
    showMessage("Thank you! You are now signed up for our newsletter.", "success");
    form.reset();
  });
});
