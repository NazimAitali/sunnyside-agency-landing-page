let Hamburger = document.querySelector(".Menu-mobile-container");
let Menu = document.querySelector(".Menu-mobile-content");

Hamburger.addEventListener("click", showMenu);
function showMenu() {
  if (Menu.classList[1] === "Display-menu") {
    Menu.classList.remove("Display-menu");
  } else {
    Menu.classList.add("Display-menu");
  }
}
