/* ============================================
   PORTFOLIO SCRIPT
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Current Year in Footer (Optional)
    // ===============================

    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===============================
    // Highlight Active Navigation Link
    // ===============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

    // ===============================
    // Fade In Animation
    // ===============================

    const hiddenElements = document.querySelectorAll(
        ".about-card, .skill-card, .project-card, .contact-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    hiddenElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

});
const emailLink = document.getElementById("copyEmail");

emailLink.addEventListener("click", function (event) {

    event.preventDefault();

    const email = "prathmeshphadtare1@gmail.com";

    navigator.clipboard.writeText(email).then(() => {

        const originalText = emailLink.textContent;

        emailLink.textContent = "✓ Email Copied!";

        setTimeout(() => {

            emailLink.textContent = originalText;

        }, 2000);

    });

});