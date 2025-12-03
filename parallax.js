document.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const bg = document.querySelector(".parallax-bg");

    // Se mueve 30% de la velocidad del scroll
    bg.style.transform = "translateY(" + scrolled * 0.3 + "px)";
});
