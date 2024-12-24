// Seleccionar el menú
const header = document.getElementById('header');

// Agregar un evento de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});