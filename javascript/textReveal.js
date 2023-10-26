document.addEventListener('DOMContentLoaded', function () {
    function revealText(element, textToReveal, revealSpeed) {
        let index = 0;
        function reveal() {
            if (index < textToReveal.length) {
                element.textContent += textToReveal[index];
                index++;
                setTimeout(reveal, revealSpeed);
            }
        }
        reveal();
    }
    // Usage example
    const greeting = document.getElementById('revealing-text1');
    revealText(greeting, "Hello There!", 70);

    const element2 = document.getElementById('revealing-text2');
    revealText(element2, "Different Text for Element 2.", 40);
});