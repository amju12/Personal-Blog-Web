const menuButton = document.getElementById("menu-button");
const sideMenu = document.querySelector(".side-menu");

menuButton.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
});
