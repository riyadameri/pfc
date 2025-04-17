const BOT_TOKEN = '7565218404:AAGLn6PEToEb8mhLnQ-NkJoD9t1DVgB_mX0';
const CHAT_ID = '1865245287';
const API_URL = 'https://api.telegram.org/bot' + BOT_TOKEN;

// fetch data from telegram boot

function fetchStudentDataFromTelegram() {}

let studentsData = [
    {
        registrationId: 'INVX-3A5B7D9F',
        fullName: 'John Smith',
        studentId: '20210001',
        phone: '9876543210',
        specialization: 'Computer Science',
        projectTitle: 'AI-Powered Learning System',
        interests: ['AI', 'Education'],
        registrationDate: '2023-05-15T10:30:00Z'
    },
    {
        registrationId: 'INVX-8C2D4E6A',
        fullName: 'Emily Johnson',
        studentId: '20210002',
        phone: '8765432109',
        specialization: 'Electrical Engineering',
        projectTitle: 'Smart Grid Optimization',
        interests: ['Sustainability', 'Energy'],
        registrationDate: '2023-05-16T14:45:00Z'
    },
    {
        registrationId: 'INVX-1B3D5F7H',
        fullName: 'Michael Brown',
        studentId: '20210003',
        phone: '7654321098',
        specialization: 'Mechanical Engineering',
        projectTitle: 'Automated Manufacturing System',
        interests: ['Robotics', 'Automation'],
        registrationDate: '2023-05-17T09:15:00Z'
    },
    {
        registrationId: 'INVX-9E1F3G5I',
        fullName: 'Sarah Wilson',
        studentId: '20210004',
        phone: '6543210987',
        specialization: 'Biotechnology',
        projectTitle: 'CRISPR Gene Editing',
        interests: ['Healthcare', 'Genetics'],
        registrationDate: '2023-05-18T11:20:00Z'
    },
    {
        registrationId: 'INVX-4C6E8G0K',
        fullName: 'David Lee',
        studentId: '20210005',
        phone: '5432109876',
        specialization: 'Business Administration',
        projectTitle: 'Blockchain in Finance',
        interests: ['Finance', 'Blockchain'],
        registrationDate: '2023-05-19T16:30:00Z'
    },
    {
        registrationId: 'INVX-2D4F6H8J',
        fullName: 'Jessica Martinez',
        studentId: '20210006',
        phone: '4321098765',
        specialization: 'Computer Science',
        projectTitle: 'Cybersecurity Framework',
        interests: ['Security', 'Networking'],
        registrationDate: '2023-05-20T13:10:00Z'
    },
    {
        registrationId: 'INVX-7E9G1I3K',
        fullName: 'Robert Taylor',
        studentId: '20210007',
        phone: '3210987654',
        specialization: 'Electrical Engineering',
        projectTitle: 'IoT for Smart Cities',
        interests: ['IoT', 'Sustainability'],
        registrationDate: '2023-05-21T15:45:00Z'
    },
    {
        registrationId: 'INVX-5F7H9J1L',
        fullName: 'Amanda Anderson',
        studentId: '20210008',
        phone: '2109876543',
        specialization: 'Mechanical Engineering',
        projectTitle: 'Renewable Energy Systems',
        interests: ['Sustainability', 'Energy'],
        registrationDate: '2023-05-22T10:00:00Z'
    },
    {
        registrationId: 'INVX-3G5I7K9M',
        fullName: 'Daniel Thomas',
        studentId: '20210009',
        phone: '1098765432',
        specialization: 'Biotechnology',
        projectTitle: 'Stem Cell Research',
        interests: ['Healthcare', 'Genetics'],
        registrationDate: '2023-05-23T14:20:00Z'
    },
    {
        registrationId: 'INVX-8H0J2L4N',
        fullName: 'Olivia Garcia',
        studentId: '20210010',
        phone: '0987654321',
        specialization: 'Business Administration',
        projectTitle: 'Digital Marketing Analytics',
        interests: ['Marketing', 'Data Analysis'],
        registrationDate: '2023-05-24T12:30:00Z'
    },
    {
        registrationId: 'INVX-MUAVVOMA',
        fullName: 'Hadjseyd Narimen',
        studentId: '39567518',
        phone: '0675386373',
        specialization: 'English',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T21:42:18Z'
    },
    {
        registrationId: 'INVX-8CVRA55G',
        fullName: 'Hadjseyd Merina',
        studentId: '39316014',
        phone: '0699632722',
        specialization: 'French Student',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T21:45:31Z'
    },
    {
        registrationId: 'INVX-DWE2TML7',
        fullName: 'Youssef',
        studentId: '39521314',
        phone: '0696717277',
        specialization: 'الكتروتيكنيك',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-16T21:47:43Z'
    },
    {
        registrationId: 'INVX-Q4OM3G1B',
        fullName: 'ISmail Attab',
        studentId: '39047459',
        phone: '0660857973',
        specialization: 'Computer Science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'cloud'],
        registrationDate: '2025-04-16T22:55:06Z'
    },
    {
        registrationId: 'INVX-P9J2G7RY',
        fullName: 'BENETTOUATI Mohammed zakaria',
        studentId: '39314310',
        phone: '0697851037',
        specialization: 'Electric Engineering',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'electronics', 'networking'],
        registrationDate: '2025-04-16T23:31:16Z'
    },
    {
        registrationId: 'INVX-YDUQ7RLC',
        fullName: 'Malek Louahem',
        studentId: '39339013',
        phone: '0542822113',
        specialization: 'Science Economic',
        projectTitle: '.',
        interests: ['ai'],
        registrationDate: '2025-04-16T23:45:14Z'
    },
    {
        registrationId: 'INVX-4X9T7AK8',
        fullName: 'Ouissal Biaa',
        studentId: '39057236',
        phone: '0665164630',
        specialization: 'Renewable Energies in Mechanics',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T07:32:49Z'
    },
    {
        registrationId: 'INVX-BJMDZT50',
        fullName: 'Oumelkhir MESSAOUDI',
        studentId: '39058591',
        phone: '0673437237',
        specialization: 'Électronique système Embarqué',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T09:27:16Z'
    },
    {
        registrationId: 'INVX-CVEF6V8T',
        fullName: 'SAYAH YAKOUB',
        studentId: '39287316',
        phone: '0669481751',
        specialization: 'Oil and Gas Production',
        projectTitle: 'Non',
        interests: ['ai'],
        registrationDate: '2025-04-17T11:06:20Z'
    },
    {
        registrationId: 'INVX-511T1LUZ',
        fullName: 'Nouciba bouaka',
        studentId: '39048315',
        phone: '0699731012',
        specialization: 'Electronique',
        projectTitle: 'لست مشاركا انا M1اليكترونيك',
        interests: ['ai', 'web', 'cyber', 'data', 'electronics', 'networking'],
        registrationDate: '2025-04-17T11:55:23Z'
    },
    {
        registrationId: 'INVX-NNZBFRPH',
        fullName: 'bougrine mohammed elarbi',
        studentId: '39089758',
        phone: '0697423131',
        specialization: 'INSTRUMONTATIONS',
        projectTitle: 'NO',
        interests: ['ai'],
        registrationDate: '2025-04-17T12:35:55Z'
    },
    {
        registrationId: 'INVX-LSYRNGK3',
        fullName: 'Kadai mohammed',
        studentId: '20213102',
        phone: '0664139461',
        specialization: 'System et Instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T14:02:46Z'
    },
    {
        registrationId: 'INVX-CA3FLUUC',
        fullName: 'Bouchakour chaima',
        studentId: '39053356',
        phone: '0664084223',
        specialization: 'Master 1 électronique',
        projectTitle: 'IA drone',
        interests: ['electronics'],
        registrationDate: '2025-04-17T14:04:59Z'
    },
    {
        registrationId: 'INVX-U2JN8N5X',
        fullName: 'bouterfif manar',
        studentId: '39048518',
        phone: '0659158487',
        specialization: 'Droit d\'affaire',
        projectTitle: 'Maraa online',
        interests: ['networking'],
        registrationDate: '2025-04-17T14:08:30Z'
    },
    {
        registrationId: 'INVX-1ZBCPWJW',
        fullName: 'Bouhnk Doua',
        studentId: '39059396',
        phone: '0655878701',
        specialization: 'Aoutomatique',
        projectTitle: 'WASTE SORTINE MACHINE',
        interests: ['electronics'],
        registrationDate: '2025-04-17T14:08:34Z'
    },
    {
        registrationId: 'INVX-RGY0MTMF',
        fullName: 'Adnane hamada',
        studentId: '10996110',
        phone: '0656231880',
        specialization: 'Instrument et System',
        projectTitle: 'EdraQ club',
        interests: ['ai', 'web', 'electronics'],
        registrationDate: '2025-04-17T14:11:02Z'
    },
    {
        registrationId: 'INVX-5K06O3CN',
        fullName: 'Brahmi doua',
        studentId: '39577807',
        phone: '0555305425',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T14:18:49Z'
    },
    {
        registrationId: 'INVX-ZMEESAED',
        fullName: 'Salsabil Benhammouda',
        studentId: '39055574',
        phone: '0674734782',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T14:25:10Z'
    },
    {
        registrationId: 'INVX-Z6FGJ1RA',
        fullName: 'Reguig kanza',
        studentId: '39045983',
        phone: '0656554437',
        specialization: 'Telecommunications',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T14:27:35Z'
    },
    {
        registrationId: 'INVX-8CGX7GLE',
        fullName: 'MONCEF BENRAS',
        studentId: '39047661',
        phone: '0667215130',
        specialization: 'Instrumentation',
        projectTitle: 'Scmdd',
        interests: ['electronics'],
        registrationDate: '2025-04-17T14:31:10Z'
    },
    {
        registrationId: 'INVX-6YQ00929',
        fullName: 'Larouci Mohamed abdeldjalil',
        studentId: '39048913',
        phone: '0663009923',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T14:49:18Z'
    },
    {
        registrationId: 'INVX-PQCRRT6P',
        fullName: 'Toufik Salhi',
        studentId: '39049986',
        phone: '0665727635',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T14:56:03Z'
    },
    {
        registrationId: 'INVX-5F03QAPW',
        fullName: 'Kadri abdelbaki',
        studentId: '39051273',
        phone: '0798986899',
        specialization: 'Instrumentation M1',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T15:00:33Z'
    },
    {
        registrationId: 'INVX-WR5J6K70',
        fullName: 'Selloum mohamed amine',
        studentId: '35010685',
        phone: '0774834991',
        specialization: 'Médecine',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T15:09:44Z'
    },
    {
        registrationId: 'INVX-T8X64PC8',
        fullName: 'Ghettas Amina Wafa',
        studentId: '39055167',
        phone: '0698815956',
        specialization: 'Automation and Systems',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T15:19:53Z'
    },
    {
        registrationId: 'INVX-AKJ7KFUD',
        fullName: 'Ouddane ahmed louai',
        studentId: '39059588',
        phone: '0658611093',
        specialization: 'L3 Auto',
        projectTitle: 'جهاز تحكم ذكي للأجهزة عن بعد',
        interests: ['ai', 'web', 'data', 'electronics'],
        registrationDate: '2025-04-17T15:22:17Z'
    },
    {
        registrationId: 'INVX-L2RJPJM6',
        fullName: 'Ouddane hossin',
        studentId: '39059588',
        phone: '0658611093',
        specialization: 'Auto',
        projectTitle: 'جهاز تحكم ذكي للأجهزة عن بعد',
        interests: ['ai', 'cyber', 'data', 'cloud'],
        registrationDate: '2025-04-17T15:23:20Z'
    },
    {
        registrationId: 'INVX-ING7RE5S',
        fullName: 'Benchenna Youcef',
        studentId: '39047690',
        phone: '0667454671',
        specialization: 'M2 Electronic of Embedded Systems',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T15:36:37Z'
    },
    {
        registrationId: 'INVX-0V9YKK8G',
        fullName: 'Kachi djemoi',
        studentId: '39059374',
        phone: '0657459433',
        specialization: 'Elctronique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T15:46:50Z'
    },
    {
        registrationId: 'INVX-NKA9EAXX',
        fullName: 'bouzidi abdelkahar',
        studentId: '39046468',
        phone: '0672525505',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T15:48:06Z'
    },
    {
        registrationId: 'INVX-LSRK9Y9K',
        fullName: 'Koull oussama',
        studentId: '39050678',
        phone: '0795701360',
        specialization: 'Embedded Systems Electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T15:52:49Z'
    },
    {
        registrationId: 'INVX-Q0VDPGYY',
        fullName: 'Lamri Abdlatif',
        studentId: '09061044',
        phone: '0664006515',
        specialization: 'Instrument',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T16:03:30Z'
    },
    {
        registrationId: 'INVX-BTB5XD7P',
        fullName: 'Ben ghoulia ichrak',
        studentId: '39333812',
        phone: '0667405795',
        specialization: 'Raffinage et Pétrochimie',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T16:39:22Z'
    },
    {
        registrationId: 'INVX-51YMBYIN',
        fullName: 'Kezzal ouissam',
        studentId: '39299806',
        phone: '0779347079',
        specialization: 'L2 Electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T16:57:11Z'
    },
    {
        registrationId: 'INVX-XCIDRC8Q',
        fullName: 'عوزير غدير علي',
        studentId: '39064770',
        phone: '0666788038',
        specialization: 'الكترونيك',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T16:59:22Z'
    },
    {
        registrationId: 'INVX-T1UP551A',
        fullName: 'Benaid hala',
        studentId: '39338404',
        phone: '0669472573',
        specialization: 'Génie Civil',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:03:54Z'
    },
    {
        registrationId: 'INVX-ULWFK346',
        fullName: 'BENBRAHIM AYOUB',
        studentId: '39344015',
        phone: '0668722813',
        specialization: 'Petroleum Instrumentation',
        projectTitle: 'Nothing',
        interests: ['data', 'iot', 'networking'],
        registrationDate: '2025-04-17T17:04:10Z'
    },
    {
        registrationId: 'INVX-R83M8E1Q',
        fullName: '202239577504',
        studentId: '39577504',
        phone: '0696290036',
        specialization: 'Automatique',
        projectTitle: 'Smart car',
        interests: [],
        registrationDate: '2025-04-17T17:08:30Z'
    },
    {
        registrationId: 'INVX-8ZV0S4IM',
        fullName: 'Guemmoula Seif Eddine',
        studentId: '39323809',
        phone: '0668426902',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T17:08:39Z'
    },
    {
        registrationId: 'INVX-AA548B0L',
        fullName: 'Abdeljawad abdi',
        studentId: '39048447',
        phone: '0549614815',
        specialization: 'Électronique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:08:58Z'
    },
    {
        registrationId: 'INVX-063CHDYW',
        fullName: 'bougherara oussama',
        studentId: '39057970',
        phone: '0796506447',
        specialization: 'Electronics, Embedded Systems',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:09:59Z'
    },
    {
        registrationId: 'INVX-R252QKOV',
        fullName: 'ahmed beddaif',
        studentId: '39077349',
        phone: '0675593780',
        specialization: 'Electronic Systems',
        projectTitle: 'Protection automatisée des distributeurs',
        interests: [],
        registrationDate: '2025-04-17T17:11:42Z'
    },
    {
        registrationId: 'INVX-4DL2JHZE',
        fullName: 'Haoued Mouissa Zouhair',
        studentId: '39052700',
        phone: '0665153640',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:12:50Z'
    },
    {
        registrationId: 'INVX-58G5CB7Q',
        fullName: 'ahmed beddaif',
        studentId: '39077349',
        phone: '0675593780',
        specialization: 'Electronic Systems',
        projectTitle: 'Protection automatisée des distributeurs',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:13:26Z'
    },
    {
        registrationId: 'INVX-UBWMWFET',
        fullName: 'Khemgani Mohammed Arafa',
        studentId: '39045425',
        phone: '0675278804',
        specialization: 'Electronic Embedded Systems',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T17:25:52Z'
    },
    {
        registrationId: 'INVX-N67DY9P6',
        fullName: 'Chebouat bilal',
        studentId: '39031232',
        phone: '0666295378',
        specialization: 'Automatic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:20:33Z'
    },
    {
        registrationId: 'INVX-UHQ5120J',
        fullName: 'Bouchiba sakina',
        studentId: '39334309',
        phone: '0658656868',
        specialization: 'Génie Civil',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:24:30Z'
    },
    {
        registrationId: 'INVX-TM31V1Z2',
        fullName: 'Meriouma houssam elddine',
        studentId: '39337612',
        phone: '0676586860',
        specialization: 'Automatic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:28:42Z'
    },
    {
        registrationId: 'INVX-EH7DWSZ5',
        fullName: 'Bourenane mohammed saleh',
        studentId: '39050927',
        phone: '0675305163',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:29:09Z'
    },
    {
        registrationId: 'INVX-J8CMT20Q',
        fullName: 'Zatout Ahmed Aymane',
        studentId: '39045319',
        phone: '0674957201',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T17:34:53Z'
    },
    {
        registrationId: 'INVX-M5CUAYAG',
        fullName: 'Djarroudib nour Melek',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum Instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'networking'],
        registrationDate: '2025-04-17T17:38:19Z'
    },
    {
        registrationId: 'INVX-11PFBK19',
        fullName: 'AKCHICHE Mohamed Aymen',
        studentId: '39307705',
        phone: '0698841788',
        specialization: 'Computer Science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data'],
        registrationDate: '2025-04-17T18:02:43Z'
    },
    {
        registrationId: 'INVX-WBLOP524',
        fullName: 'Yagoub Zakaria',
        studentId: '39543406',
        phone: '0696901404',
        specialization: 'Electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics'],
        registrationDate: '2025-04-17T18:24:18Z'
    },
    {
        registrationId: 'INVX-JW5D0C7Y',
        fullName: 'Anfalbouhafs',
        studentId: '39052698',
        phone: '0676113209',
        specialization: 'الكترونيك',
        projectTitle: 'No',
        interests: ['electronics'],
        registrationDate: '2025-04-17T18:26:02Z'
    },    {
        registrationId: 'INVX-1',
        fullName: 'Ameri riad youcef',
        studentId: '39540402',
        phone: '0559581957',
        specialization: 'st',
        projectTitle: 'No',
        interests: ['ai', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T18:26:02Z'
    }
];

// DOM Elements
const studentsTableBody = document.getElementById('studentsTableBody');
const totalRegistrations = document.getElementById('totalRegistrations');
const activeProjects = document.getElementById('activeProjects');
const topSpecialization = document.getElementById('topSpecialization');
const pendingActions = document.getElementById('pendingActions');
const searchInput = document.querySelector('.search-box input');
const specializationFilter = document.getElementById('specialization-filter');
const interestFilter = document.getElementById('interest-filter');
const dateFilter = document.getElementById('date-filter');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');
const startItemSpan = document.getElementById('startItem');
const endItemSpan = document.getElementById('endItem');
const totalItemsSpan = document.getElementById('totalItems');
const studentModal = document.getElementById('studentModal');
const closeModalBtn = document.querySelector('.close-modal');

// Pagination variables
let currentPage = 1;
const rowsPerPage = 5;

// Initialize dashboard
function initDashboard() {
    updateStats();
    renderStudentsTable();
    setupEventListeners();
}

// Update dashboard statistics
function updateStats() {
    totalRegistrations.textContent = studentsData.length;
    activeProjects.textContent = studentsData.filter(student => student.projectTitle).length;
    
    // Find top specialization
    const specializations = studentsData.reduce((acc, student) => {
        acc[student.specialization] = (acc[student.specialization] || 0) + 1;
        return acc;
    }, {});
    
    const topSpec = Object.entries(specializations).sort((a, b) => b[1] - a[1])[0];
    topSpecialization.textContent = topSpec ? `${topSpec[0]} (${topSpec[1]})` : '-';
    
    pendingActions.textContent = '3'; // Placeholder value
}

// Render students table with pagination
function renderStudentsTable(filteredData = studentsData) {
    // Apply filters
    let filteredStudents = [...filteredData];
    
    // Apply specialization filter
    if (specializationFilter.value !== 'all') {
        filteredStudents = filteredStudents.filter(
            student => student.specialization === specializationFilter.value
        );
    }
    
    // Apply interest filter
    if (interestFilter.value !== 'all') {
        filteredStudents = filteredStudents.filter(
            student => student.interests.includes(interestFilter.value)
        );
    }
    
    // Apply date filter
    if (dateFilter.value !== 'all') {
        const now = new Date();
        filteredStudents = filteredStudents.filter(student => {
            const regDate = new Date(student.registrationDate);
            
            switch (dateFilter.value) {
                case 'today':
                    return regDate.toDateString() === now.toDateString();
                case 'week':
                    const weekStart = new Date(now);
                    weekStart.setDate(now.getDate() - now.getDay());
                    return regDate >= weekStart;
                case 'month':
                    return regDate.getMonth() === now.getMonth() && 
                           regDate.getFullYear() === now.getFullYear();
                default:
                    return true;
            }
        });
    }
    
    // Apply search
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student => 
            student.fullName.toLowerCase().includes(searchTerm) ||
            student.studentId.toLowerCase().includes(searchTerm) ||
            student.registrationId.toLowerCase().includes(searchTerm)
        );
    }
    
    // Calculate pagination
    const totalItems = filteredStudents.length;
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    
    // Adjust current page if needed
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    } else if (currentPage < 1) {
        currentPage = 1;
    }
    
    // Update pagination controls
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    currentPageSpan.textContent = currentPage;
    
    // Calculate start and end indexes
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, totalItems);
    
    // Update pagination info
    startItemSpan.textContent = totalItems > 0 ? startIndex + 1 : 0;
    endItemSpan.textContent = endIndex;
    totalItemsSpan.textContent = totalItems;
    
    // Clear table
    studentsTableBody.innerHTML = '';
    
    // Add rows for current page
    filteredStudents.slice(startIndex, endIndex).forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.registrationId}</td>
            <td>${student.fullName}</td>
            <td>${student.studentId}</td>
            <td>${student.specialization}</td>
            <td>${student.projectTitle || '-'}</td>
            <td>${student.interests.join(', ')}</td>
            <td>${formatDate(student.registrationDate)}</td>
            <td>
                <button class="action-btn view-btn" data-id="${student.registrationId}">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `;
        
        studentsTableBody.appendChild(row);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => showStudentDetails(btn.dataset.id));
    });
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Show student details modal
function showStudentDetails(registrationId) {
    const student = studentsData.find(s => s.registrationId === registrationId);
    if (!student) return;
    
    document.getElementById('modalStudentName').textContent = student.fullName;
    document.getElementById('modalRegId').textContent = student.registrationId;
    document.getElementById('modalStudentId').textContent = student.studentId;
    document.getElementById('modalPhone').textContent = student.phone;
    document.getElementById('modalSpecialization').textContent = student.specialization;
    document.getElementById('modalRegDate').textContent = formatDate(student.registrationDate);
    document.getElementById('modalProjectTitle').textContent = student.projectTitle || 'Not specified';
    document.getElementById('modalInterests').textContent = student.interests.join(', ') || 'Not specified';
    
    studentModal.style.display = 'flex';
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', () => {
        currentPage = 1;
        renderStudentsTable();
    });
    
    // Filter dropdowns
    specializationFilter.addEventListener('change', () => {
        currentPage = 1;
        renderStudentsTable();
    });
    
    interestFilter.addEventListener('change', () => {
        currentPage = 1;
        renderStudentsTable();
    });
    
    dateFilter.addEventListener('change', () => {
        currentPage = 1;
        renderStudentsTable();
    });
    
    // Pagination buttons
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderStudentsTable();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(studentsData.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderStudentsTable();
        }
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', () => {
        studentModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === studentModal) {
            studentModal.style.display = 'none';
        }
    });
    
    // Export button
    document.querySelector('.export-btn').addEventListener('click', exportData);
}

// Export data as CSV
function exportData() {
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add header row
    const headers = [
        'Registration ID', 'Full Name', 'Student ID', 'Phone', 
        'Specialization', 'Project Title', 'Interests', 'Registration Date'
    ];
    csvContent += headers.join(',') + "\r\n";
    
    // Add data rows
    studentsData.forEach(student => {
        const row = [
            student.registrationId,
            student.fullName,
            student.studentId,
            student.phone,
            student.specialization,
            student.projectTitle || '',
            student.interests.join('; '),
            new Date(student.registrationDate).toLocaleString()
        ].map(field => `"${field}"`).join(',');
        
        csvContent += row + "\r\n";
    });
    
    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "innovex_registrations.csv");
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    document.body.removeChild(link);
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard); 