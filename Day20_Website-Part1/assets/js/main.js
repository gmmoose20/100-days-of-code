const hamburgerCheckbox = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburgerCheckbox.addEventListener('change', () => {
    navbar.classList.toggle('active');
});