document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function checkScroll() {
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add("in-view");
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    checkScroll();
});
