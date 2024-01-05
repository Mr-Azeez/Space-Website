let hamMenu = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");

hamMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenu.classList.toggle("fa-times")
});