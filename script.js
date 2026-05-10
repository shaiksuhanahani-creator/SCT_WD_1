// Task 1 Requirement: Change nav style when scrolled
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');  // Adds dark background
    } else {
        navbar.classList.remove('scrolled'); // Back to transparent
    }
});