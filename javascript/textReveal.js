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
    if (window.location.pathname === '/index.html'){
        const greeting = document.getElementById('greeting');
        revealText(greeting, "Hello There!", 70);
    } else if (window.location.pathname === '/aboutMe.html'){
        const element2 = document.getElementById('greeting2');
        revealText(element2, "About Me", 70);
    }
    
});