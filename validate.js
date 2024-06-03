document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("Wszystkie pola są wymagane.");
            event.preventDefault();
        } else if (!emailPattern.test(email)) {
            alert("Wprowadź poprawny adres email.");
            event.preventDefault();
        }
    });
});
