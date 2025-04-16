// Telegram Bot Token and Chat ID
const BOT_TOKEN = '7565218404:AAGLn6PEToEb8mhLnQ-NkJoD9t1DVgB_mX0';
const CHAT_ID = '1865245287';

// Loading screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1000);
});

// Generate random floating elements
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        const size = Math.floor(Math.random() * 60) + 40;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDuration = `${Math.floor(Math.random() * 20) + 10}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(element);
    }
}

createFloatingElements();

// Form validation and submission
document.getElementById('eventRegistrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
    
    let isValid = true;
    
    // Validate full name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validate student ID
    const studentId = document.getElementById('studentId').value.trim();
    if (studentId.length !== 8 || !/^\d+$/.test(studentId)) {
        document.getElementById('idError').style.display = 'block';
        isValid = false;
    }
    
    // Validate phone number
    const phone = document.getElementById('phone').value.trim();
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    // Validate specialization
    const specialization = document.getElementById('specialization').value.trim();
    if (specialization === '') {
        document.getElementById('specError').style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        studentId: document.getElementById('studentId').value,
        phone: document.getElementById('phone').value,
        specialization: document.getElementById('specialization').value,
        projectTitle: document.getElementById('projectTitle').value,
        interests: Array.from(document.getElementById('interests').selectedOptions).map(option => option.value),
        registrationDate: new Date().toISOString()
    };

    // Generate registration ID
    const registrationId = 'INVX-' + Math.random().toString(36).substr(2, 8).toUpperCase();

    // Prepare Telegram message
    const telegramMessage = `
📢 *New INNOVEX Registration* 📢
        
🔹 *Name:* ${formData.fullName}
🔹 *Student ID:* ${formData.studentId}
🔹 *Phone:* ${formData.phone}
🔹 *Specialization:* ${formData.specialization}
🔹 *Project Title:* ${formData.projectTitle || 'N/A'}
🔹 *Interests:* ${formData.interests.join(', ') || 'Not specified'}
        
🆔 *Registration ID:* ${registrationId}
📅 *Registered at:* ${new Date(formData.registrationDate).toLocaleString()}
    `;

    // Send data to Telegram bot
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown'
        })
    })
    .finally(() => {
        // Show success modal
        document.getElementById('successModal').style.display = 'flex';
        
        // Reset form
        document.getElementById('eventRegistrationForm').reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Complete Registration';
    });
});

// Close modal
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('successModal')) {
        document.getElementById('successModal').style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Add hover effects to agenda items
const agendaItems = document.querySelectorAll('.agenda-table tr');
agendaItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.zIndex = '1';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.zIndex = '';
    });
});

// Initial animation trigger
window.addEventListener('load', function() {
    animateOnScroll();
});