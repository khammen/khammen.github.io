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
    const greeting = document.getElementById('greeting');
    revealText(greeting, "Hello There!", 70);

    const element2 = document.getElementById('greeting2');
    revealText(element2, "About Me", 70);
});