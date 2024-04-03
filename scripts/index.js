const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const solutionsNav = document.querySelector("#nav-solutions");
const servicesNav = document.querySelector("#nav-services");
const careersNav = document.querySelector("#nav-careers");
const solutionsNavMenu = document.querySelector("#nav-solutions-menu");
const servicesNavMenu = document.querySelector("#nav-services-menu");
const careersNavMenu = document.querySelector("#nav-careers-menu");

const closeAllContextMenu = () => {
    servicesNavMenu.classList.remove("active");
    solutionsNavMenu.classList.remove("active");
    careersNavMenu.classList.remove("active");
}

// Mobile open/close navigation menu controls
menuButton.addEventListener("click", () => {
    // If menu button have "active" class, the menu button is considered in active state
    // If navigation menu have "disabled" class, the nav menu is hidden
    menuButton.classList.toggle("active");
    navMenu.classList.toggle("disabled");
})


// Mobile navigation menu controls
// When a navigation button is click, open that navigation menu and closs all other menu
// If context menu contain class "active", the context menu will be displayed
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

// Control open/close of menu when clicked in outside area
document.addEventListener("click", (e) => {
    // Close all menu when use clicked on area outside of navigation menu
    if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
        navMenu.classList.add("disabled");
        menuButton.classList.remove("active");
        closeAllContextMenu();
        return;
    }

    // Close all navigation context menu when click on area outside of context menu and navigation button
    if (!solutionsNav.contains(e.target) && !servicesNav.contains(e.target) && !careersNav.contains(e.target) &&
            !solutionsNavMenu.contains(e.target) && !servicesNavMenu.contains(e.target) && !careersNavMenu.contains(e.target)) {
        closeAllContextMenu();
    }
})