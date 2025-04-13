

// Telegram Bot Token and Chat ID
const BOT_TOKEN = '7565218404:AAGLn6PEToEb8mhLnQ-NkJoD9t1DVgB_mX0';
const CHAT_ID = '1865245287';

// Loading screen
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function () {
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

// Form submission
document.getElementById('eventRegistrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

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

    // Send data to Telegram bot (but always show success regardless of the outcome)
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
document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('successModal').style.display = 'none';
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

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .about-content, .club-card, .agenda');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.section-title, .about-content, .club-card, .agenda').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load
