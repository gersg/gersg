// Tema Escuro/Claro
const themeToggle = document.getElementById('theme-toggle');
const logo = document.getElementById('logo');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Alternar para Tema Claro';
        logo.src = 'img/logo-dark.png';
    } else {
        themeToggle.textContent = 'Alternar para Tema Escuro';
        logo.src = 'img/logo-light.png';
    }
});

// Animações com Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Inicialização da animação ao carregar a página
document.addEventListener('DOMContentLoaded', animateOnScroll);
