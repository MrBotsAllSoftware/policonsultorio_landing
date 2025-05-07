// js/scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Funcionalidad en desarrollo. ¡Gracias por su interés!");
      });
    }
  });
  