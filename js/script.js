// ========================================
// AHHC CHANDPOLE - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }


    // ========================================
    // CLOSE MOBILE MENU AFTER CLICKING LINK
    // ========================================

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }

        });

    });


    // ========================================
    // SMOOTH SCROLLING
    // ========================================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ========================================
    // HEADER SHADOW ON SCROLL
    // ========================================

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

});
