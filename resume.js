/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close mobile menu after clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const sections = document.querySelectorAll(
    ".section, .project-card, .earlier-card, .highlight-card, .education-card"
);

sections.forEach(function (element) {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.08
    }

);


sections.forEach(function (element) {

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const footer = document.querySelector(".footer");

if (footer) {

    const paragraphs = footer.querySelectorAll("p");

    if (paragraphs.length > 0) {

        paragraphs[0].textContent =
            "© " + new Date().getFullYear() +
            " Prakhar Srivastava";

    }

}
