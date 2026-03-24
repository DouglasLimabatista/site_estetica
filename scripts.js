    const carousel = document.getElementById('carousel-container');
    let scrollAmount = 0;
    const scrollStep = 200 + 24; // Largura do card (350px) + Gap (24px)
    const delay = 2000; // Tempo em milisegundos (2 segundos)

    function autoScroll() {
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
            // Se chegou no fim, volta pro começo
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Senão, pula para o próximo card
            carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    }

    // Inicia o intervalo
    let timer = setInterval(autoScroll, delay);

    // Opcional: Para o carrossel se o usuário colocar o mouse em cima ou tocar
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => timer = setInterval(autoScroll, delay));
