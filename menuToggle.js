let show = true;

const navMenuToggle = document.querySelector(".menu-toggle");
const menuToggle = document.querySelector(".menu-toggle-Hamburguer");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  navMenuToggle.classList.toggle("on", show);
  show = !show;
});
