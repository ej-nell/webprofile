const hamburger = document.querySelector("#hamburger");

const navBar = document.querySelector("#nav-header");
hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
};

document.onclick = function (clickEvent) {
  if (
    clickEvent.target.id !== "navBar" &&
    clickEvent.target.id !== "hamburger"
  ) {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  }
};
