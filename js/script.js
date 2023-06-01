const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika hamburger menu diklik
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Klik diluar side bar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
