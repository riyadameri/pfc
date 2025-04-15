document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.loading-screen').style.opacity = '0';
            setTimeout(function() {
                document.querySelector('.loading-screen').style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Form submission
    document.getElementById('eventRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            studentId: document.getElementById('studentId').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            specialization: document.getElementById('specialization').value,
            projectTitle: document.getElementById('projectTitle').value,
            interests: getSelectedCheckboxes('interests'),
            attendance: getSelectedCheckboxes('attendance'),
            registrationDate: new Date().toISOString()
        };

        // Store the data in localStorage
        storeRegistrationData(formData);
        
        // Show success modal
        document.getElementById('successModal').style.display = 'flex';
        
        // Reset form
        this.reset();
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
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Helper function to get selected checkboxes
    function getSelectedCheckboxes(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkboxes).map(cb => cb.value);
    }

    // Function to store registration data
    function storeRegistrationData(data) {
        // Get existing registrations or initialize empty array
        let registrations = JSON.parse(localStorage.getItem('innovexRegistrations')) || [];
        
        // Add new registration
        registrations.push(data);
        
        // Save back to localStorage
        localStorage.setItem('innovexRegistrations', JSON.stringify(registrations));
        
        // For demonstration, log to console
        console.log('Registration stored:', data);
        console.log('All registrations:', registrations);
    }

    // Optional: Function to export data as CSV
    function exportRegistrationsToCSV() {
        const registrations = JSON.parse(localStorage.getItem('innovexRegistrations')) || [];
        if (registrations.length === 0) {
            alert('No registration data available');
            return;
        }

        // CSV header
        let csv = 'Full Name,Student ID,Email,Phone,Specialization,Project Title,Interests,Attendance Days,Registration Date\n';
        
        // Add each registration
        registrations.forEach(reg => {
            csv += `"${reg.fullName}","${reg.studentId}","${reg.email}","${reg.phone}","${reg.specialization}","${reg.projectTitle}","${reg.interests.join(', ')}","${reg.attendance.join(', ')}","${new Date(reg.registrationDate).toLocaleString()}"\n`;
        });

        // Create download link
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'innovex_registrations.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // For admin purposes, you can call exportRegistrationsToCSV() when needed
    // For example, you could add a secret button or console command
    window.exportRegistrations = exportRegistrationsToCSV;
});