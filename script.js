document.addEventListener('DOMContentLoaded', function() {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Seleciona todas as seções e itens que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.content-section, .timeline-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});
