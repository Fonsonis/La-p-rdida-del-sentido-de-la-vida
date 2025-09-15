document.addEventListener('DOMContentLoaded', function() {

    // Animación de aparición al hacer scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // El elemento se activa cuando es visible en un 20%
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});