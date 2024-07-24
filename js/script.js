// script.js
// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(event.target.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
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
  document.querySelectorAll('#projects img').forEach((image) => {
    image.addEventListener('mouseover', () => {
      image.classList.add('animate');
    });
  
    image.addEventListener('mouseout', () => {
      image.classList.remove('animate');
    });
  });
  
  // Add smooth scrolling to all links with the "smooth-scroll" class
  document.querySelectorAll('a.smooth-scroll').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });


//popup
document.getElementById('resume-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});