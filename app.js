const menuBtn = document.getElementById("menu-btn");
const navList = document.querySelector("nav ul");

function collapseMenu() {
  if (window.innerWidth < 821) {
    navList.classList.add("collapse");
  } else {
    navList.classList.remove("collapse");
  }
}

window.addEventListener("load", collapseMenu);
window.addEventListener("resize", collapseMenu);

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("collapse");
});