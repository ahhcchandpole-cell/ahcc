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
/* ========================================
   AHHC ABOUT SLIDESHOW
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".about-slide");
    const dots = document.querySelectorAll(".about-dot");
    const slider = document.querySelector(".about-slider");

    let currentSlide = 0;
    let slideInterval;


    /* ========================================
       SHOW SLIDE
    ======================================== */

    function showSlide(index) {

        if (!slides.length) {
            return;
        }

        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        slides[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active");
        }

        currentSlide = index;

    }


    /* ========================================
       NEXT SLIDE
    ======================================== */

    function nextSlide() {

        let nextIndex = currentSlide + 1;

        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }

        showSlide(nextIndex);

    }


    /* ========================================
       START AUTOMATIC SLIDESHOW
    ======================================== */

    function startSlideshow() {

        clearInterval(slideInterval);

        slideInterval = setInterval(
            nextSlide,
            4500
        );

    }


    /* ========================================
       DOT NAVIGATION
    ======================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);

            startSlideshow();

        });

    });


    /* ========================================
       PAUSE ON HOVER
    ======================================== */

    if (slider) {

        slider.addEventListener(
            "mouseenter",
            function () {

                clearInterval(slideInterval);

            }
        );


        slider.addEventListener(
            "mouseleave",
            function () {

                startSlideshow();

            }
        );

    }


    /* ========================================
       INITIALIZE SLIDESHOW
    ======================================== */

    if (slides.length > 0) {

        showSlide(0);

        startSlideshow();

    }


    /* ========================================
       MORE ABOUT AHHC
    ======================================== */

    const moreButton =
        document.getElementById("more-about-button");

    const moreContent =
        document.getElementById("more-about-content");


    if (moreButton && moreContent) {

        moreButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    moreContent.classList.contains("open");


                if (isOpen) {

                    moreContent.classList.remove("open");

                    moreButton.classList.remove("active");

                    moreButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    moreButton.querySelector(
                        "span:first-child"
                    ).textContent = "More About AHHC";

                } else {

                    moreContent.classList.add("open");

                    moreButton.classList.add("active");

                    moreButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    moreButton.querySelector(
                        "span:first-child"
                    ).textContent = "Show Less";

                }

            }
        );

    }

});
