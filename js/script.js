alert("AHHC JavaScript is working");

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }


    // ========================================
    // CLOSE MOBILE MENU AFTER CLICKING A LINK
    // ========================================

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

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

    navLinks.forEach(link => {

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

});
