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

            const isOpen =
                mainNav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // Close menu when navigation link is clicked

        const navLinks =
            mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        // Close menu if user clicks outside it

        document.addEventListener("click", function (event) {

            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    // ========================================
    // SMOOTH SCROLLING
    // ========================================

    const navLinks =
        document.querySelectorAll(
            '.main-nav a[href^="#"]'
        );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ========================================
    // ABOUT AHHC SLIDESHOW
    // ========================================

    const slides =
        document.querySelectorAll(".about-slide");

    const dots =
        document.querySelectorAll(".about-dot");

    const slider =
        document.querySelector(".about-slider");

    let currentSlide = 0;
    let slideInterval;


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


    function nextSlide() {

        let nextIndex =
            currentSlide + 1;

        if (nextIndex >= slides.length) {

            nextIndex = 0;

        }

        showSlide(nextIndex);

    }


    function startSlideshow() {

        clearInterval(slideInterval);

        slideInterval = setInterval(
            nextSlide,
            4500
        );

    }


    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);

            startSlideshow();

        });

    });


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


    if (slides.length > 0) {

        showSlide(0);

        startSlideshow();

    }


    // ========================================
    // MORE ABOUT AHHC
    // ========================================

    const moreButton =
        document.getElementById(
            "more-about-button"
        );

    const moreContent =
        document.getElementById(
            "more-about-content"
        );


    if (moreButton && moreContent) {

        moreButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    moreContent.classList.contains(
                        "open"
                    );


                if (isOpen) {

                    moreContent.classList.remove(
                        "open"
                    );

                    moreButton.classList.remove(
                        "active"
                    );

                    moreButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    const text =
                        moreButton.querySelector(
                            "span:first-child"
                        );

                    if (text) {

                        text.textContent =
                            "More About AHHC";

                    }


                } else {

                    moreContent.classList.add(
                        "open"
                    );

                    moreButton.classList.add(
                        "active"
                    );

                    moreButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    const text =
                        moreButton.querySelector(
                            "span:first-child"
                        );

                    if (text) {

                        text.textContent =
                            "Show Less";

                    }

                }

            }
        );

    }

});
