let show = true;

const navMenuToggle = document.querySelector(".menu-toggle");
const menuToggle = document.querySelector(".menu-toggle-Hamburguer");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  navMenuToggle.classList.toggle("on", show);
  show = !show;

  if (document.body.style.overflow == "hidden") {
    menuToggle.src = "./assets/menu-buguer-close.svg";
  }
  if (document.body.style.overflow == "initial") {
    menuToggle.src = "./assets/menu-buguer-open.svg";
  }
});
