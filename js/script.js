// script.js
// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'mooth' });
    });
});

// Add animation to home section
document.getElementById('home').addEventListener('mouseover', () => {
    document.getElementById('home').classList.add('animate');
});

document.getElementById('home').addEventListener('mouseout', () => {
    document.getElementById('home').classList.remove('animate');
});

// Add animation to project images
document.querySelectorAll('#projects img').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('animate');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('animate');
    });
});