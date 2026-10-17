
"use strict";

// ==============================
// MENÚ PARA MÓVILES
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

// ==============================
// AÑO AUTOMÁTICO
// ==============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==============================
// FECHA MÍNIMA: HOY
// ==============================

const dateInput = document.getElementById("appointment-date");

function getLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

if (dateInput) {
  dateInput.min = getLocalDate();
}

// ==============================
// FORMULARIO DE RESERVAS
// ==============================

const bookingForm = document.getElementById("booking-form");
const bookingError = document.getElementById("booking-error");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (bookingError) {
      bookingError.textContent = "";
    }

    if (!bookingForm.reportValidity()) return;

    const formData = new FormData(bookingForm);

    const nombre = String(formData.get("nombre") || "").trim();
    const telefono = String(formData.get("telefono") || "").trim();
    const tratamiento = String(
      formData.get("tratamiento") || ""
    );
    const fecha = String(formData.get("fecha") || "");
    const hora = String(formData.get("hora") || "");
    const notas = String(formData.get("notas") || "").trim();

    if (!nombre || !telefono || !tratamiento || !fecha || !hora) {
      if (bookingError) {
        bookingError.textContent =
          "Completa todos los campos obligatorios.";
      }
      return;
    }

    if (fecha < getLocalDate()) {
      if (bookingError) {
        bookingError.textContent =
          "Selecciona hoy o una fecha futura.";
      }
      return;
    }

    const mensaje = [
      "¡Hola! Quiero solicitar una cita de estética.",
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Tratamiento: ${tratamiento}`,
      `Fecha solicitada: ${fecha}`,
      `Hora solicitada: ${hora}`,
      notas ? `Mensaje adicional: ${notas}` : "",
      "",
      "Entiendo que la cita está pendiente de confirmación."
    ].filter(Boolean).join("\n");

    // Número de WhatsApp del centro, con prefijo internacional.
    const whatsappNumber = "34682769033";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(mensaje);

    // El cliente debe enviar el mensaje en WhatsApp.
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}

// ==============================
// RESALTAR SECCIÓN EN EL MENÚ
// ==============================

const menuLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        menuLinks.forEach((link) => {
          const active =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", active);

          if (active) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}
