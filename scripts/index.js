var menuButton = document.querySelector("#menu-button");
var navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    if (navMenu.classList.contains("disabled")) {
        menuButton.classList.add("active");
        navMenu.classList.remove("disabled");
    } else {
        menuButton.classList.remove("active");
        navMenu.classList.add("disabled");
    }
})

var navContextMenuID = {
    "#solutions": "#solutionsMenu",
    "#services": "#servicesMenu",
    "#careers": "#careersMenu"
};


var solutionsNav = document.querySelector("#nav-solutions");
var servicesNav = document.querySelector("#nav-services");
var careersNav = document.querySelector("#nav-careers");
var solutionsNavMenu = document.querySelector("#nav-solutions-menu");
var servicesNavMenu = document.querySelector("#nav-services-menu");
var careersNavMenu = document.querySelector("#nav-careers-menu");

solutionsNav.addEventListener("click", () => {
    if (solutionsNavMenu.classList.contains("active")) {
        solutionsNavMenu.classList.remove("active");
    } else {
        servicesNavMenu.classList.remove("active");
        careersNavMenu.classList.remove("active");
        solutionsNavMenu.classList.add("active");
    }
});

servicesNav.addEventListener("click", () => {
    if (servicesNavMenu.classList.contains("active")) {
        servicesNavMenu.classList.remove("active");
    } else {
        solutionsNavMenu.classList.remove("active");
        careersNavMenu.classList.remove("active");
        servicesNavMenu.classList.add("active");
    }
});

careersNav.addEventListener("click", () => {
    if (careersNavMenu.classList.contains("active")) {
        careersNavMenu.classList.remove("active");
    } else {
        servicesNavMenu.classList.remove("active");
        solutionsNavMenu.classList.remove("active");
        careersNavMenu.classList.add("active");
    }
});

// document.addEventListener("click", (e) => {
//     if (!navMenu.contains(e.target) && e.target !== menuButton) {
//         navMenu.classList.add("disabled");
//         menuButton.classList.remove("active");
//     }
// })