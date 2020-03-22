const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-button");
const ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validacion);

function validacion(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", menuBurger);
  } else {
    burgerButton.removeEventListener("click", menuBurger);
  }
}

validacion(ipad);

function menuBurger() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
