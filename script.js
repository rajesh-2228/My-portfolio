
// Select HTML elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile Navigation Menu
menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// Automatically update footer year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
