/* =================MOBILE MENU=================== */

const menuToggle = document.querySelector(".saas-menu");
const navLinks = document.querySelector(".saas-nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        // Keep the menu button in sync
        menuToggle.classList.toggle("active", isOpen);

        // Accessibility
        menuToggle.setAttribute("aria-expanded", isOpen);
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
            menuToggle.classList.remove("active");

            // Update accessibility
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navLinks.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
        }

    });


    /* Close menu when pressing Escape */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navLinks.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* ============HEADER SCROLL EFFECT===================== */

const header = document.querySelector(".saas-header");

if (header) {

    const updateHeader = () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    // Run once when page loads
    updateHeader();

    // Update while scrolling
    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

}