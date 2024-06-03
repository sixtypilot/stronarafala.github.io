document.addEventListener("DOMContentLoaded", function() {
    // Pobierz przycisk
    const backToTopButton = document.getElementById("backToTop");

    // Wyświetl przycisk, gdy użytkownik przewinie w dół 20px od góry dokumentu
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Po kliknięciu na przycisk, przewiń do góry dokumentu
    backToTopButton.onclick = function() {
        document.body.scrollTop = 0; // Dla Safari
        document.documentElement.scrollTop = 0; // Dla Chrome, Firefox, IE i Opera
    };
});
