document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.container-carrosselimg');
    const btnPrev = document.querySelector('.prev-btn');
    const btnNext = document.querySelector('.next-btn');

    console.log(btnPrev, btnNext); // Verifica se os botões estão sendo selecionados corretamente

    let currentSlide = 0;
    const totalSlides = carrossel.children.length;

    function hideCarrossel() {
        carrossel.style.transform = 'translateX(-100%)';
    }

    function showCarrossel() {
        carrossel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextCarrossel() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showCarrossel();
    }

    function prevCarrossel() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showCarrossel();
    }

    btnNext.addEventListener('click', nextCarrossel);
    btnPrev.addEventListener('click', prevCarrossel);

    showCarrossel();
});
