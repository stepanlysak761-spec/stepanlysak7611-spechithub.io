document.addEventListener('DOMContentLoaded', () => {
    const reveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    // Ефект системного статусу
    const status = document.querySelector('.sys-status');
    setInterval(() => {
        status.style.opacity = Math.random() > 0.9 ? '0.2' : '1';
    }, 100);
});
