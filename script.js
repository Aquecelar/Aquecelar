// Background Effects Generation
function createBackgroundEffects() {
    const bgEffects = document.getElementById('bgEffects');
    if (!bgEffects) return;

    // Create floating particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        bgEffects.appendChild(particle);
    }

    // Create background icons (aquecedor themed)
    const icons = [
        // Fire/Flame icon
        'M12 2c-1.5 4-4 6-7 7 0 2.5 2.5 4.5 6 4.5 3.5 0 6-2 6-4.5-3-1-5.5-3-5-7z M9 17c-1 1-1 2.5-1 4h8c0-1.5 0-3-1-4',
        // Water drop
        'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z',
        // Temperature
        'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z',
        // Settings/Gear
        'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
        // Zap/Lightning
        'M13 2L3 14h8l-1 8 10-12h-8l1-8z',
        // Tool/Wrench
        'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
    ];

    const blurLevels = ['blur-light', 'blur-medium', 'blur-heavy', ''];
    
    for (let i = 0; i < 15; i++) {
        const iconContainer = document.createElement('div');
        iconContainer.className = `bg-icon ${blurLevels[Math.floor(Math.random() * blurLevels.length)]}`;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const size = 40 + Math.random() * 80;
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '1.5');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', icons[Math.floor(Math.random() * icons.length)]);
        svg.appendChild(path);
        
        iconContainer.appendChild(svg);
        iconContainer.style.left = `${Math.random() * 100}%`;
        iconContainer.style.top = `${Math.random() * 100}%`;
        iconContainer.style.animationDelay = `${Math.random() * 20}s`;
        iconContainer.style.animationDuration = `${20 + Math.random() * 10}s`;
        
        bgEffects.appendChild(iconContainer);
    }

    // Create light beams
    for (let i = 0; i < 8; i++) {
        const beam = document.createElement('div');
        beam.className = 'light-beam';
        beam.style.left = `${Math.random() * 100}%`;
        beam.style.animationDelay = `${Math.random() * 10}s`;
        beam.style.animationDuration = `${10 + Math.random() * 5}s`;
        bgEffects.appendChild(beam);
    }

    // Create glowing orbs
    const orbColors = [
        'rgba(124, 159, 245, 0.12)',
        'rgba(91, 141, 239, 0.12)',
        'rgba(124, 159, 245, 0.12)'
    ];

    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'glow-orb';
        const size = 100 + Math.random() * 200;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.background = `radial-gradient(circle, ${orbColors[i % orbColors.length]} 0%, transparent 70%)`;
        orb.style.animationDelay = `${Math.random() * 4}s`;
        orb.style.animationDuration = `${4 + Math.random() * 3}s`;
        bgEffects.appendChild(orb);
    }

    // Create strong blue lights
    for (let i = 0; i < 6; i++) {
        const light = document.createElement('div');
        light.className = 'strong-light';
        const size = 200 + Math.random() * 300;
        light.style.width = `${size}px`;
        light.style.height = `${size}px`;
        light.style.left = `${Math.random() * 100}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.animationDelay = `${Math.random() * 3}s`;
        light.style.animationDuration = `${3 + Math.random() * 2}s`;
        bgEffects.appendChild(light);
    }

    // Create bright sparkles (pontinhos brilhantes) - bem mais lento
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.setProperty('--sparkle-drift', `${-50 + Math.random() * 100}px`);
        sparkle.style.animationDelay = `${Math.random() * 30}s`;
        sparkle.style.animationDuration = `${30 + Math.random() * 20}s`;
        bgEffects.appendChild(sparkle);
    }

    // Create glowing dots (larger bright dots) - bem mais lento
    for (let i = 0; i < 25; i++) {
        const dot = document.createElement('div');
        dot.className = 'glow-dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.setProperty('--dot-drift', `${-80 + Math.random() * 160}px`);
        dot.style.animationDelay = `${Math.random() * 35}s`;
        dot.style.animationDuration = `${35 + Math.random() * 25}s`;
        bgEffects.appendChild(dot);
    }
}

// Initialize background effects on load
document.addEventListener('DOMContentLoaded', createBackgroundEffects);

// FAQ Toggle
function toggleFAQ() {
    const faqDropdown = document.getElementById('faqDropdown');
    faqDropdown.classList.toggle('active');
}

function toggleFAQItem(button) {
    const faqItem = button.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Close FAQ when clicking outside
document.addEventListener('click', (e) => {
    const faqDropdown = document.getElementById('faqDropdown');
    const faqButton = document.getElementById('faqFixedBtn');
    
    if (faqDropdown && faqButton && 
        !faqDropdown.contains(e.target) && 
        !faqButton.contains(e.target)) {
        faqDropdown.classList.remove('active');
    }
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'light');
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark');
    }
});

// Budget Simulator State
let budgetData = {
    service: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    brand: '',
    problem: ''
};

let currentStep = 1;

// Open Budget Simulator
function openBudgetSimulator() {
    const modal = document.getElementById('budgetModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    goToStep(1);
}

// Close Budget Simulator
function closeBudgetSimulator() {
    const modal = document.getElementById('budgetModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    resetBudgetData();
}

// Reset Budget Data
function resetBudgetData() {
    budgetData = {
        service: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        brand: '',
        problem: ''
    };
    document.getElementById('budgetForm').reset();
    currentStep = 1;
}

// Select Service (Step 1)
function selectService(service) {
    budgetData.service = service;
    goToStep(2);
}

// Navigate to Step
function goToStep(step) {
    // Validate form if moving from step 2 to step 3
    if (currentStep === 2 && step === 3) {
        if (!validateForm()) {
            return;
        }
        collectFormData();
        displayReview();
    }
    
    // Hide all steps
    document.querySelectorAll('.modal-step').forEach(s => {
        s.classList.remove('active');
    });
    
    // Show target step
    document.getElementById(`step${step}`).classList.add('active');
    
    // Update progress indicator
    document.querySelectorAll('.progress-step').forEach((s, index) => {
        if (index + 1 <= step) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
    
    currentStep = step;
}

// Validate Form
function validateForm() {
    const form = document.getElementById('budgetForm');
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--color-accent-orange)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--color-border)';
        }
    });
    
    if (!isValid) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
    
    return isValid;
}

// Collect Form Data
function collectFormData() {
    budgetData.name = document.getElementById('name').value;
    budgetData.phone = document.getElementById('phone').value;
    budgetData.email = document.getElementById('email').value;
    budgetData.address = document.getElementById('address').value;
    budgetData.brand = document.getElementById('brand').value;
    budgetData.problem = document.getElementById('problem').value;
}

// Display Review
function displayReview() {
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = `
        <div class="review-item">
            <div class="review-label">Serviço:</div>
            <div class="review-value">${budgetData.service}</div>
        </div>
        <div class="review-item">
            <div class="review-label">Nome:</div>
            <div class="review-value">${budgetData.name}</div>
        </div>
        <div class="review-item">
            <div class="review-label">Telefone:</div>
            <div class="review-value">${budgetData.phone}</div>
        </div>
        <div class="review-item">
            <div class="review-label">E-mail:</div>
            <div class="review-value">${budgetData.email}</div>
        </div>
        <div class="review-item">
            <div class="review-label">Endereço:</div>
            <div class="review-value">${budgetData.address}</div>
        </div>
        ${budgetData.brand ? `
        <div class="review-item">
            <div class="review-label">Marca:</div>
            <div class="review-value">${budgetData.brand}</div>
        </div>
        ` : ''}
        <div class="review-item">
            <div class="review-label">Descrição:</div>
            <div class="review-value">${budgetData.problem}</div>
        </div>
    `;
}

// Send to WhatsApp
function sendToWhatsApp() {
    const message = `*SOLICITAÇÃO DE ORÇAMENTO - AQUECELAR*

*Serviço:* ${budgetData.service}

*DADOS DO CLIENTE:*
*Nome:* ${budgetData.name}
*Telefone:* ${budgetData.phone}
*E-mail:* ${budgetData.email}
*Endereço:* ${budgetData.address}
${budgetData.brand ? `*Marca do Equipamento:* ${budgetData.brand}
` : ''}
*Descrição/Problema:*
${budgetData.problem}

_Mensagem enviada através do site Aquecelar Aquecedores_`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5511974032100?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    closeBudgetSimulator();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, catalog items, and testimonials
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .catalog-item, .testimonial-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate counter numbers
    animateCounters();
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation after a small delay
        setTimeout(() => {
            updateCounter();
        }, 500);
    });
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBudgetSimulator();
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Parallax effect for hero background orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Floating Action Menu
const menuToggle = document.getElementById('menuToggle');
const floatingMenu = document.getElementById('floatingMenu');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let menuOpen = false;

// Toggle menu
menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        floatingMenu.classList.add('active');
        menuToggle.classList.add('active');
    } else {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Close menu after action
    menuOpen = false;
    floatingMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (menuOpen && !floatingMenu.contains(e.target)) {
        menuOpen = false;
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});