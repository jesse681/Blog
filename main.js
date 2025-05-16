// Navigation
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Hide menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Change header background on scroll
function scrollHeader() {
    const header = document.querySelector('.header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section[id]');
const animatedElements = document.querySelectorAll('.section__header, .about__content, .service__card');

const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

animatedElements.forEach(element => {
    observer.observe(element);
});

// Active link on scroll
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// Services data
const servicesData = {
    bureau: [
        'Plan architectural',
        'Plan BA (béton armé)',
        'Plan plomberie',
        'Plan électricité',
        'Plan et animation 3D'
    ],
    travaux: [
        'Construction de Bâtiments et Ouvrages d\'Art',
        'Hydraulique et assainissement',
        'Réhabilitation et Extension'
    ],
    expertise: [
        'Études et assistance-conseils',
        'Élaboration des cahiers de charges',
        'Maitrise d\'œuvre et assistance technique',
        'Pilotage de projet et programme',
        'Formation et mise à niveau',
        'Mission OPC',
        'Mission de contrôle de conformité'
    ]
};

// Populate services lists with animation
Object.entries(servicesData).forEach(([key, items]) => {
    const list = document.getElementById(`${key}-list`);
    if (list) {
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.opacity = '0';
            li.style.transform = 'translateY(20px)';
            li.style.transition = `all 0.3s ease ${index * 0.1}s`;
            list.appendChild(li);
            
            // Trigger animation after a small delay
            setTimeout(() => {
                li.style.opacity = '1';
                li.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});

// Enhanced contact form with validation and feedback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Envoi en cours...';
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success feedback
            submitButton.textContent = 'Message envoyé!';
            submitButton.classList.add('success');
            contactForm.reset();
            
            // Reset button after 2 seconds
            setTimeout(() => {
                submitButton.textContent = originalButtonText;
                submitButton.classList.remove('success');
                submitButton.disabled = false;
            }, 2000);
            
        } catch (error) {
            // Error feedback
            submitButton.textContent = 'Erreur. Réessayer';
            submitButton.classList.add('error');
            
            setTimeout(() => {
                submitButton.textContent = originalButtonText;
                submitButton.classList.remove('error');
                submitButton.disabled = false;
            }, 2000);
        }
    });
}

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});