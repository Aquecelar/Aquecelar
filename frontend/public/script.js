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
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBudgetSimulator();
    }
});