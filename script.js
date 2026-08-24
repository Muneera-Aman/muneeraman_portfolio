/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".saas-menu");
const navLinks = document.querySelector(".saas-nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });


    /* Navigation links */

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            // Remove active from all links
            navigationLinks.forEach(item => {
                item.classList.remove("active");
            });

            // Add active to clicked link
            link.classList.add("active");

            // Close mobile menu
            navLinks.classList.remove("open");

        });

    });

}


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".saas-header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}