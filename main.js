// KraalPro - main.js

// Highlight active nav link
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav ul li a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Contact form validation & submission
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Show success message
  const successMsg = document.querySelector(".success-msg");
  if (successMsg) {
    successMsg.style.display = "block";
    form.reset();
    setTimeout(function () {
      successMsg.style.display = "none";
    }, 5000);
  }
}
