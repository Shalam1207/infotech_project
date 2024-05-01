// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // You can adjust this value according to your need
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});