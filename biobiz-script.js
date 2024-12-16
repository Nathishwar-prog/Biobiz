document.addEventListener('DOMContentLoaded', () => {
    // Preloader with Particle Background
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#4a90e2' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#4a90e2', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        }
    });

    // Remove Preloader
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 2000);

    // Typed.js for Hero Section
    new Typed('.typed-text', {
        strings: [
            'Transforming Business Strategies',
            'Innovative Solutions for Growth',
            'Your Partner in Business Success'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-animation');
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageTextarea').value;

        if (name && email && message) {
            // Here you would typically send the form data to a server
            alert('Message sent successfully! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
