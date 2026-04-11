document.addEventListener('DOMContentLoaded', () => {
    const typingTextElement = document.getElementById('typing-text');
    const kata =  ["Backend Learner", "Python Enthusiast", "Mobile Developer (Aamiin)"];
    let indexKata = 0;
    let indexKarakter = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typingText() {
        const kataSekarang = kata[indexKata];

        if (isDeleting) {
            typingTextElement.textContent = kataSekarang.substring(0, indexKarakter - 1);
            indexKarakter--;
            typingSpeed = 50;
        } else {
            typingTextElement.textContent = kataSekarang.substring(0, indexKarakter + 1);
            indexKarakter++;
            typingSpeed = 100;
        }

        if (!isDeleting && indexKarakter === kataSekarang.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && indexKarakter === 0) {
            isDeleting = false;
            indexKata = (indexKata + 1) % kata.length;
            typingSpeed = 500;
        }

        setTimeout(typingText, typingSpeed);
    }

    setTimeout(typingText, 1000);

    const navMobileBtn = document.getElementById('nav-mobile-btn');
    const navMobileMenu = document.getElementById('nav-mobile');

    navMobileBtn.addEventListener('click', () => {
        navMobileMenu.classList.toggle('hidden');
    });

});