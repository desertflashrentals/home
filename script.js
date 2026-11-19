document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "✕" : "☰";
  });
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = [
      "Hello Desert Flash Rentals! I'd like to ask about booking a photo booth.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      data.get("eventDate") ? `Event date: ${data.get("eventDate")}` : "",
      data.get("eventType") ? `Event type: ${data.get("eventType")}` : "",
      data.get("details") ? `Details: ${data.get("details")}` : ""
    ].filter(Boolean);
    const message = encodeURIComponent(fields.join("\n"));
    const isApple = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const smsUrl = `sms:4807885745${isApple ? "&" : "?"}body=${message}`;
    document.getElementById("formStatus").textContent =
      "Opening your messaging app. Please review the message and tap Send to submit your inquiry.";
    window.location.href = smsUrl;
  });
}
