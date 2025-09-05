document.addEventListener("DOMContentLoaded", function () {
  // Obsługa mobilnego menu (hamburger)
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Zamykanie menu po kliknięciu w link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // Aktualizacja roku w stopce
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
