        // Telegram Bot Token and Chat ID
        const BOT_TOKEN = '7565218404:AAGLn6PEToEb8mhLnQ-NkJoD9t1DVgB_mX0';
        const CHAT_ID = '1865245287';

        // Loading screen
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.loading-screen').style.opacity = '0';
                setTimeout(function() {
                    document.querySelector('.loading-screen').style.display = 'none';
                }, 800);
            }, 1500);
        });

        // Create particles
        const particlesContainer = document.querySelector('.particles');
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('li');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 100 + 50 + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = Math.random() * 20 + 10 + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particlesContainer.appendChild(particle);
        }

        // Form validation and submission
        document.getElementById('eventRegistrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('#eventRegistrationForm .error-message').forEach(el => {
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
            const submitBtn = this.querySelector('.submit-btn');
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
                submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Complete Registration';
            });
        });

        // Workshop Form validation and submission
        document.getElementById('workshopRegistrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('#workshopRegistrationForm .error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            let isValid = true;
            
            // Validate full name
            const fullName = document.getElementById('workshopFullName').value.trim();
            if (fullName === '') {
                document.getElementById('workshopNameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate student ID
            const studentId = document.getElementById('workshopStudentId').value.trim();
            if (studentId.length !== 8 || !/^\d+$/.test(studentId)) {
                document.getElementById('workshopIdError').style.display = 'block';
                isValid = false;
            }
            
            // Validate phone number
            const phone = document.getElementById('workshopPhone').value.trim();
            if (phone.length !== 10 || !/^\d+$/.test(phone)) {
                document.getElementById('workshopPhoneError').style.display = 'block';
                isValid = false;
            }
            
            // Validate specialization
            const specialization = document.getElementById('workshopSpecialization').value.trim();
            if (specialization === '') {
                document.getElementById('workshopSpecError').style.display = 'block';
                isValid = false;
            }
            
            // Validate workshop selection
            const workshop = document.getElementById('workshopSelection').value;
            if (workshop === '') {
                document.getElementById('workshopError').style.display = 'block';
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

            // Collect form data
            const formData = {
                fullName: document.getElementById('workshopFullName').value,
                studentId: document.getElementById('workshopStudentId').value,
                phone: document.getElementById('workshopPhone').value,
                specialization: document.getElementById('workshopSpecialization').value,
                workshop: document.getElementById('workshopSelection').value,
                workshopTitle: document.getElementById('workshopSelection').options[document.getElementById('workshopSelection').selectedIndex].text,
                registrationDate: new Date().toISOString()
            };

            // Generate registration ID
            const registrationId = 'WS-' + Math.random().toString(36).substr(2, 8).toUpperCase();

            // Prepare Telegram message
            const telegramMessage = `
📢 *New Workshop Registration* 📢
        
🔹 *Name:* ${formData.fullName}
🔹 *Student ID:* ${formData.studentId}
🔹 *Phone:* ${formData.phone}
🔹 *Specialization:* ${formData.specialization}
🔹 *Workshop:* ${formData.workshopTitle}
        
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
                document.getElementById('workshopRegistrationForm').reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-laptop-code"></i> Register for Workshop';
            });
        });

        document.querySelector('.close-modal').addEventListener('click', function() {
            document.getElementById('successModal').style.display = 'none';
        });

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
            rootMargin: '0px 0px -100px 0px'
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
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.zIndex = '';
                this.style.boxShadow = '';
            });
        });

        // Initial animation trigger
        window.addEventListener('load', function() {
            animateOnScroll();
        });
