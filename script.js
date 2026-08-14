// CONFIGURACIÓN: escribe solo números, con código de país. Ejemplo México: 5219981234567
const whatsappNumber = 529983204854"";

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menu.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#interest-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!whatsappNumber) {
  
    return;
  }
  const data = new FormData(event.currentTarget);
  const message = `Hola, soy ${data.get("nombre")}.%0AQuiero recibir información sobre K'ÁÁK'.%0A%0AMi WhatsApp: ${data.get("telefono")}%0A${data.get("mensaje") || ""}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
});
