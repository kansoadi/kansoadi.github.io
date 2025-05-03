document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // relative to document viewport 
        rootMargin: "0px",
        threshold: 0.1 // 10% of item height
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Optional: Stop observing the element after it becomes visible
                // observer.unobserve(entry.target);
            }
            // Optional: Remove class if element scrolls out of view
            // else {
            //     entry.target.classList.remove("visible");
            // }
        });
    }, observerOptions);

    // Observe elements with the class "fade-in-on-scroll"
    const elementsToAnimate = document.querySelectorAll(".fade-in-on-scroll");
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll("nav a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Add subtle transition effect to nav links (already handled by CSS transition)
    // Add hover effects to project cards (already handled by CSS transition)

});

