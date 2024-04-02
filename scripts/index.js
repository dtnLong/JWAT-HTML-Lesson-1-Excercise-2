var menuButton = document.querySelector("#menu-button");
var navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    if (navMenu.classList.contains("disabled")) {
        menuButton.classList.add('active');
        navMenu.classList.remove("disabled");
    } else {
        menuButton.classList.remove('active');
        navMenu.classList.add("disabled");
    }
})