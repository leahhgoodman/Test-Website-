// =========================================================
// Leah Goodman — Personal Website
// =========================================================


// Automatically update footer year
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after clicking a navigation link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// Subtle navigation shadow after scrolling
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 4px 18px rgba(20, 30, 22, 0.05)";

    } else {

        header.style.boxShadow = "none";

    }

});
