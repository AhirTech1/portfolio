// Mobile Menu Toggle
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const typingTexts = ["Aspiring Ethical Hacker", "IT Student", "Web Developer"];
const typingSpeed = 100;  // milliseconds per character
const erasingSpeed = 75;
const delayBetween = 2000;  // pause before erasing
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < typingTexts[textIndex].length) {
        document.getElementById("typing-text").textContent += typingTexts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("typing-text").textContent = typingTexts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex++;
        if (textIndex >= typingTexts.length) textIndex = 0;
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", function() {
    if (typingTexts.length) setTimeout(type, delayBetween);
});


// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// WORKING Skill Bar Animation
function animateSkillBars() {
    document.querySelectorAll('.skill-item').forEach(item => {
        const percent = item.getAttribute('data-level');
        const progressBar = item.querySelector('.skill-progress');
        const percentText = item.querySelector('.skill-percent');

        // Animate after slight delay
        setTimeout(() => {
            progressBar.style.width = percent + '%';
            percentText.textContent = percent + '%';
        }, 100);
    });
}

// Trigger when skills section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Start observing
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}