document.addEventListener('DOMContentLoaded', () => {
    console.log('Vanillora Wiki успішно завантажена!');

    // Плавна анімація появи елементів
    const elements = document.querySelectorAll('.card, .hero-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});
