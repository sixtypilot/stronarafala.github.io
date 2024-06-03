document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate");
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = "opacity 2s";

        window.addEventListener("scroll", function() {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.opacity = 1;
            }
        });
    });
});
