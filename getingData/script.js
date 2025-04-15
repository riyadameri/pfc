<html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INNOVEX Registration Data</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        :root {
            --primary: #2c3e50;
            --secondary: #FFD700;
            --accent: #000000;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #28a745;
            --danger: #dc3545;
            --info: #17a2b8;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #ffffff;
            color: var(--dark);
            line-height: 1.6;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: var(--shadow);
            text-align: center;
            border-bottom: 5px solid var(--secondary);
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            font-size: 1.2rem;
            color: var(--secondary);
            margin-bottom: 1rem;
        }

        .controls {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .search-filter {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        input, select, button {
            padding: 0.7rem 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: 'Poppins', sans-serif;
        }

        button {
            background-color: var(--primary);
            color: white;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        button:hover {
            background-color: var(--secondary);
            color: var(--dark);
        }

        .stats-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: var(--shadow);
            text-align: center;
            border-top: 4px solid var(--primary);
        }

        .stat-card h3 {
            font-size: 1rem;
            color: #666;
            margin-bottom: 0.5rem;
        }

        .stat-card .value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
        }

        .stat-card.total .value {
            color: var(--success);
        }

        .stat-card.today .value {
            color: var(--info);
        }

        .table-container {
            background: white;
            border-radius: 8px;
            box-shadow: var(--shadow);
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
        }

        th {
            background-color: var(--primary);
            color: white;
            font-weight: 500;
            position: sticky;
            top: 0;
        }

        tr:hover {
            background-color: #f5f5f5;
        }

        .badge {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .badge-success {
            background-color: #d4edda;
            color: var(--success);
        }

        .badge-info {
            background-color: #d1ecf1;
            color: var(--info);
        }

        .badge-warning {
            background-color: #fff3cd;
            color: #856404;
        }

        .pagination {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            gap: 0.5rem;
        }

        .pagination button {
            padding: 0.5rem 1rem;
            border-radius: 4px;
        }

        .pagination button.active {
            background-color: var(--secondary);
            color: var(--dark);
        }

        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
            font-size: 1.5rem;
            color: var(--primary);
        }

        .loading i {
            animation: spin 1s linear infinite;
            margin-right: 0.5rem;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .no-data {
            text-align: center;
            padding: 2rem;
            color: #666;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
        }

        .modal-header h2 {
            color: var(--primary);
        }

        .close-modal {
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
            transition: var(--transition);
        }

        .close-modal:hover {
            color: var(--danger);
        }

        .detail-row {
            margin-bottom: 1rem;
        }

        .detail-label {
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.25rem;
        }

        .detail-value {
            padding: 0.5rem;
            background: #f9f9f9;
            border-radius: 4px;
        }

        .interests-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .interest-tag {
            background-color: #e2e3e5;
            color: #383d41;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
        }

        @media (max-width: 768px) {
            .controls {
                flex-direction: column;
            }
            
            .search-filter {
                flex-direction: column;
            }
            
            th, td {
                padding: 0.75rem 0.5rem;
                font-size: 0.9rem;
            }
            
            .stat-card {
                padding: 1rem;
            }
            
            .stat-card .value {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>INNOVEX 8th Edition Registrations</h1>
            <div class="subtitle">Admin Dashboard</div>
        </header>

        <div class="controls">
            <div class="search-filter">
                <input type="text" id="searchInput" placeholder="Search registrations...">
                <select id="filterSelect">
                    <option value="all">All Registrations</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                </select>
                <button id="exportBtn"><i class="fas fa-file-export"></i> Export</button>
            </div>
            <button id="refreshBtn"><i class="fas fa-sync-alt"></i> Refresh Data</button>
        </div>

        <div class="stats-cards">
            <div class="stat-card total">
                <h3>Total Registrations</h3>
                <div class="value" id="totalRegistrations">0</div>
            </div>
            <div class="stat-card today">
                <h3>Today's Registrations</h3>
                <div class="value" id="todayRegistrations">0</div>
            </div>
            <div class="stat-card">
                <h3>Unique Specializations</h3>
                <div class="value" id="uniqueSpecializations">0</div>
            </div>
            <div class="stat-card">
                <h3>With Projects</h3>
                <div class="value" id="withProjects">0</div>
            </div>
        </div>

        <div class="table-container">
            <table id="registrationsTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Student ID</th>
                        <th>Specialization</th>
                        <th>Project</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <!-- Data will be inserted here by JavaScript -->
                </tbody>
            </table>
            <div class="loading" id="loadingIndicator">
                <i class="fas fa-spinner"></i> Loading data...
            </div>
            <div class="no-data" id="noData" style="display: none;">
                No registration data found.
            </div>
        </div>

        <div class="pagination" id="pagination">
            <!-- Pagination will be inserted here by JavaScript -->
        </div>
    </div>

    <!-- Registration Detail Modal -->
    <div class="modal" id="detailModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Registration Details</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div id="modalBody">
                <!-- Details will be inserted here -->
            </div>
        </div>
    </div>

    <script>
        // Configuration
        const BOT_TOKEN = '7565218404:AAGLn6PEToEb8mhLnQ-NkJoD9t1DVgB_mX0';
        const CHAT_ID = '1865245287';
        const ITEMS_PER_PAGE = 10;
        
        // Global variables
        let allRegistrations = [];
        let currentPage = 1;
        let filteredData = [];

        // DOM Elements
        const tableBody = document.getElementById('tableBody');
        const loadingIndicator = document.getElementById('loadingIndicator');
        const noData = document.getElementById('noData');
        const pagination = document.getElementById('pagination');
        const searchInput = document.getElementById('searchInput');
        const filterSelect = document.getElementById('filterSelect');
        const refreshBtn = document.getElementById('refreshBtn');
        const exportBtn = document.getElementById('exportBtn');
        const detailModal = document.getElementById('detailModal');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.querySelector('.close-modal');
        
        // Stats elements
        const totalRegistrations = document.getElementById('totalRegistrations');
        const todayRegistrations = document.getElementById('todayRegistrations');
        const uniqueSpecializations = document.getElementById('uniqueSpecializations');
        const withProjects = document.getElementById('withProjects');

        // Initialize the application
        document.addEventListener('DOMContentLoaded', () => {
            fetchRegistrations();
            
            // Event listeners
            searchInput.addEventListener('input', filterData);
            filterSelect.addEventListener('change', filterData);
            refreshBtn.addEventListener('click', fetchRegistrations);
            exportBtn.addEventListener('click', exportData);
            closeModal.addEventListener('click', () => detailModal.style.display = 'none');
            
            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === detailModal) {
                    detailModal.style.display = 'none';
                }
            });
        });

        // Fetch registrations from Telegram
        async function fetchRegistrations() {
            try {
                loadingIndicator.style.display = 'flex';
                noData.style.display = 'none';
                tableBody.innerHTML = '';
                
                // In a real implementation, you would fetch from your backend that stores Telegram data
                // For this demo, we'll simulate fetching data
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // In a real app, you would have a backend endpoint like:
                // const response = await fetch(`/api/registrations?bot_token=${BOT_TOKEN}&chat_id=${CHAT_ID}`);
                // const data = await response.json();
                
                // For demo purposes, we'll use mock data that resembles Telegram messages
                const mockData = generateMockData(45);
                allRegistrations = processTelegramData(mockData);
                
                updateStats();
                filterData();
            } catch (error) {
                console.error('Error fetching registrations:', error);
                loadingIndicator.style.display = 'none';
                noData.style.display = 'block';
                noData.textContent = 'Error loading data. Please try again.';
            }
        }

        // Process Telegram messages into registration data
        function processTelegramData(messages) {
            return messages.map(msg => {
                // Extract data from the Telegram message format
                // This would need to be adapted to your actual message format
                const text = msg.text || '';
                
                // Extract fields using regex based on your message format
                const nameMatch = text.match(/Name:\s*(.*)/);
                const idMatch = text.match(/Student ID:\s*(.*)/);
                const phoneMatch = text.match(/Phone:\s*(.*)/);
                const specializationMatch = text.match(/Specialization:\s*(.*)/);
                const projectMatch = text.match(/Project Title:\s*(.*)/);
                const interestsMatch = text.match(/Interests:\s*(.*)/);
                const dateMatch = text.match(/Registered at:\s*(.*)/);
                const regIdMatch = text.match(/Registration ID:\s*(.*)/);
                
                return {
                    id: regIdMatch ? regIdMatch[1] : 'N/A',
                    fullName: nameMatch ? nameMatch[1] : 'Unknown',
                    studentId: idMatch ? idMatch[1] : 'N/A',
                    phone: phoneMatch ? phoneMatch[1] : 'N/A',
                    specialization: specializationMatch ? specializationMatch[1] : 'Not specified',
                    projectTitle: projectMatch && projectMatch[1] !== 'N/A' ? projectMatch[1] : null,
                    interests: interestsMatch ? interestsMatch[1].split(', ') : [],
                    registrationDate: dateMatch ? new Date(dateMatch[1]) : new Date(),
                    rawMessage: text,
                    messageId: msg.message_id
                };
            }).sort((a, b) => b.registrationDate - a.registrationDate);
        }

        // Filter data based on search and filter criteria
        function filterData() {
            const searchTerm = searchInput.value.toLowerCase();
            const filterValue = filterSelect.value;
            
            filteredData = allRegistrations.filter(reg => {
                // Search filter
                const matchesSearch = 
                    reg.fullName.toLowerCase().includes(searchTerm) ||
                    reg.studentId.toLowerCase().includes(searchTerm) ||
                    reg.specialization.toLowerCase().includes(searchTerm) ||
                    (reg.projectTitle && reg.projectTitle.toLowerCase().includes(searchTerm));
                
                // Date filter
                const now = new Date();
                const regDate = reg.registrationDate;
                let matchesDate = true;
                
                if (filterValue === 'today') {
                    matchesDate = 
                        regDate.getDate() === now.getDate() &&
                        regDate.getMonth() === now.getMonth() &&
                        regDate.getFullYear() === now.getFullYear();
                } else if (filterValue === 'week') {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    matchesDate = regDate >= weekAgo;
                } else if (filterValue === 'month') {
                    matchesDate = 
                        regDate.getMonth() === now.getMonth() &&
                        regDate.getFullYear() === now.getFullYear();
                }
                
                return matchesSearch && matchesDate;
            });
            
            currentPage = 1;
            renderTable();
            renderPagination();
        }

        // Render the table with filtered data
        function renderTable() {
            loadingIndicator.style.display = 'none';
            
            if (filteredData.length === 0) {
                noData.style.display = 'block';
                tableBody.innerHTML = '';
                return;
            }
            
            noData.style.display = 'none';
            
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length);
            const pageData = filteredData.slice(startIndex, endIndex);
            
            tableBody.innerHTML = pageData.map(reg => `
                <tr>
                    <td>${reg.id}</td>
                    <td>${reg.fullName}</td>
                    <td>${reg.studentId}</td>
                    <td>${reg.specialization}</td>
                    <td>${reg.projectTitle ? '<span class="badge badge-success">Yes</span>' : '<span class="badge badge-info">No</span>'}</td>
                    <td>${formatDate(reg.registrationDate)}</td>
                    <td>
                        <button class="view-btn" data-id="${reg.id}">
                            <i class="fas fa-eye"></i> View
                        </button>
                    </td>
                </tr>
            `).join('');
            
            // Add event listeners to view buttons
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', () => showDetails(btn.dataset.id));
            });
        }

        // Render pagination controls
        function renderPagination() {
            const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
            
            if (totalPages <= 1) {
                pagination.innerHTML = '';
                return;
            }
            
            let paginationHTML = '';
            
            // Previous button
            paginationHTML += `
                <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
                    <i class="fas fa-chevron-left"></i>
                </button>
            `;
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML += `
                    <button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                        ${i}
                    </button>
                `;
            }
            
            // Next button
            paginationHTML += `
                <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
                    <i class="fas fa-chevron-right"></i>
                </button>
            `;
            
            pagination.innerHTML = paginationHTML;
            
            // Add event listeners to page buttons
            document.querySelectorAll('.page-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentPage = parseInt(btn.dataset.page);
                    renderTable();
                    renderPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
        }

        // Show details in modal
        function showDetails(regId) {
            const registration = allRegistrations.find(reg => reg.id === regId);
            
            if (!registration) return;
            
            modalBody.innerHTML = `
                <div class="detail-row">
                    <div class="detail-label">Registration ID</div>
                    <div class="detail-value">${registration.id}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Full Name</div>
                    <div class="detail-value">${registration.fullName}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Student ID</div>
                    <div class="detail-value">${registration.studentId}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Phone Number</div>
                    <div class="detail-value">${registration.phone}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Specialization</div>
                    <div class="detail-value">${registration.specialization}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Project Title</div>
                    <div class="detail-value">${registration.projectTitle || 'No project submitted'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Areas of Interest</div>
                    <div class="detail-value">
                        <div class="interests-container">
                            ${registration.interests.length > 0 ? 
                                registration.interests.map(int => `<span class="interest-tag">${int}</span>`).join('') : 
                                'No interests specified'}
                        </div>
                    </div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Registration Date</div>
                    <div class="detail-value">${formatDateTime(registration.registrationDate)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Raw Message</div>
                    <div class="detail-value" style="white-space: pre-wrap; font-family: monospace;">${registration.rawMessage}</div>
                </div>
            `;
            
            detailModal.style.display = 'flex';
        }

        // Update statistics
        function updateStats() {
            totalRegistrations.textContent = allRegistrations.length;
            
            const today = new Date();
            const todayCount = allRegistrations.filter(reg => {
                const regDate = reg.registrationDate;
                return regDate.getDate() === today.getDate() && 
                       regDate.getMonth() === today.getMonth() && 
                       regDate.getFullYear() === today.getFullYear();
            }).length;
            todayRegistrations.textContent = todayCount;
            
            const specializations = new Set(allRegistrations.map(reg => reg.specialization));
            uniqueSpecializations.textContent = specializations.size;
            
            const withProjectsCount = allRegistrations.filter(reg => reg.projectTitle).length;
            withProjects.textContent = withProjectsCount;
        }

        // Export data to CSV
        function exportData() {
            if (filteredData.length === 0) {
                alert('No data to export');
                return;
            }
            
            const headers = [
                'Registration ID',
                'Full Name',
                'Student ID',
                'Phone',
                'Specialization',
                'Project Title',
                'Interests',
                'Registration Date'
            ];
            
            const csvRows = [
                headers.join(','),
                ...filteredData.map(reg => [
                    `"${reg.id}"`,
                    `"${reg.fullName}"`,
                    `"${reg.studentId}"`,
                    `"${reg.phone}"`,
                    `"${reg.specialization}"`,
                    `"${reg.projectTitle || ''}"`,
                    `"${reg.interests.join(', ')}"`,
                    `"${formatDateTime(reg.registrationDate)}"`
                ].join(','))
            ];
            
            const csvContent = csvRows.join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `innovex_registrations_${formatDate(new Date())}.csv`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Helper functions
        function formatDate(date) {
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }

        function formatDateTime(date) {
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Mock data generator for demonstration
        function generateMockData(count) {
            const specializations = [
                'Computer Science',
                'Software Engineering',
                'Artificial Intelligence',
                'Networking',
                'Telecommunications',
                'Data Science',
                'Cybersecurity'
            ];
            
            const interests = [
                'Artificial Intelligence',
                'Web Development',
                'Cybersecurity',
                'Data Science',
                'IoT',
                'Cloud Computing',
                'Electronics',
                'Networking'
            ];
            
            const projects = [
                'Smart Campus System',
                'AI-Based Medical Diagnosis',
                'Blockchain Voting System',
                'IoT Home Automation',
                'E-Commerce Platform',
                'Social Media Analytics',
                'Autonomous Robot',
                'Cybersecurity Framework',
                null, null, null // Some with no project
            ];
            
            const mockMessages = [];
            const now = new Date();
            
            for (let i = 0; i < count; i++) {
                const daysAgo = Math.floor(Math.random() * 30);
                const date = new Date(now);
                date.setDate(date.getDate() - daysAgo);
                
                const specialization = specializations[Math.floor(Math.random() * specializations.length)];
                const project = projects[Math.floor(Math.random() * projects.length)];
                const numInterests = Math.floor(Math.random() * 4) + 1;
                const selectedInterests = [];
                
                for (let j = 0; j < numInterests; j++) {
                    const interest = interests[Math.floor(Math.random() * interests.length)];
                    if (!selectedInterests.includes(interest)) {
                        selectedInterests.push(interest);
                    }
                }
                
                const message = `
📢 New INNOVEX Registration 📢

🔹 Name: Student ${i + 1}
🔹 Student ID: 20${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
🔹 Phone: +213${Math.floor(500000000 + Math.random() * 500000000)}
🔹 Specialization: ${specialization}
🔹 Project Title: ${project || 'N/A'}
🔹 Interests: ${selectedInterests.join(', ') || 'Not specified'}

🆔 Registration ID: INVX-${Math.random().toString(36).substr(2, 8).toUpperCase()}
📅 Registered at: ${date.toLocaleString()}
                `;
                
                mockMessages.push({
                    message_id: i + 1000,
                    text: message,
                    date: Math.floor(date.getTime() / 1000)
                });
            }
            
            return mockMessages;
        }
    </script>
</body>
</html>