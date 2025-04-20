const BOT_TOKEN = '7565218404:AAGLn6PEToEb8mhLnQ-NkJoD9t1DVgB_mX0';
const CHAT_ID = '1865245287';
const API_URL = 'https://api.telegram.org/bot' + BOT_TOKEN;

// Sample data including all the provided registrations

const studentsData = [
    {
        registrationId: 'INVX-MUAVVOMA',
        fullName: 'Hadjseyd Narimen',
        studentId: '39567518',
        phone: '0675386373',
        specialization: 'English',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T21:42:18',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'INVX-8CVRA55G',
        fullName: 'Hadjseyd Merina',
        studentId: '39316014',
        phone: '0699632722',
        specialization: 'french student',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T21:45:31'
    },
    {
        registrationId: 'INVX-DWE2TML7',
        fullName: 'Youssef',
        studentId: '39521314',
        phone: '0696717277',
        specialization: 'الكتروتيكنيك',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-16T21:47:43'
    },
    {
        registrationId: 'INVX-Q4OM3G1B',
        fullName: 'ISmail Attab',
        studentId: '39047459',
        phone: '0660857973',
        specialization: 'Computer science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'cloud'],
        registrationDate: '2025-04-16T22:55:06'
    },
    {
        registrationId: 'INVX-P9J2G7RY',
        fullName: 'BENETTOUATI Mohammed zakaria',
        studentId: '39314310',
        phone: '0697851037',
        specialization: 'Electric engineering',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'electronics', 'networking'],
        registrationDate: '2025-04-16T23:31:16'
    },
    {
        registrationId: 'INVX-YDUQ7RLC',
        fullName: 'Malek Louahem',
        studentId: '39339013',
        phone: '0542822113',
        specialization: 'Science economic',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T23:45:14'
    },
    {
        registrationId: 'INVX-4X9T7AK8',
        fullName: 'Ouissal Biaa',
        studentId: '39057236',
        phone: '0665164630',
        specialization: 'Renewable energies in mechanics',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T07:32:49'
    },
    {
        registrationId: 'INVX-BJMDZT50',
        fullName: 'Oumelkhir MESSAOUDI',
        studentId: '39058591',
        phone: '0673437237',
        specialization: 'Électronique système Embarqué',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T09:27:16'
    },
    {
        registrationId: 'INVX-CVEF6V8T',
        fullName: 'SAYAH YAKOUB',
        studentId: '39287316',
        phone: '0669481751',
        specialization: 'Oil and gas production',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T11:06:20'
    },
    {
        registrationId: 'INVX-511T1LUZ',
        fullName: 'Nouciba bouaka',
        studentId: '39048315',
        phone: '0699731012',
        specialization: 'Electronique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'electronics', 'networking'],
        registrationDate: '2025-04-17T11:55:23'
    },
    {
        registrationId: 'INVX-NNZBFRPH',
        fullName: 'bougrine mohammed elarbi',
        studentId: '39089758',
        phone: '0697423131',
        specialization: 'INSTRUMONTATIONS',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T12:35:55'
    },
    {
        registrationId: 'INVX-LSYRNGK3',
        fullName: 'Kadai mohammed',
        studentId: '20213102',
        phone: '0664139461',
        specialization: 'System et instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T14:02:46'
    },
    {
        registrationId: 'INVX-CA3FLUUC',
        fullName: 'Bouchakour chaima',
        studentId: '39053356',
        phone: '0664084223',
        specialization: 'Master 1 électronique',
        projectTitle: 'IA drone',
        interests: ['electronics'],
        registrationDate: '2025-04-17T14:04:59'
    },
    {
        registrationId: 'INVX-U2JN8N5X',
        fullName: 'bouterfif manar',
        studentId: '39048518',
        phone: '0659158487',
        specialization: 'droit d\'affaire',
        projectTitle: 'Maraa online',
        interests: ['networking'],
        registrationDate: '2025-04-17T14:08:30'
    },
    {
        registrationId: 'INVX-1ZBCPWJW',
        fullName: 'Bouhnk Doua',
        studentId: '39059396',
        phone: '0655878701',
        specialization: 'Aoutomatique',
        projectTitle: 'WASTE SORTINE MACHINE',
        interests: ['electronics'],
        registrationDate: '2025-04-17T14:08:34'
    },
    {
        registrationId: 'INVX-RGY0MTMF',
        fullName: 'Adnane hamada',
        studentId: '10996110',
        phone: '0656231880',
        specialization: 'Instrument et system',
        projectTitle: 'EdraQ club',
        interests: ['ai', 'web', 'electronics'],
        registrationDate: '2025-04-17T14:11:02'
    },
    {
        registrationId: 'INVX-5K06O3CN',
        fullName: 'Brahmi doua',
        studentId: '39577807',
        phone: '0555305425',
        specialization: 'informatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T14:18:49'
    },
    {
        registrationId: 'INVX-ZMEESAED',
        fullName: 'Salsabil Benhammouda',
        studentId: '39055574',
        phone: '0674734782',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T14:25:10'
    },
    {
        registrationId: 'INVX-Z6FGJ1RA',
        fullName: 'Reguig kanza',
        studentId: '39045983',
        phone: '0656554437',
        specialization: 'Telecommunications',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T14:27:35'
    },
    {
        registrationId: 'INVX-8CGX7GLE',
        fullName: 'MONCEF BENRAS',
        studentId: '39047661',
        phone: '0667215130',
        specialization: 'Instrumentation',
        projectTitle: 'Scmdd',
        interests: ['electronics'],
        registrationDate: '2025-04-17T14:31:10'
    },
    {
        registrationId: 'INVX-6YQ00929',
        fullName: 'Larouci Mohamed abdeldjalil',
        studentId: '39048913',
        phone: '0663009923',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T14:49:18'
    },
    {
        registrationId: 'INVX-PQCRRT6P',
        fullName: 'Toufik Salhi',
        studentId: '39049986',
        phone: '0665727635',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T14:56:03'
    },
    {
        registrationId: 'INVX-5F03QAPW',
        fullName: 'Kadri abdelbaki',
        studentId: '39051273',
        phone: '0798986899',
        specialization: 'instrumentation M1',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T15:00:33'
    },
    {
        registrationId: 'INVX-WR5J6K70',
        fullName: 'Selloum mohamed amine',
        studentId: '35010685',
        phone: '0774834991',
        specialization: 'Médecine',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T15:09:44'
    },
    {
        registrationId: 'INVX-T8X64PC8',
        fullName: 'Ghettas Amina Wafa',
        studentId: '39055167',
        phone: '0698815956',
        specialization: 'Automation and systems',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T15:19:53'
    },
    {
        registrationId: 'INVX-AKJ7KFUD',
        fullName: 'Ouddane ahmed louai',
        studentId: '39059588',
        phone: '0658611093',
        specialization: 'L3 auto',
        projectTitle: 'جهاز تحكم ذكي للأجهزة عن بعد',
        interests: ['ai', 'web', 'data', 'electronics'],
        registrationDate: '2025-04-17T15:22:17'
    },
    {
        registrationId: 'INVX-L2RJPJM6',
        fullName: 'Ouddane hossin',
        studentId: '39059588',
        phone: '0658611093',
        specialization: 'Auto',
        projectTitle: 'جهاز تحكم ذكي للأجهزة عن بعد',
        interests: ['ai', 'cyber', 'data', 'cloud'],
        registrationDate: '2025-04-17T15:23:20'
    },
    {
        registrationId: 'INVX-ING7RE5S',
        fullName: 'Benchenna Youcef',
        studentId: '39047690',
        phone: '0667454671',
        specialization: 'M2 Electronic of Embedded Systems',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T15:36:37'
    },
    {
        registrationId: 'INVX-0V9YKK8G',
        fullName: 'Kachi djemoi',
        studentId: '39059374',
        phone: '0657459433',
        specialization: 'Elctronique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T15:46:50'
    },
    {
        registrationId: 'INVX-NKA9EAXX',
        fullName: 'bouzidi abdelkahar',
        studentId: '39046468',
        phone: '0672525505',
        specialization: 'electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T15:48:06'
    },
    {
        registrationId: 'INVX-LSRK9Y9K',
        fullName: 'Koull oussama',
        studentId: '39050678',
        phone: '0795701360',
        specialization: 'Embedded systems electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T15:52:49'
    },
    {
        registrationId: 'INVX-Q0VDPGYY',
        fullName: 'Lamri Abdlatif',
        studentId: '09061044',
        phone: '0664006515',
        specialization: 'Instrument',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T16:03:30'
    },
    {
        registrationId: 'INVX-BTB5XD7P',
        fullName: 'Ben ghoulia ichrak',
        studentId: '39333812',
        phone: '0667405795',
        specialization: 'Raffinage et pétrochimie',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T16:39:22'
    },
    {
        registrationId: 'INVX-51YMBYIN',
        fullName: 'Kezzal ouissam',
        studentId: '39299806',
        phone: '0779347079',
        specialization: 'L2 electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T16:57:11'
    },
    {
        registrationId: 'INVX-XCIDRC8Q',
        fullName: 'عوزير غدير علي',
        studentId: '39064770',
        phone: '0666788038',
        specialization: 'الكترونيك',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T16:59:22'
    },
    {
        registrationId: 'INVX-T1UP551A',
        fullName: 'Benaid hala',
        studentId: '39338404',
        phone: '0669472573',
        specialization: 'Génie civil',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:03:54'
    },
    {
        registrationId: 'INVX-ULWFK346',
        fullName: 'BENBRAHIM AYOUB',
        studentId: '39344015',
        phone: '0668722813',
        specialization: 'Petroleum Instrumentation',
        projectTitle: 'N/A',
        interests: ['data', 'iot', 'networking'],
        registrationDate: '2025-04-17T17:04:10'
    },
    {
        registrationId: 'INVX-R83M8E1Q',
        fullName: '202239577504',
        studentId: '39577504',
        phone: '0696290036',
        specialization: 'Automatique',
        projectTitle: 'Smart car',
        interests: [],
        registrationDate: '2025-04-17T17:08:30'
    },
    {
        registrationId: 'INVX-8ZV0S4IM',
        fullName: 'Guemmoula Seif Eddine',
        studentId: '39323809',
        phone: '0668426902',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T17:08:39'
    },
    {
        registrationId: 'INVX-AA548B0L',
        fullName: 'Abdeljawad abdi',
        studentId: '39048447',
        phone: '0549614815',
        specialization: 'Électronique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:08:58'
    },
    {
        registrationId: 'INVX-063CHDYW',
        fullName: 'bougherara oussama',
        studentId: '39057970',
        phone: '0796506447',
        specialization: 'electronics , embedded systems',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:09:59'
    },
    {
        registrationId: 'INVX-R252QKOV',
        fullName: 'ahmed beddaif',
        studentId: '39077349',
        phone: '0675593780',
        specialization: 'Electronic systems',
        projectTitle: 'Protection automatisée des distributeurs',
        interests: [],
        registrationDate: '2025-04-17T17:11:42'
    },
    {
        registrationId: 'INVX-4DL2JHZE',
        fullName: 'Haoued Mouissa Zouhair',
        studentId: '39052700',
        phone: '0665153640',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:12:50'
    },
    {
        registrationId: 'INVX-58G5CB7Q',
        fullName: 'ahmed beddaif',
        studentId: '39077349',
        phone: '0675593780',
        specialization: 'Electronic systems',
        projectTitle: 'Protection automatisée des distributeurs',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:13:26'
    },
    {
        registrationId: 'INVX-UBWMWFET',
        fullName: 'Khemgani Mohammed Arafa',
        studentId: '39045425',
        phone: '0675278804',
        specialization: 'Electronic Embedded systems',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T17:25:52'
    },
    {
        registrationId: 'INVX-N67DY9P6',
        fullName: 'Chebouat bilal',
        studentId: '39031232',
        phone: '0666295378',
        specialization: 'Automatic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:20:33'
    },
    {
        registrationId: 'INVX-UHQ5120J',
        fullName: 'Bouchiba sakina',
        studentId: '39334309',
        phone: '0658656868',
        specialization: 'Génie civil',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:24:30'
    },
    {
        registrationId: 'INVX-TM31V1Z2',
        fullName: 'Meriouma houssam elddine',
        studentId: '39337612',
        phone: '0676586860',
        specialization: 'automatic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T17:28:42'
    },
    {
        registrationId: 'INVX-EH7DWSZ5',
        fullName: 'Bourenane mohammed saleh',
        studentId: '39050927',
        phone: '0675305163',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T17:29:09'
    },
    {
        registrationId: 'INVX-J8CMT20Q',
        fullName: 'Zatout Ahmed Aymane',
        studentId: '39045319',
        phone: '0674957201',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T17:34:53'
    },
    {
        registrationId: 'INVX-M5CUAYAG',
        fullName: 'Djarroudib nour Melek',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'networking'],
        registrationDate: '2025-04-17T17:38:19'
    },
    {
        registrationId: 'INVX-11PFBK19',
        fullName: 'AKCHICHE Mohamed Aymen',
        studentId: '39307705',
        phone: '0698841788',
        specialization: 'Computer science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data'],
        registrationDate: '2025-04-17T18:02:43'
    },
    {
        registrationId: 'INVX-WBLOP524',
        fullName: 'Yagoub Zakaria',
        studentId: '39543406',
        phone: '0696901404',
        specialization: 'Electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics'],
        registrationDate: '2025-04-17T18:24:18'
    },
    {
        registrationId: 'INVX-JW5D0C7Y',
        fullName: 'Anfalbouhafs',
        studentId: '39052698',
        phone: '0676113209',
        specialization: 'الكترونيك',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T18:26:02'
    },
    {
        registrationId: 'INVX-IG3AYWGD',
        fullName: 'Rouibi khalil',
        studentId: '39294917',
        phone: '0672841123',
        specialization: 'Wired and wireless telecommunications',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'iot', 'cloud', 'networking'],
        registrationDate: '2025-04-17T18:51:16'
    },
    {
        registrationId: 'INVX-KUBLYIV2',
        fullName: 'Louaar Abdelkader',
        studentId: '39346011',
        phone: '0662490967',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics'],
        registrationDate: '2025-04-17T19:20:08'
    },
    {
        registrationId: 'INVX-I1V2FY3P',
        fullName: 'Hocine Bekhdidja',
        studentId: '39335701',
        phone: '0699758713',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T19:32:16'
    },
    {
        registrationId: 'INVX-QH9PNPUD',
        fullName: 'Khaled Bekhdidja',
        studentId: '39335701',
        phone: '0699758713',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T19:34:23'
    },
    {
        registrationId: 'INVX-Z0GM7FDS',
        fullName: 'Fella Sayah',
        studentId: '39306816',
        phone: '0697512401',
        specialization: 'Electronic',
        projectTitle: 'The Smart Safety Helmet',
        interests: [],
        registrationDate: '2025-04-17T19:36:34'
    },
    {
        registrationId: 'INVX-E9D7TVDK',
        fullName: 'Laid Sayah',
        studentId: '39306816',
        phone: '0697512401',
        specialization: 'Electronic',
        projectTitle: 'The Smart Safety Helmet',
        interests: [],
        registrationDate: '2025-04-17T19:38:44'
    },
    {
        registrationId: 'INVX-TGQ82TOH',
        fullName: 'Bahhou Cherifa',
        studentId: '39338708',
        phone: '0664374662',
        specialization: 'Electronics',
        projectTitle: 'Solar powered WiFi irrigation',
        interests: ['web', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T19:57:11'
    },
    {
        registrationId: 'INVX-E03Q41NB',
        fullName: 'Dida hani',
        studentId: '39336114',
        phone: '0669266573',
        specialization: 'Télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T19:57:32'
    },
    {
        registrationId: 'INVX-9OLTOXOJ',
        fullName: 'Boutbila Hocine',
        studentId: '39338708',
        phone: '0664374662',
        specialization: 'Electronics',
        projectTitle: 'Solar powered WiFi irrigation',
        interests: ['web', 'iot', 'electronics', 'networking'],
        registrationDate: '2025-04-17T19:59:20'
    },
    {
        registrationId: 'INVX-MWMCTYPK',
        fullName: 'Yasser Bouidia',
        studentId: '39306014',
        phone: '0792443000',
        specialization: 'Electromechanic',
        projectTitle: 'N/A',
        interests: ['cyber', 'electronics', 'networking'],
        registrationDate: '2025-04-17T20:17:49'
    },
    {
        registrationId: 'INVX-VA5NHVQW',
        fullName: 'Messaoudi Ikram',
        studentId: '39059370',
        phone: '0674536842',
        specialization: 'Autou',
        projectTitle: '3D Scanner',
        interests: ['ai', 'electronics'],
        registrationDate: '2025-04-17T20:25:40'
    },
    {
        registrationId: 'INVX-TU6YIQRL',
        fullName: 'Djaadi',
        studentId: '39047469',
        phone: '0697619294',
        specialization: 'Electronique (Licence telecomonicatoin)',
        projectTitle: 'Smart bracelet in the medical field',
        interests: [],
        registrationDate: '2025-04-17T20:26:20'
    },
    {
        registrationId: 'INVX-2I0BIEHE',
        fullName: 'Reddas feriel',
        studentId: '39306910',
        phone: '0665510612',
        specialization: 'Genie civil',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-17T20:27:46'
    },
    {
        registrationId: 'INVX-24YZI02X',
        fullName: 'Hani Dida',
        studentId: '39336114',
        phone: '0666503117',
        specialization: 'Télécommuications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T20:30:25'
    },
    {
        registrationId: 'INVX-J58NMJ21',
        fullName: 'Hani Dida',
        studentId: '39336114',
        phone: '0666503117',
        specialization: 'Télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T20:31:28'
    },
    {
        registrationId: 'INVX-ZOPJBRT5',
        fullName: 'Belkhir Maria',
        studentId: '39055744',
        phone: '0673422543',
        specialization: 'Electronic',
        projectTitle: 'Intelligent Water Tank Level Control',
        interests: ['electronics'],
        registrationDate: '2025-04-17T20:33:00'
    },
    {
        registrationId: 'INVX-B8SPBAJ2',
        fullName: 'Maou Mayar malak',
        studentId: '39344917',
        phone: '0559436999',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'networking'],
        registrationDate: '2025-04-17T20:40:35'
    },
    {
        registrationId: 'INVX-09D9MBTX',
        fullName: 'اولا سالم سمية',
        studentId: '39306603',
        phone: '0696949051',
        specialization: 'اتصالات سلكيلةولاسلكية',
        projectTitle: 'نظام التحكم الذكي للاجهزة عن بعد',
        interests: ['ai'],
        registrationDate: '2025-04-17T21:04:14'
    },
    {
        registrationId: 'INVX-ITQQKHC9',
        fullName: 'Tati Mebrouka',
        studentId: '39338114',
        phone: '0696082285',
        specialization: 'Télécom',
        projectTitle: 'Car barcode',
        interests: ['networking'],
        registrationDate: '2025-04-17T21:22:24'
    },
    {
        registrationId: 'INVX-TIIPDO8T',
        fullName: 'Douadi wail',
        studentId: '39345102',
        phone: '0554680664',
        specialization: 'Instrumentation pétrolière',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T21:26:58'
    },
    {
        registrationId: 'INVX-SJGCJZMP',
        fullName: 'Marouane boussiha',
        studentId: '39047056',
        phone: '0655950454',
        specialization: 'Electronique',
        projectTitle: 'Guest',
        interests: ['electronics'],
        registrationDate: '2025-04-17T21:27:58'
    },
    {
        registrationId: 'INVX-5R74CRS4',
        fullName: 'DOB ELMAZOUZI',
        studentId: '39056459',
        phone: '0676410888',
        specialization: 'TELECOMMUNICATION',
        projectTitle: 'N/A',
        interests: ['cyber', 'electronics', 'networking'],
        registrationDate: '2025-04-17T21:30:07'
    },
    {
        registrationId: 'INVX-LKQPY780',
        fullName: 'Imad Eddine BENSALEM',
        studentId: '39050854',
        phone: '0563615683',
        specialization: 'Instrumentation and systems',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics'],
        registrationDate: '2025-04-17T21:33:20'
    },
    {
        registrationId: 'INVX-0SKJNXWY',
        fullName: 'BEKAKRA AHMED RAMZI',
        studentId: '39051486',
        phone: '0656309839',
        specialization: 'Embedded systems',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics', 'networking'],
        registrationDate: '2025-04-17T21:37:23'
    },
    {
        registrationId: 'INVX-V6H744HN',
        fullName: 'Madoui hizia',
        studentId: '39063661',
        phone: '0654446536',
        specialization: 'Telecommunication',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T21:52:43'
    },
    {
        registrationId: 'INVX-HF029YZN',
        fullName: 'حاجي عبد العفو',
        studentId: '39335703',
        phone: '0674981523',
        specialization: 'هندسة ميكانيكية',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T22:02:08'
    },
    {
        registrationId: 'INVX-271O64L8',
        fullName: 'Dida hani',
        studentId: '39336114',
        phone: '0666503117',
        specialization: 'Télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T22:20:01'
    },
    {
        registrationId: 'INVX-VANOV7WX',
        fullName: 'Nesrine farsi',
        studentId: '24534665',
        phone: '0660099020',
        specialization: 'Electrostatics',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T22:34:52'
    },
    {
        registrationId: 'INVX-U8QZ5326',
        fullName: 'Korichi maria chiraze',
        studentId: '39299404',
        phone: '0549864959',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T22:39:08'
    },
    {
        registrationId: 'INVX-4PXJXR6O',
        fullName: 'Benmahcene Achouak Ranine',
        studentId: '39293317',
        phone: '0699669003',
        specialization: 'Système d\'information',
        projectTitle: 'N/A',
        interests: ['web'],
        registrationDate: '2025-04-17T22:42:19'
    },
    {
        registrationId: 'INVX-9L6Q69G6',
        fullName: 'BOULIF Yasser Abdeladhim',
        studentId: '39046408',
        phone: '0672596570',
        specialization: 'Industrial computer science',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'cloud'],
        registrationDate: '2025-04-17T22:44:18'
    },
    {
        registrationId: 'INVX-PI7NBE4L',
        fullName: 'Nesrine Rouabeh',
        studentId: '39318704',
        phone: '0696365616',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T22:44:32'
    },
    {
        registrationId: 'INVX-8F1GICYT',
        fullName: 'MAKHLOUF ABDELMOKIT HAZEM IHAB',
        studentId: '38029789',
        phone: '0792754670',
        specialization: 'Electronic',
        projectTitle: 'CICADA',
        interests: ['web'],
        registrationDate: '2025-04-17T22:46:13'
    },
    {
        registrationId: 'INVX-VK0B7WTJ',
        fullName: 'طواهرية العربي',
        studentId: '31195501',
        phone: '0697587634',
        specialization: 'Electronic',
        projectTitle: 'The Smart Safety Helmet',
        interests: [],
        registrationDate: '2025-04-17T22:49:30'
    },
    {
        registrationId: 'INVX-BH2EJXD8',
        fullName: 'بن زيدان الشارف',
        studentId: '31195501',
        phone: '0697587634',
        specialization: 'electronic',
        projectTitle: 'The smart safety helmet',
        interests: [],
        registrationDate: '2025-04-17T22:51:18'
    },
    {
        registrationId: 'INVX-U0BCNBW3',
        fullName: 'Aoun douaa',
        studentId: '39056490',
        phone: '0667908406',
        specialization: 'Électronique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-17T22:51:38'
    },
    {
        registrationId: 'INVX-3J6CQG4R',
        fullName: 'Khouloud rabia',
        studentId: '39286205',
        phone: '0657588091',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-17T22:55:43'
    },
    {
        registrationId: 'INVX-2MO8BAS5',
        fullName: 'Hassani fatma zohra',
        studentId: '39294907',
        phone: '0660038619',
        specialization: 'Electronic',
        projectTitle: 'Smart safety helmet',
        interests: [],
        registrationDate: '2025-04-17T22:59:44'
    },
    {
        registrationId: 'INVX-PO6NHYTJ',
        fullName: 'Bechouni sofiane',
        studentId: '39294907',
        phone: '0660038619',
        specialization: 'الكترونيك',
        projectTitle: 'The Smart safety helmet',
        interests: [],
        registrationDate: '2025-04-17T23:01:11'
    },
    {
        registrationId: 'INVX-GAAULS6Q',
        fullName: 'kesbi Malak',
        studentId: '39052090',
        phone: '0664513616',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-17T23:11:26'
    },
    {
        registrationId: 'INVX-2CV0PWU9',
        fullName: 'Kina sara',
        studentId: '39346217',
        phone: '0791690620',
        specialization: 'computer science',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-17T23:11:43'
    },
    {
        registrationId: 'INVX-WUXB2IBR',
        fullName: 'Ayet errahmane hadjadj',
        studentId: '39047458',
        phone: '0672720811',
        specialization: 'accounting',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'electronics', 'networking'],
        registrationDate: '2025-04-18T00:02:28'
    },
    {
        registrationId: 'INVX-3J8M4VJ1',
        fullName: 'Hadji Boutheina',
        studentId: '39306304',
        phone: '0698141401',
        specialization: 'Auto',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-18T00:22:51'
    },
    {
        registrationId: 'INVX-ZZY2QY0G',
        fullName: 'بخديجة عباس',
        studentId: '00000000',
        phone: '0665747730',
        specialization: 'لايوجد',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T00:24:06'
    },
    {
        registrationId: 'INVX-9HVO8OUW',
        fullName: 'mohamed',
        studentId: '35255808',
        phone: '0671029295',
        specialization: 'hydrocarbons',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'robotics'],
        registrationDate: '2025-04-18T00:46:16'
    },
    {
        registrationId: 'INVX-Z7ZPWPV9',
        fullName: 'Sekher soujoud',
        studentId: '39050063',
        phone: '0664755623',
        specialization: 'Electronics of embedded systems',
        projectTitle: 'Hand tracking',
        interests: ['ai', 'data', 'electronics'],
        registrationDate: '2025-04-18T00:49:05'
    },
    {
        registrationId: 'INVX-YMVNNXZI',
        fullName: 'Maroua benameur',
        studentId: '39048333',
        phone: '0656393525',
        specialization: 'Electronique système embarqué',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T00:49:54'
    },
    {
        registrationId: 'INVX-CY2PBN2R',
        fullName: 'Saidat zohra',
        studentId: '39091601',
        phone: '0669870484',
        specialization: 'Télécomminicatiom',
        projectTitle: 'Obstacle auto detecting car',
        interests: [],
        registrationDate: '2025-04-18T00:50:05'
    },
    {
        registrationId: 'INVX-POD5QD7A',
        fullName: 'Moumene issam Eddine ayoub',
        studentId: '39045845',
        phone: '0659945165',
        specialization: 'Automation',
        projectTitle: 'Smart watering for plastic houses',
        interests: ['electronics', 'robotics'],
        registrationDate: '2025-04-18T01:18:14'
    },
    {
        registrationId: 'INVX-F8A9TEKL',
        fullName: 'Moumene said',
        studentId: '39058017',
        phone: '0659945165',
        specialization: 'Automation',
        projectTitle: 'N/A',
        interests: ['robotics'],
        registrationDate: '2025-04-18T01:20:25'
    },
    {
        registrationId: 'WS-906H0KPJ',
        fullName: 'Moumene issam eddine ayoub',
        studentId: '39045845',
        phone: '0659945165',
        specialization: 'Automation',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming',
        registrationDate: '2025-04-18T01:22:57'
    },
    {
        registrationId: 'INVX-LE53H300',
        fullName: 'Adamou Mohammed Rafik',
        studentId: '39056668',
        phone: '0796392935',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T01:25:17'
    },
    {
        registrationId: 'INVX-ACJT0C1F',
        fullName: 'Abderrazak nadjri',
        studentId: '39046076',
        phone: '0672465184',
        specialization: 'First Master in Energy and Petroleum Law',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T01:29:44'
    },
    {
        registrationId: 'INVX-FXLVGSYV',
        fullName: 'Gharbi Aridj',
        studentId: '39300912',
        phone: '0666262886',
        specialization: 'Télécommunication',
        projectTitle: 'Rank Easy',
        interests: ['ai', 'web', 'data', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T02:01:00'
    },
    {
        registrationId: 'INVX-MLRUIQB7',
        fullName: 'SALHI merouane',
        studentId: '39058965',
        phone: '0672718901',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T02:24:47'
    },
    {
        registrationId: 'INVX-XNL44VI1',
        fullName: 'Khenchouche Mohamed islam',
        studentId: '35711819',
        phone: '0665104428',
        specialization: 'Hydrocarbures',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T03:43:11'
    },
    {
        registrationId: 'INVX-Y4XA5OOD',
        fullName: 'فيصل عبد السلام محجوبي',
        studentId: '39050117',
        phone: '0669079333',
        specialization: 'Electronics of embedded systems',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T04:23:16'
    },
    {
        registrationId: 'INVX-Z9RTZVMR',
        fullName: 'Mohammed elhadi Gouas',
        studentId: '39294107',
        phone: '0699691393',
        specialization: 'Ai engineering',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T05:24:35'
    },
    {
        registrationId: 'INVX-4FQ25N2Q',
        fullName: 'Lyna Elhella',
        studentId: '39314213',
        phone: '0655091219',
        specialization: 'Ingénieur informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T05:24:50'
    },
    {
        registrationId: 'INVX-ZT9DFGDB',
        fullName: 'zeyd salhi',
        studentId: '39546905',
        phone: '0672283359',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T05:39:10'
    },
    {
        registrationId: 'INVX-1QM2IPK8',
        fullName: 'Benhammouda Salsabil',
        studentId: '39055574',
        phone: '0674734782',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T06:21:46'
    },
    {
        registrationId: 'INVX-JZ11FPA1',
        fullName: 'Yahia Hathat',
        studentId: '30012022',
        phone: '0659141361',
        specialization: 'Automatic and industrial computing',
        projectTitle: 'Deep learning',
        interests: ['ai'],
        registrationDate: '2025-04-18T08:37:16'
    },
    {
        registrationId: 'INVX-YDVY3G3K',
        fullName: 'MOKADEM ABDELKADER',
        studentId: '39059508',
        phone: '0658006357',
        specialization: 'Electrical Engineering',
        projectTitle: 'Smart Home',
        interests: ['electronics'],
        registrationDate: '2025-04-18T08:49:17'
    },
    {
        registrationId: 'INVX-IHPGX04C',
        fullName: 'MOKADEM Abdelkader',
        studentId: '39059508',
        phone: '0658006357',
        specialization: 'Electrical Engineering',
        projectTitle: 'Smart Home',
        interests: ['iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-18T08:53:03'
    },
    {
        registrationId: 'WS-V8716IDY',
        fullName: 'Dhia elhak souici',
        studentId: '39289807',
        phone: '0696395577',
        specialization: 'إلكترونيك',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming',
        registrationDate: '2025-04-18T09:10:10'
    },
    {
        registrationId: 'WS-3VC38W60',
        fullName: 'Slimane loubna',
        studentId: '39053156',
        phone: '0668420249',
        specialization: 'Automatique et système',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming',
        registrationDate: '2025-04-18T09:15:21'
    },
    {
        registrationId: 'INVX-58M9NJHI',
        fullName: 'Khazene nidhal',
        studentId: '39380015',
        phone: '0669812957',
        specialization: 'computer science',
        projectTitle: 'N/A',
        interests: ['mobile'],
        registrationDate: '2025-04-18T09:20:04'
    },
    {
        registrationId: 'WS-B0TBD25P',
        fullName: 'Khazene nidhal',
        studentId: '39380015',
        phone: '0669812957',
        specialization: 'computer science',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T09:21:55'
    },
    {
        registrationId: 'INVX-HQR3AW00',
        fullName: 'طواهرية مريم هاجر',
        studentId: '31195501',
        phone: '0697587634',
        specialization: 'Electronic',
        projectTitle: 'The smart safety helmet',
        interests: [],
        registrationDate: '2025-04-18T09:25:38'
    },
    {
        registrationId: 'INVX-96Y980ZM',
        fullName: 'Lakhdariabdelfettah',
        studentId: '39355104',
        phone: '0658629923',
        specialization: 'Petrochemical industries',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T09:29:20'
    },
    {
        registrationId: 'INVX-NIN73J2V',
        fullName: 'ZENKHRI BELKHIR',
        studentId: '39289406',
        phone: '0666696232',
        specialization: 'Electronic',
        projectTitle: 'Water quality Monitoring',
        interests: ['electronics'],
        registrationDate: '2025-04-18T09:44:48'
    },
    {
        registrationId: 'WS-M1OYUD02',
        fullName: 'Belalem Mohamed Elassaad',
        studentId: '37002853',
        phone: '0553800148',
        specialization: 'Instrumentation',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming',
        registrationDate: '2025-04-18T09:47:06'
    },
    {
        registrationId: 'INVX-V4YOWYYU',
        fullName: 'Belalem Mohamed Elassaad',
        studentId: '37002853',
        phone: '0553800148',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: ['cyber', 'electronics', 'networking'],
        registrationDate: '2025-04-18T09:48:45'
    },
    {
        registrationId: 'INVX-O3MJKBWT',
        fullName: 'benhadda abdelaziz',
        studentId: '39297811',
        phone: '0541048891',
        specialization: 'electronique',
        projectTitle: 'Water Quality Monitoring',
        interests: ['electronics'],
        registrationDate: '2025-04-18T09:49:53'
    },
    {
        registrationId: 'INVX-HNA80Y9W',
        fullName: 'Ben abddalh abd elmonauim',
        studentId: '39537010',
        phone: '0658836060',
        specialization: 'AutomaTic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T09:56:52'
    },
    {
        registrationId: 'INVX-OPEMJ0NY',
        fullName: 'Aidli Meriem',
        studentId: '39058246',
        phone: '0671928284',
        specialization: 'Computer Science',
        projectTitle: 'N/A',
        interests: ['data'],
        registrationDate: '2025-04-18T10:05:27'
    },
    {
        registrationId: 'INVX-HINHQXKL',
        fullName: 'Khelil mohammed Hachem',
        studentId: '39307120',
        phone: '0667576143',
        specialization: 'Geology',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data', 'electronics', 'mobile'],
        registrationDate: '2025-04-18T10:17:26'
    },
    {
        registrationId: 'INVX-CVMOST9X',
        fullName: 'Abdi houssem eddine',
        studentId: '39346210',
        phone: '0540431977',
        specialization: 'Oil and gas production',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'networking', 'robotics'],
        registrationDate: '2025-04-18T10:21:40'
    },
    {
        registrationId: 'INVX-PCSTLWTB',
        fullName: 'Gheribi mohammed anes',
        studentId: '39045343',
        phone: '0664483544',
        specialization: 'Automation',
        projectTitle: 'N/A',
        interests: ['ai', 'robotics'],
        registrationDate: '2025-04-18T10:40:45'
    },
    {
        registrationId: 'INVX-XWT8NSAN',
        fullName: 'GHRAB ABDALLAH',
        studentId: '39335904',
        phone: '0784191995',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T10:43:09'
    },
    {
        registrationId: 'INVX-9MU5IDBE',
        fullName: 'Aitsoura Melissa',
        studentId: '39345804',
        phone: '0662000461',
        specialization: 'Instrumentation pétrolière',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T10:44:17'
    },
    {
        registrationId: 'INVX-XOJWVZO0',
        fullName: 'Ihsene boualati',
        studentId: '39314802',
        phone: '0655301678',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T10:54:02'
    },
    {
        registrationId: 'INVX-9ZK8QR60',
        fullName: 'Zouweyna Chebouki',
        studentId: '39405304',
        phone: '0542731391',
        specialization: 'Automation',
        projectTitle: 'Arduino-based Sewer Drain Shield',
        interests: ['iot', 'electronics'],
        registrationDate: '2025-04-18T10:54:19'
    },
    {
        registrationId: 'INVX-DLUPM0MD',
        fullName: 'Mengaa lahcene',
        studentId: '39349716',
        phone: '0557000976',
        specialization: 'Instrumentation petrolique',
        projectTitle: 'N/A',
        interests: ['robotics'],
        registrationDate: '2025-04-18T10:59:10'
    },
    {
        registrationId: 'INVX-LI343JFQ',
        fullName: 'djediai imad eddine',
        studentId: '39301705',
        phone: '0671411662',
        specialization: 'Automation',
        projectTitle: 'Atmospheic water generator',
        interests: ['iot', 'electronics'],
        registrationDate: '2025-04-18T11:03:27'
    },
    {
        registrationId: 'WS-IJ9OWESO',
        fullName: 'Hakimi Nour Elyakin',
        studentId: '39047674',
        phone: '0672720223',
        specialization: 'Management',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career',
        registrationDate: '2025-04-18T11:04:26'
    },
    {
        registrationId: 'INVX-8XFZSMGD',
        fullName: 'Hakimi Nourelyakin',
        studentId: '39047674',
        phone: '0672720232',
        specialization: 'Management',
        projectTitle: 'Startup In progress',
        interests: ['ai', 'web', 'iot', 'networking'],
        registrationDate: '2025-04-18T11:04:34'
    },
    {
        registrationId: 'INVX-TCAVTLXB',
        fullName: 'Djarroudib nour melek',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T11:08:17'
    },
    {
        registrationId: 'INVX-KVBKIO7J',
        fullName: 'DAHEM ABDESSAMED',
        studentId: '39328619',
        phone: '0667074149',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: ['web', 'cyber'],
        registrationDate: '2025-04-18T11:08:30'
    },
    {
        registrationId: 'INVX-HEDIG1RS',
        fullName: 'Nouari',
        studentId: '22223121',
        phone: '0772005321',
        specialization: 'Automatique',
        projectTitle: 'Plateforme Numérique d\'Assistance au Diagnostic du Cancer à l\'Aide de l\'Intelligence Artificielle',
        interests: ['ai', 'web'],
        registrationDate: '2025-04-18T11:11:19'
    },
    {
        registrationId: 'WS-0C8PXP4C',
        fullName: 'Khelifa abdel hamid',
        studentId: '39575904',
        phone: '0776454310',
        specialization: 'Instrumentation péteoliér',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T11:13:36'
    },
    {
        registrationId: 'INVX-NH9XXXFV',
        fullName: 'Hafiane nassim',
        studentId: '39317904',
        phone: '0667161926',
        specialization: 'St',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T11:18:38'
    },
    {
        registrationId: 'INVX-XJMEYHSH',
        fullName: 'Hafiane nassim',
        studentId: '39317904',
        phone: '0667161926',
        specialization: 'St',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T11:21:42'
    },
    {
        registrationId: 'INVX-BDSQLGYY',
        fullName: 'Ahmed Boubekri',
        studentId: '39320413',
        phone: '0776712544',
        specialization: 'Hydraulic',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T11:24:10'
    },
    {
        registrationId: 'INVX-LZOJZCLQ',
        fullName: 'ARID Mohammed',
        studentId: '39294704',
        phone: '0666309813',
        specialization: 'Instrumentation petroliom',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T11:43:31'
    },
    {
        registrationId: 'INVX-OLVLQIVI',
        fullName: 'Mohammed Tohami',
        studentId: '39048821',
        phone: '0665000800',
        specialization: 'M2 Auto',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T11:48:24'
    },
    {
        registrationId: 'INVX-O4Z9DOWL',
        fullName: 'Benlahcene abdelaziz',
        studentId: '39058095',
        phone: '0542251401',
        specialization: 'Automation',
        projectTitle: 'Smart car',
        interests: ['robotics'],
        registrationDate: '2025-04-18T11:49:10'
    },
    {
        registrationId: 'WS-ECD2VBMX',
        fullName: 'Mohammed Tohami',
        studentId: '39048821',
        phone: '0665000800',
        specialization: 'M2 Auto',
        workshop: 'الساعة الثانية: آدم ميلوكا - برمجة FPGA وVHDL',
        registrationDate: '2025-04-18T11:50:05'
    },
    {
        registrationId: 'WS-HQVSGFGR',
        fullName: 'BENBRAHIM AYOUB',
        studentId: '39344015',
        phone: '0668722813',
        specialization: 'Petroleum Instrumentation',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming',
        registrationDate: '2025-04-18T12:32:50'
    },
    {
        registrationId: 'INVX-6GGZU8F2',
        fullName: 'Bekkari ahmed sohaib',
        studentId: '39306010',
        phone: '0697505830',
        specialization: 'L3 instrumentation',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T12:36:35'
    },
    {
        registrationId: 'INVX-FBZUCNOB',
        fullName: 'Tidjani Mounir',
        studentId: '35348812',
        phone: '0697390096',
        specialization: 'Instrument',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T12:39:46'
    },
    {
        registrationId: 'INVX-R3LYMV5C',
        fullName: 'Mosbah Nesrine Nada Erraihane',
        studentId: '39057709',
        phone: '0698215087',
        specialization: 'Renewable energies',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-18T12:43:53'
    },
    {
        registrationId: 'INVX-KBQR88WO',
        fullName: 'Zeribit Lamia',
        studentId: '39306520',
        phone: '0657999995',
        specialization: 'Télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T12:44:55'
    },
    {
        registrationId: 'INVX-T9SR3XEJ',
        fullName: 'Zeribit dalal',
        studentId: '39306520',
        phone: '0657999995',
        specialization: 'Télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T12:46:57'
    },
    {
        registrationId: 'INVX-JMRFLQVK',
        fullName: 'Farah Ferial Aroua',
        studentId: '39318215',
        phone: '0556097756',
        specialization: 'Electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T12:47:12'
    },
    {
        registrationId: 'WS-5T08OTV9',
        fullName: 'Farah Ferial Aroua',
        studentId: '39318215',
        phone: '0556097756',
        specialization: 'Electronics',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T12:48:04'
    },
    {
        registrationId: 'INVX-INSCAN0E',
        fullName: 'Hana Bekhdidja',
        studentId: '39327404',
        phone: '0697044399',
        specialization: 'St',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T12:50:18'
    },
    {
        registrationId: 'INVX-6FFPYRSH',
        fullName: 'Zineb chikh biubekeur',
        studentId: '39645820',
        phone: '0553305731',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['web', 'networking', 'robotics'],
        registrationDate: '2025-04-18T12:55:51'
    },
    {
        registrationId: 'INVX-69JTZC1K',
        fullName: 'Boutaina Hamdaoui',
        studentId: '39351403',
        phone: '0658154356',
        specialization: 'Computer Science',
        projectTitle: 'N/A',
        interests: ['web'],
        registrationDate: '2025-04-18T13:06:09'
    },
    {
        registrationId: 'INVX-4VC7O563',
        fullName: 'Ala Eddie chouiref',
        studentId: '39092009',
        phone: '0672585049',
        specialization: 'Èlectrotèchnique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T13:09:17'
    },
    {
        registrationId: 'INVX-DIMQ6ONF',
        fullName: 'Nada taaba',
        studentId: '39314812',
        phone: '0781988882',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-18T13:14:02'
    },
    {
        registrationId: 'INVX-YJ4PU1ER',
        fullName: 'ARID Mohammed',
        studentId: '39294704',
        phone: '0666309813',
        specialization: 'Instrumentation petroliom',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T13:15:45'
    },
    {
        registrationId: 'INVX-76I38YG4',
        fullName: 'Souhaib Tidjani',
        studentId: '39059508',
        phone: '0669350263',
        specialization: 'Instrimontation',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T13:22:38'
    },
    {
        registrationId: 'INVX-A64LEIE6',
        fullName: 'Hadji Boutheina',
        studentId: '39306304',
        phone: '0698141401',
        specialization: 'Automatique',
        projectTitle: 'Smart remote control system',
        interests: ['ai'],
        registrationDate: '2025-04-18T13:30:42'
    },
    {
        registrationId: 'INVX-9KEQC4SM',
        fullName: 'خديجة عطالي',
        studentId: '39581716',
        phone: '0699500611',
        specialization: 'المدرسة العليا الاساتذة (استاذة تعليم ثانوي تاريخ وجغرافبا',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T13:30:50'
    },
    {
        registrationId: 'INVX-PSUDAPKD',
        fullName: 'Asmaa Chettouh',
        studentId: '12042424',
        phone: '0778010856',
        specialization: 'Omp',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T13:33:41'
    },
    {
        registrationId: 'INVX-31IMZ6I0',
        fullName: 'Bennai Maroua ( بناي مروة)',
        studentId: '39304814',
        phone: '0657610818',
        specialization: '(إعلام ألي( 2 ليسانس',
        projectTitle: 'فتح ويب بعنوان تعلم الجرافيك للمبتدئين (تطويره مع الوقت)',
        interests: ['web', 'data', 'networking', 'mobile'],
        registrationDate: '2025-04-18T13:35:32'
    },
    {
        registrationId: 'INVX-JSXBHXMO',
        fullName: 'Lylia Benkouider',
        studentId: '39045995',
        phone: '0799964146',
        specialization: 'Énergies renouvelables en mécanique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T13:36:13'
    },
    {
        registrationId: 'INVX-OTPRQA7R',
        fullName: 'Benkaci Nabil',
        studentId: '39052077',
        phone: '0698271230',
        specialization: 'Network and security',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'cloud', 'networking'],
        registrationDate: '2025-04-18T13:53:59'
    },
    {
        registrationId: 'INVX-KE1G30TO',
        fullName: 'أولاد هدار حفصة',
        studentId: '39049888',
        phone: '0658967052',
        specialization: 'Accounting and audit',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-18T14:03:39'
    },
    {
        registrationId: 'INVX-J59EYYOH',
        fullName: 'Soufiane kafi',
        studentId: '39055568',
        phone: '0667689000',
        specialization: 'Automatique',
        projectTitle: 'Attendance tracking system using facial recognition',
        interests: [],
        registrationDate: '2025-04-18T14:06:10'
    },
    {
        registrationId: 'INVX-RX5UIXC1',
        fullName: 'Salhi Djouhaina',
        studentId: '39619006',
        phone: '0782394567',
        specialization: 'Métrologie et mesure de la qualité',
        projectTitle: 'Recyclage',
        interests: ['web'],
        registrationDate: '2025-04-18T14:06:12'
    },
    {
        registrationId: 'INVX-SMBIV6YW',
        fullName: 'HERROUZ salaheddine',
        studentId: '39048446',
        phone: '0673233065',
        specialization: 'Automation',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics'],
        registrationDate: '2025-04-18T14:06:59'
    },
    {
        registrationId: 'WS-E6Z3AY0E',
        fullName: 'HERROUZ salaheddine',
        studentId: '39048446',
        phone: '0673233065',
        specialization: 'Automation',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career',
        registrationDate: '2025-04-18T14:09:36'
    },
    {
        registrationId: 'INVX-0HUP3124',
        fullName: 'Adnane Benabderrahmane',
        studentId: '39462019',
        phone: '0657058893',
        specialization: 'Production of has and oil',
        projectTitle: 'N/A',
        interests: ['web', 'cyber', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T14:12:47'
    },
    {
        registrationId: 'INVX-2UYX333X',
        fullName: 'safia bendrighem',
        studentId: '39314011',
        phone: '0673856910',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T14:14:34'
    },
    {
        registrationId: 'INVX-ZS6PMK4V',
        fullName: 'بالطيب مصعب',
        studentId: '39522011',
        phone: '0673024306',
        specialization: 'هندسة طرائق (مهندس دولة)',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'networking', 'mobile'],
        registrationDate: '2025-04-18T14:17:47'
    },
    {
        registrationId: 'INVX-LIU9B2IN',
        fullName: 'Asma gheribi',
        studentId: '39341120',
        phone: '0696873237',
        specialization: 'English',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T14:20:27'
    },
    {
        registrationId: 'INVX-0UJ30BBN',
        fullName: 'Mohammed sadek Belkacem',
        studentId: '39056672',
        phone: '0699586814',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T14:23:14'
    },
    {
        registrationId: 'INVX-XHH3ZLBT',
        fullName: 'Benras',
        studentId: '20200390',
        phone: '0659358207',
        specialization: 'اعلام واتصال',
        projectTitle: 'برمجة وتطوير مواقع الويب',
        interests: ['web'],
        registrationDate: '2025-04-18T14:25:50'
    },
    {
        registrationId: 'WS-LUJBDA31',
        fullName: 'Benras',
        studentId: '20203904',
        phone: '0659358207',
        specialization: 'علوم انسانية',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T14:39:55'
    },
    {
        registrationId: 'INVX-A824Z78C',
        fullName: 'Boudjemaa mekhloufi',
        studentId: '39060295',
        phone: '0662293619',
        specialization: 'Media and Communication',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T14:44:23'
    },
    {
        registrationId: 'INVX-2UNQLORW',
        fullName: 'Mehiri Youcef',
        studentId: '39050538',
        phone: '0672101118',
        specialization: 'Hôtellerie restauration Intendant',
        projectTitle: 'Prj',
        interests: [],
        registrationDate: '2025-04-18T14:44:46'
    },
    {
        registrationId: 'INVX-AYFN25L1',
        fullName: 'Tafni mabrouka',
        studentId: '39339706',
        phone: '0697907401',
        specialization: 'حقوق',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T15:00:56'
    },
    {
        registrationId: 'INVX-PV2I1MKF',
        fullName: 'Akrib Inas',
        studentId: '35070485',
        phone: '0660537731',
        specialization: 'Forensic science',
        projectTitle: 'Einsilegal',
        interests: ['web', 'data', 'networking'],
        registrationDate: '2025-04-18T15:05:18'
    },
    {
        registrationId: 'INVX-89C8EQF1',
        fullName: 'Rahal Hind',
        studentId: '36031540',
        phone: '0698909845',
        specialization: 'Forensic science',
        projectTitle: 'Einsilegal',
        interests: ['web', 'data', 'networking'],
        registrationDate: '2025-04-18T15:07:15'
    },
    {
        registrationId: 'INVX-NSIMHQZR',
        fullName: 'Degaa Firas Sader Eddine',
        studentId: '39419617',
        phone: '0541625525',
        specialization: 'Informatique ingénieur',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'mobile'],
        registrationDate: '2025-04-18T15:15:55'
    },
    {
        registrationId: 'INVX-QYVBVDMM',
        fullName: 'بن الصيد عبير',
        studentId: '39045317',
        phone: '0665775098',
        specialization: 'Network Administration and Security',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T15:16:56'
    },
    {
        registrationId: 'INVX-NGW708ES',
        fullName: 'Ayoub zahaf',
        studentId: '39053350',
        phone: '0658502916',
        specialization: 'Électronique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T15:17:18'
    },
    {
        registrationId: 'INVX-CCSBI2XN',
        fullName: 'Zerroukizobida',
        studentId: '39051564',
        phone: '0675912905',
        specialization: 'علم النفس التربوي',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T15:17:56'
    },
    {
        registrationId: 'INVX-E79XV45S',
        fullName: 'Ibrahim soukeur',
        studentId: '35710501',
        phone: '0696324112',
        specialization: 'Hydrocarbon',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T15:30:33'
    },
    {
        registrationId: 'INVX-R8B3YH5V',
        fullName: 'Khenchouche Mohamed islam',
        studentId: '35711819',
        phone: '0665104428',
        specialization: 'Hydrocarbures production',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T15:34:39'
    },
    {
        registrationId: 'INVX-OEVR7SP1',
        fullName: 'Lecheheb djaafar',
        studentId: '39046283',
        phone: '0658301420',
        specialization: 'Informatique',
        projectTitle: 'نظام ري محوري ذكي لمناطق صحراوية',
        interests: ['iot'],
        registrationDate: '2025-04-18T15:35:51'
    },
    {
        registrationId: 'INVX-WZQ3K3FW',
        fullName: 'Sabrina Bouanane',
        studentId: '39451913',
        phone: '0664646572',
        specialization: 'Langue Française',
        projectTitle: 'N/A',
        interests: ['web', 'cyber', 'networking'],
        registrationDate: '2025-04-18T15:57:07'
    },
    {
        registrationId: 'INVX-NI16UA21',
        fullName: 'Benguega dhia elhak',
        studentId: '39335701',
        phone: '0656700209',
        specialization: 'Electronics',
        projectTitle: 'Smart irrigation system',
        interests: ['iot'],
        registrationDate: '2025-04-18T16:08:58'
    },
    {
        registrationId: 'INVX-NJXLFAGF',
        fullName: 'Sayah Wissal Meriem',
        studentId: '39345108',
        phone: '0676086512',
        specialization: 'Electronics',
        projectTitle: 'Dual-Axis 360/180 degree solar tracking system',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T16:19:49'
    },
    {
        registrationId: 'INVX-SAMQCQFY',
        fullName: 'Fouad Sayah',
        studentId: '39306816',
        phone: '0697512401',
        specialization: 'Electronic',
        projectTitle: 'The Smart Safety Helmet',
        interests: ['ai', 'electronics', 'networking', 'mobile'],
        registrationDate: '2025-04-18T16:29:44'
    },
    {
        registrationId: 'INVX-CNRBAG6R',
        fullName: 'Ferrah selsabil ayet errahmane',
        studentId: '34006801',
        phone: '0553145869',
        specialization: 'Geology',
        projectTitle: 'N/A',
        interests: ['data'],
        registrationDate: '2025-04-18T16:33:51'
    },
    {
        registrationId: 'WS-3BJC27Q4',
        fullName: 'Ferrah selsabil ayet errahmane',
        studentId: '34006801',
        phone: '0553145869',
        specialization: 'Geology',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career',
        registrationDate: '2025-04-18T16:38:14'
    },
    {
        registrationId: 'INVX-KOYL4B0A',
        fullName: 'Hanane Mesai Mohammed',
        studentId: '39443805',
        phone: '0668161613',
        specialization: 'Engenieer of Computer science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data', 'mobile'],
        registrationDate: '2025-04-18T16:40:48'
    },
    {
        registrationId: 'INVX-OQ3PN43N',
        fullName: 'Ikram hacini',
        studentId: '39047664',
        phone: '0667847101',
        specialization: 'Telecommunications',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T16:40:54'
    },
    {
        registrationId: 'INVX-H2NRW17R',
        fullName: 'Hadji hadil',
        studentId: '39047680',
        phone: '0658664173',
        specialization: 'Electronic',
        projectTitle: 'Smart bracelet in médical field',
        interests: ['electronics'],
        registrationDate: '2025-04-18T16:44:28'
    },
    {
        registrationId: 'INVX-79P8W418',
        fullName: 'Medjani asma',
        studentId: '34053504',
        phone: '0779968075',
        specialization: 'Geolgy',
        projectTitle: 'N/A',
        interests: ['data'],
        registrationDate: '2025-04-18T16:54:21'
    },
    {
        registrationId: 'WS-DL18HD35',
        fullName: 'Medjani asma',
        studentId: '34053504',
        phone: '0779968075',
        specialization: 'Geology',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career',
        registrationDate: '2025-04-18T16:55:39'
    },
    {
        registrationId: 'INVX-0WB4AWD8',
        fullName: 'Hernouf Abdelmoumen',
        studentId: '39047713',
        phone: '0673448284',
        specialization: 'Automation And systems',
        projectTitle: 'N/A',
        interests: ['ai', 'robotics'],
        registrationDate: '2025-04-18T16:55:54'
    },
    {
        registrationId: 'INVX-Z90JHMG2',
        fullName: 'بوتلي سلسبيل',
        studentId: '39301413',
        phone: '0797171751',
        specialization: 'Telecom',
        projectTitle: 'القفل الذكي',
        interests: [],
        registrationDate: '2025-04-18T16:59:59'
    },
    {
        registrationId: 'INVX-AUXHZMK3',
        fullName: 'بوتلي كوثر',
        studentId: '39307417',
        phone: '0797171751',
        specialization: 'علوم انسانية',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T17:01:33'
    },
    {
        registrationId: 'INVX-KFWQ2KAV',
        fullName: 'MEKHELLECHE ABDELILLAH',
        studentId: '37554917',
        phone: '0782680341',
        specialization: 'Production oil and gaz',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-18T17:05:51'
    },
    {
        registrationId: 'INVX-VXLOKV9X',
        fullName: 'Chaouch hadjer',
        studentId: '39298219',
        phone: '0776880258',
        specialization: 'Automatic',
        projectTitle: 'Arduino based sewer drain shield',
        interests: ['iot', 'electronics'],
        registrationDate: '2025-04-18T17:09:15'
    },
    {
        registrationId: 'INVX-RMW9FRWR',
        fullName: 'Guerrida Ammar',
        studentId: '39047020',
        phone: '0672364227',
        specialization: 'Automation and systems',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T17:23:32'
    },
    {
        registrationId: 'INVX-RFIMVYE5',
        fullName: 'Baameur maroua',
        studentId: '39304818',
        phone: '0657571471',
        specialization: 'Biology',
        projectTitle: 'N/A',
        interests: ['web', 'cyber', 'data', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T17:24:10'
    },
    {
        registrationId: 'INVX-SCTTBP03',
        fullName: 'عدنان حمادة',
        studentId: '20017755',
        phone: '0656231880',
        specialization: 'أجهزة وانضمة',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T17:30:21'
    },
    {
        registrationId: 'WS-QF8Z50NG',
        fullName: 'عدنان حمادة',
        studentId: '20017755',
        phone: '0656231880',
        specialization: 'أجهزة وانضمة',
        workshop: 'الساعة الأولى: أصالة تاريخ الميلاد - بناء العلامة التجارية الذاتية',
        registrationDate: '2025-04-18T17:32:16'
    },
    {
        registrationId: 'INVX-F171R6HL',
        fullName: 'Aichour Aissa',
        studentId: '39047596',
        phone: '0656492226',
        specialization: 'Auto',
        projectTitle: 'Attendance traking system using facial recognition',
        interests: [],
        registrationDate: '2025-04-18T18:01:36'
    },
    {
        registrationId: 'WS-PMTZCMVL',
        fullName: 'Niboua Wafa',
        studentId: '39322512',
        phone: '0660146801',
        specialization: 'Telecom',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T18:05:40'
    },
    {
        registrationId: 'INVX-4H7EVU56',
        fullName: '208776769',
        studentId: '39322512',
        phone: '0660146801',
        specialization: 'Telecom',
        projectTitle: 'Project Name: Smart Lock for Remote Property Protection "Advanced Protection... Smart Control Wherever You Are!"',
        interests: ['web', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T18:08:01'
    },
    {
        registrationId: 'INVX-E0JTO9J1',
        fullName: '206992514',
        studentId: '39335003',
        phone: '0658507342',
        specialization: 'بترولية ذاتية',
        projectTitle: 'Project Name: Smart Lock for Remote Property Protection "Advanced Protection... Smart Control Wherever You Are!"',
        interests: ['ai', 'web', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T18:10:43'
    },
    {
        registrationId: 'WS-X0GLIWFR',
        fullName: 'Seddiki mohammed issam',
        studentId: '39335003',
        phone: '0658507342',
        specialization: 'بترولية ذاتية',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T18:12:05'
    },
    {
        registrationId: 'INVX-6ZBMM1YQ',
        fullName: 'Knouze Ahmed Yacine',
        studentId: '39052492',
        phone: '0675839512',
        specialization: 'Électronique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T18:14:16'
    },
    {
        registrationId: 'INVX-W2J150VY',
        fullName: 'Amoumene Mohamed Abdeslam',
        studentId: '20223930',
        phone: '0665954988',
        specialization: 'Automatic',
        projectTitle: 'Platform stabilisation',
        interests: ['data', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T18:19:14'
    },
    {
        registrationId: 'INVX-TDVX7QV8',
        fullName: 'Benchaa belkacem',
        studentId: '39056004',
        phone: '0562400594',
        specialization: 'Automatic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T18:36:23'
    },
    {
        registrationId: 'INVX-WHDSVUBP',
        fullName: 'عبير غيلاني',
        studentId: '39301701',
        phone: '0657575900',
        specialization: 'هندسة اتصالات',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T18:36:47'
    },
    {
        registrationId: 'WS-R44JABYH',
        fullName: 'Ouddane Ahmed Louai',
        studentId: '39059588',
        phone: '0658611093',
        specialization: 'L3 auto',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T18:38:48'
    },
    {
        registrationId: 'INVX-954QX7UB',
        fullName: 'Ala eddine chouiref',
        studentId: '39092009',
        phone: '0672585049',
        specialization: 'Èlectroutèchnique',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T18:40:38'
    },
    {
        registrationId: 'INVX-L82GTD8U',
        fullName: 'HALIMI IKRAM',
        studentId: '39301010',
        phone: '0672946189',
        specialization: 'Electronique',
        projectTitle: 'Solar powered wiFi irrigation',
        interests: [],
        registrationDate: '2025-04-18T18:43:01'
    },
    {
        registrationId: 'INVX-AI72PCDU',
        fullName: 'Khalfouni khouloud',
        studentId: '39050250',
        phone: '0664949444',
        specialization: 'Info',
        projectTitle: 'N/A',
        interests: ['mobile'],
        registrationDate: '2025-04-18T18:55:36'
    },
    {
        registrationId: 'INVX-PJZKV8YR',
        fullName: 'Belkhir mohammed elkamel',
        studentId: '39338707',
        phone: '0659012786',
        specialization: 'Electronique',
        projectTitle: 'Solar powered WiFi irrigation',
        interests: ['electronics'],
        registrationDate: '2025-04-18T18:57:37'
    },
    {
        registrationId: 'INVX-D703IVX6',
        fullName: 'Gueziz Nesrine',
        studentId: '39045379',
        phone: '0666065717',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics'],
        registrationDate: '2025-04-18T19:00:21'
    },
    {
        registrationId: 'INVX-4972GZH7',
        fullName: 'Oussama aroua',
        studentId: '39394608',
        phone: '0782245514',
        specialization: 'Hydrocarbons',
        projectTitle: 'N/A',
        interests: ['robotics'],
        registrationDate: '2025-04-18T19:01:19'
    },
    {
        registrationId: 'WS-SFUP5P8L',
        fullName: 'Oussamaaroua',
        studentId: '39394608',
        phone: '0782245514',
        specialization: 'Hydrocarbons',
        workshop: 'الساعة الأولى: أصالة تاريخ الميلاد - بناء العلامة التجارية الذاتية',
        registrationDate: '2025-04-18T19:02:37'
    },
    {
        registrationId: 'INVX-VZ8RYSOM',
        fullName: 'Kouadria Amani',
        studentId: '35666311',
        phone: '0658202317',
        specialization: 'Computer science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T19:10:27'
    },
    {
        registrationId: 'INVX-OT0DRZ8X',
        fullName: 'امينة',
        studentId: '39365720',
        phone: '0657974141',
        specialization: 'Computer science',
        projectTitle: 'N/A',
        interests: ['web'],
        registrationDate: '2025-04-18T19:10:50'
    },
    {
        registrationId: 'INVX-U9W7DOUA',
        fullName: 'Benchehima sara',
        studentId: '39047759',
        phone: '0660568827',
        specialization: 'telecommunication systems',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'electronics', 'networking'],
        registrationDate: '2025-04-18T19:20:56'
    },
    {
        registrationId: 'INVX-HQCE0YRX',
        fullName: 'AMIRA ABAIDI',
        studentId: '39055360',
        phone: '0664115095',
        specialization: 'اقتصاد كمي',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T19:22:14'
    },
    {
        registrationId: 'INVX-V8OD2YUV',
        fullName: 'Obeidi mohammed ouassim',
        studentId: '39579918',
        phone: '0793389763',
        specialization: 'Computer science',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-18T19:31:32'
    },
    {
        registrationId: 'INVX-FRKRCWP8',
        fullName: 'Zeyneb Bachi',
        studentId: '39520712',
        phone: '0660620350',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'cloud', 'mobile'],
        registrationDate: '2025-04-18T19:31:34'
    },
    {
        registrationId: 'INVX-TYXFT6JZ',
        fullName: 'Daoudamal',
        studentId: '39290519',
        phone: '0659329913',
        specialization: 'Eln',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T19:47:03'
    },
    {
        registrationId: 'INVX-MGASQRQS',
        fullName: 'Boussaha Mahdi',
        studentId: '39048855',
        phone: '0558544456',
        specialization: 'Electronics',
        projectTitle: 'Weather station',
        interests: ['ai', 'electronics', 'networking'],
        registrationDate: '2025-04-18T19:52:00'
    },
    {
        registrationId: 'WS-WT79ORJK',
        fullName: 'Boussaha Mahdi',
        studentId: '39048855',
        phone: '0558544456',
        specialization: 'Electronics',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING',
        registrationDate: '2025-04-18T19:52:50'
    },
    {
        registrationId: 'INVX-PQQKUGXP',
        fullName: 'Boucherba Amine Rachid',
        studentId: '39293504',
        phone: '0676830941',
        specialization: 'Automation',
        projectTitle: 'Automatic balancing Platform',
        interests: ['electronics'],
        registrationDate: '2025-04-18T19:53:27'
    },
    {
        registrationId: 'INVX-IK17ZEK8',
        fullName: 'Bendania charefeddine',
        studentId: '20213905',
        phone: '0554191324',
        specialization: 'Auto',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T19:54:29'
    },
    {
        registrationId: 'INVX-5JHUUDZ5',
        fullName: 'Felkat Belkhir',
        studentId: '39046999',
        phone: '0668594729',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T19:55:27'
    },
    {
        registrationId: 'INVX-CRNQN0R8',
        fullName: 'HADDOU Sara',
        studentId: '39352419',
        phone: '0669763119',
        specialization: 'Electrique',
        projectTitle: 'Solar powered WiFi irrigation',
        interests: ['ai', 'iot', 'electronics'],
        registrationDate: '2025-04-18T20:00:00'
    },
    {
        registrationId: 'INVX-S1D2U1TG',
        fullName: 'lahcini chames eddine',
        studentId: '39053884',
        phone: '0775551680',
        specialization: 'info',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'networking'],
        registrationDate: '2025-04-18T20:00:21'
    },
    {
        registrationId: 'WS-PKMK93OH',
        fullName: 'Ikram kobchi',
        studentId: '39331610',
        phone: '0671503722',
        specialization: 'Computer Science Engineer',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World',
        registrationDate: '2025-04-18T20:15:20'
    },
    {
        registrationId: 'INVX-6F4NVJ5L',
        fullName: 'HADDOU Sara',
        studentId: '39352419',
        phone: '0669763119',
        specialization: 'Electrique',
        projectTitle: 'Solar powered WiFi irrigation',
        interests: ['ai', 'iot', 'electronics'],
        registrationDate: '2025-04-18T20:17:51'
    },
    {
        registrationId: 'INVX-4U3L7S0H',
        fullName: 'ميموني محمد مزيان',
        studentId: '39049611',
        phone: '0656686770',
        specialization: 'الكترونيك أنظمة مدمجة',
        projectTitle: 'N/A',
        interests: ['ai', 'data', 'cloud', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T20:21:02'
    },
    {
        registrationId: 'INVX-NSC06CO6',
        fullName: 'Anfal bouzegag',
        studentId: '39576019',
        phone: '0673418806',
        specialization: 'Computer Science',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'mobile'],
        registrationDate: '2025-04-18T20:37:43'
    },    {
        registrationId: 'INVX-SMBIV6YW',
        fullName: 'HERROUZ salaheddine',
        studentId: '39048446',
        phone: '0673233065',
        specialization: 'Automation',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics'],
        registrationDate: '2025-04-18T14:06:59'
    },
    { 
        registrationId: 'INVX-MUAVVOMA',
        fullName: 'Hadjseyd Narimen',
        studentId: '39567518',
        phone: '0675386373',
        specialization: 'English',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T21:42:18',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'INVX-9KSEV4SL',
        fullName: 'Bahaz manal Nourelhouda',
        studentId: '39344912',
        phone: '0667547108',
        specialization: 'Electronic',
        projectTitle: 'Dual-axis360°/180°solar tracking system',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T20:41:59'
    },
    {
        registrationId: 'WS-Z157SAL6',
        fullName: 'Ayet errahmane hadjadj',
        studentId: '39047458',
        phone: '0672720811',
        specialization: 'accounting',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T20:59:52',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'INVX-JLX2RTGK',
        fullName: 'benderradji Sara',
        studentId: '39045805',
        phone: '0771447614',
        specialization: 'Civil engineering',
        projectTitle: 'N/A',
        interests: ['data'],
        registrationDate: '2025-04-18T21:11:25'
    },
    {
        registrationId: 'INVX-5NDC17IZ',
        fullName: 'Omar Djafri Abderrahmane',
        studentId: '39068933',
        phone: '0668422772',
        specialization: 'Med student',
        projectTitle: 'Video editor',
        interests: ['ai'],
        registrationDate: '2025-04-18T21:14:24'
    },
    {
        registrationId: 'WS-M9W58A7E',
        fullName: 'YACINE HAMMI',
        studentId: '39322603',
        phone: '0666449592',
        specialization: 'Géologie',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:14:59',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming'
    },
    {
        registrationId: 'INVX-YXH3TB08',
        fullName: 'Bahaz manal Nourelhouda',
        studentId: '39344912',
        phone: '0667547108',
        specialization: 'Electronic',
        projectTitle: 'Dual-axis360°/180°solar tracking system',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T21:16:18'
    },
    {
        registrationId: 'INVX-U22P5227',
        fullName: 'Amira Abderrahmane',
        studentId: '39336110',
        phone: '0655647290',
        specialization: 'Ing informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'networking', 'mobile'],
        registrationDate: '2025-04-18T21:16:19'
    },
    {
        registrationId: 'INVX-4JBWW6TZ',
        fullName: 'Ben guehza med el bachir',
        studentId: '20170720',
        phone: '0540028435',
        specialization: 'Système télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:16:42'
    },
    {
        registrationId: 'INVX-ANKHYL2E',
        fullName: 'Bahaz manal Nourelhouda',
        studentId: '39344912',
        phone: '0667547108',
        specialization: 'Electronic',
        projectTitle: 'Dual-axis360°/180°solar tracking system',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T21:19:50'
    },
    {
        registrationId: 'WS-HXBPC1NB',
        fullName: 'Aya bedada',
        studentId: '39298406',
        phone: '0675026039',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:22:45',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming'
    },
    {
        registrationId: 'INVX-IWNT2DRL',
        fullName: 'أمجد كيند',
        studentId: '39576014',
        phone: '0796570605',
        specialization: 'MIASHS',
        projectTitle: 'N/A',
        interests: ['ai', 'data'],
        registrationDate: '2025-04-18T21:24:06'
    },
    {
        registrationId: 'INVX-X13S02EZ',
        fullName: 'Taibi Roumaissa',
        studentId: '39053381',
        phone: '0665851681',
        specialization: 'M1 telecom',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:28:11'
    },
    {
        registrationId: 'INVX-GYVXPUNU',
        fullName: 'ijtihadlatamen',
        studentId: '39337412',
        phone: '0698479291',
        specialization: 'telecominication',
        projectTitle: 'القفل الدكي لحماية الممتلكات عن بعد',
        interests: ['electronics'],
        registrationDate: '2025-04-18T21:36:24'
    },
    {
        registrationId: 'INVX-TREB11T7',
        fullName: 'SMAHI MANSOURI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'networking'],
        registrationDate: '2025-04-18T21:43:22'
    },
    {
        registrationId: 'INVX-WX6X4JT3',
        fullName: 'Mohammed Ramzi Lamniai',
        studentId: '39051718',
        phone: '0796353010',
        specialization: 'Embedded system',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T21:43:34'
    },
    {
        registrationId: 'INVX-XWQ7VHGA',
        fullName: 'Bismilla raounek elbatoul',
        studentId: '39354120',
        phone: '0655397939',
        specialization: 'Electronique',
        projectTitle: 'Solar powered wifi irrigation',
        interests: ['electronics'],
        registrationDate: '2025-04-18T21:45:07'
    },
    {
        registrationId: 'WS-KD20GOYA',
        fullName: 'SMAHI MANSOURI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:45:17',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'WS-5BAO6BJ5',
        fullName: 'MANSOURI SMAHI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:46:08',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'WS-HRLSOS2I',
        fullName: 'MANSOURI SMAHI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:46:40',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World'
    },
    {
        registrationId: 'INVX-ZB8UBE0F',
        fullName: 'MANSOURI SMAHI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'Hse',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T21:50:43'
    },
    {
        registrationId: 'INVX-SZERWX37',
        fullName: 'sarra ateitallah',
        studentId: '39306518',
        phone: '0791790693',
        specialization: 'Médecine',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T22:04:05'
    },
    {
        registrationId: 'WS-IJ6MUZ8M',
        fullName: 'Daoudamal',
        studentId: '39290519',
        phone: '0659329913',
        specialization: 'Eln',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T22:22:41',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'INVX-HPD71JNW',
        fullName: 'TOUILI MOHAMMED TAYEB',
        studentId: '39056662',
        phone: '0656465592',
        specialization: 'Energy renewables',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-18T22:25:58'
    },
    {
        registrationId: 'INVX-SCG7TOIC',
        fullName: 'AHMED MAHER Boughaba',
        studentId: '39050266',
        phone: '0657142683',
        specialization: 'Electronic system embedded',
        projectTitle: 'N/A',
        interests: ['web', 'electronics'],
        registrationDate: '2025-04-18T22:29:12'
    },
    {
        registrationId: 'INVX-QS94XGHL',
        fullName: 'Briki abdellah',
        studentId: '39308102',
        phone: '0658506454',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'networking'],
        registrationDate: '2025-04-18T22:29:19'
    },
    {
        registrationId: 'INVX-I8UF0ZA8',
        fullName: 'Hemmi Mohamed Islam',
        studentId: '39045868',
        phone: '0668352733',
        specialization: 'Machine électrique',
        projectTitle: 'Gaze safe',
        interests: ['robotics'],
        registrationDate: '2025-04-18T22:33:06'
    },
    {
        registrationId: 'INVX-RBC4I4HP',
        fullName: 'Zegheb maroua',
        studentId: '39310806',
        phone: '0552876893',
        specialization: 'Electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T22:42:14'
    },
    {
        registrationId: 'INVX-2D2GR89C',
        fullName: 'Yahia bouanane',
        studentId: '20233953',
        phone: '0656133124',
        specialization: 'الية',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T22:59:52'
    },
    {
        registrationId: 'INVX-WMT6ROFQ',
        fullName: 'Ziane debba',
        studentId: '39536613',
        phone: '0656798582',
        specialization: 'الية',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T23:02:52'
    },
    {
        registrationId: 'INVX-TYFVG8PW',
        fullName: 'Rezka kaoutar',
        studentId: '39338103',
        phone: '0792059652',
        specialization: 'Computer science engineering',
        projectTitle: 'N/A',
        interests: ['web'],
        registrationDate: '2025-04-18T23:03:45'
    },
    {
        registrationId: 'INVX-WWYV3SNX',
        fullName: 'Kadri Romeila Sandra',
        studentId: '39289606',
        phone: '0674262654',
        specialization: 'English student',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'iot', 'mobile'],
        registrationDate: '2025-04-18T23:07:25'
    },
    {
        registrationId: 'INVX-B9DT20K8',
        fullName: 'Rezka kaoutar',
        studentId: '39338103',
        phone: '0792059652',
        specialization: 'Computer science engineering',
        projectTitle: 'N/A',
        interests: ['web', 'networking'],
        registrationDate: '2025-04-18T23:09:34'
    },
    {
        registrationId: 'INVX-QMKRWVHW',
        fullName: 'Belal mohammed',
        studentId: '39052048',
        phone: '0675703253',
        specialization: 'Telecom',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T23:11:51'
    },
    {
        registrationId: 'INVX-SMMFH7OD',
        fullName: 'ABDLKAHHAR',
        studentId: '39049130',
        phone: '0675979198',
        specialization: 'اقتصاد وتسير مؤسسات',
        projectTitle: 'محطة ارصاد',
        interests: ['iot'],
        registrationDate: '2025-04-18T23:16:16'
    },
    {
        registrationId: 'INVX-GJLOCVD4',
        fullName: 'ABDERAOUF',
        studentId: '39053890',
        phone: '0663591928',
        specialization: 'hydraulique',
        projectTitle: 'نظام إنذار ضد السرقة',
        interests: ['electronics'],
        registrationDate: '2025-04-18T23:33:03'
    },
    {
        registrationId: 'INVX-23A1D5D1',
        fullName: 'Semra Mohammed Houssam',
        studentId: '39329116',
        phone: '0676991224',
        specialization: 'Automation',
        projectTitle: 'Smart medical appointment booking',
        interests: ['ai', 'web'],
        registrationDate: '2025-04-18T23:34:52'
    },
    {
        registrationId: 'INVX-CW2H9PS4',
        fullName: 'مريم عزيزي',
        studentId: '39050780',
        phone: '0656563762',
        specialization: 'ريادة أعمال',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'iot'],
        registrationDate: '2025-04-19T00:01:08'
    },
    {
        registrationId: 'INVX-VNFL4CCI',
        fullName: 'ZITONUI AHEAD YACINE',
        studentId: '39307402',
        phone: '0557746778',
        specialization: 'علوم اقتصادية والتسيير وعلوم تجارية',
        projectTitle: 'تجارة الكترونيه',
        interests: ['ai'],
        registrationDate: '2025-04-19T00:10:19'
    },
    {
        registrationId: 'INVX-YW2342X2',
        fullName: 'KACEM AHMED',
        studentId: '39046920',
        phone: '0661454542',
        specialization: 'Technical English (UFC)',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T00:40:04'
    },
    {
        registrationId: 'INVX-7RBX1A2B',
        fullName: 'بناي فيروز ريان',
        studentId: '39048511',
        phone: '0675948444',
        specialization: 'الية وانظمة',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-19T00:48:35'
    },
    {
        registrationId: 'INVX-8P5TMQKG',
        fullName: 'Bada ahmed siradj',
        studentId: '39051870',
        phone: '0563462538',
        specialization: 'electronics',
        projectTitle: 'Smart Irrigation System',
        interests: ['iot', 'electronics'],
        registrationDate: '2025-04-19T00:52:26'
    },
    {
        registrationId: 'WS-KRYGSNFB',
        fullName: 'بناي فيروز ريان',
        studentId: '39048511',
        phone: '0675948444',
        specialization: 'الية وانظمة',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T00:54:18',
        workshop: 'الساعة الثانية: فريد حاج سعيد - من مسقط رأسه إلى العالم'
    },
    {
        registrationId: 'INVX-3TSVYCA4',
        fullName: 'Daoudamal',
        studentId: '39290519',
        phone: '0659329913',
        specialization: 'Eln',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data', 'iot', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T01:15:46'
    },
    {
        registrationId: 'INVX-AZGFN8OF',
        fullName: 'Ben nana roumissa',
        studentId: '39050794',
        phone: '0667964283',
        specialization: 'Physician medical',
        projectTitle: 'Plaza event',
        interests: ['ai', 'web', 'cyber', 'data'],
        registrationDate: '2025-04-19T01:20:51'
    },
    {
        registrationId: 'INVX-LVLPU7IJ',
        fullName: 'Mammadi Ahmed Djabrane',
        studentId: '39056979',
        phone: '0665030610',
        specialization: 'Info',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T01:21:23'
    },
    {
        registrationId: 'INVX-M1FED7E1',
        fullName: 'BOUGUENNOUR MOHAMMED SADOK',
        studentId: '39053174',
        phone: '0665883194',
        specialization: 'Ressources hydraulique',
        projectTitle: 'Smart réseaux',
        interests: ['ai', 'data', 'iot', 'networking'],
        registrationDate: '2025-04-19T02:46:13'
    },
    {
        registrationId: 'INVX-3KSU88U1',
        fullName: 'Talbi mohammed anis',
        studentId: '39334817',
        phone: '0776585687',
        specialization: 'Automatic',
        projectTitle: 'Smart Medical Appointment Booking',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T07:28:19'
    },
    {
        registrationId: 'INVX-DXUEDFOH',
        fullName: 'عبد الرحيم بن زازه',
        studentId: '39058851',
        phone: '0551298593',
        specialization: 'Gestion of agrocultur systeme',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T07:49:21'
    },
    {
        registrationId: 'INVX-N75W1D1H',
        fullName: 'Matallah Nerdjes',
        studentId: '39057174',
        phone: '0674247200',
        specialization: 'langue française',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-19T08:02:49'
    },
    {
        registrationId: 'INVX-SMBIV6YW',
        fullName: 'HERROUZ salaheddine',
        studentId: '39048446',
        phone: '0673233065',
        specialization: 'Automation',
        projectTitle: 'N/A',
        interests: ['ai', 'iot', 'electronics'],
        registrationDate: '2025-04-18T14:06:59'
    },
    { 
        registrationId: 'INVX-MUAVVOMA',
        fullName: 'Hadjseyd Narimen',
        studentId: '39567518',
        phone: '0675386373',
        specialization: 'English',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-16T21:42:18',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'INVX-9KSEV4SL',
        fullName: 'Bahaz manal Nourelhouda',
        studentId: '39344912',
        phone: '0667547108',
        specialization: 'Electronic',
        projectTitle: 'Dual-axis360°/180°solar tracking system',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T20:41:59'
    },
    {
        registrationId: 'WS-Z157SAL6',
        fullName: 'Ayet errahmane hadjadj',
        studentId: '39047458',
        phone: '0672720811',
        specialization: 'accounting',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T20:59:52',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'INVX-JLX2RTGK',
        fullName: 'benderradji Sara',
        studentId: '39045805',
        phone: '0771447614',
        specialization: 'Civil engineering',
        projectTitle: 'N/A',
        interests: ['data'],
        registrationDate: '2025-04-18T21:11:25'
    },
    {
        registrationId: 'INVX-5NDC17IZ',
        fullName: 'Omar Djafri Abderrahmane',
        studentId: '39068933',
        phone: '0668422772',
        specialization: 'Med student',
        projectTitle: 'Video editor',
        interests: ['ai'],
        registrationDate: '2025-04-18T21:14:24'
    },
    {
        registrationId: 'WS-M9W58A7E',
        fullName: 'YACINE HAMMI',
        studentId: '39322603',
        phone: '0666449592',
        specialization: 'Géologie',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:14:59',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming'
    },
    {
        registrationId: 'INVX-YXH3TB08',
        fullName: 'Bahaz manal Nourelhouda',
        studentId: '39344912',
        phone: '0667547108',
        specialization: 'Electronic',
        projectTitle: 'Dual-axis360°/180°solar tracking system',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T21:16:18'
    },
    {
        registrationId: 'INVX-U22P5227',
        fullName: 'Amira Abderrahmane',
        studentId: '39336110',
        phone: '0655647290',
        specialization: 'Ing informatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'networking', 'mobile'],
        registrationDate: '2025-04-18T21:16:19'
    },
    {
        registrationId: 'INVX-4JBWW6TZ',
        fullName: 'Ben guehza med el bachir',
        studentId: '20170720',
        phone: '0540028435',
        specialization: 'Système télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:16:42'
    },
    {
        registrationId: 'INVX-ANKHYL2E',
        fullName: 'Bahaz manal Nourelhouda',
        studentId: '39344912',
        phone: '0667547108',
        specialization: 'Electronic',
        projectTitle: 'Dual-axis360°/180°solar tracking system',
        interests: ['ai', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T21:19:50'
    },
    {
        registrationId: 'WS-HXBPC1NB',
        fullName: 'Aya bedada',
        studentId: '39298406',
        phone: '0675026039',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:22:45',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming'
    },
    {
        registrationId: 'INVX-IWNT2DRL',
        fullName: 'أمجد كيند',
        studentId: '39576014',
        phone: '0796570605',
        specialization: 'MIASHS',
        projectTitle: 'N/A',
        interests: ['ai', 'data'],
        registrationDate: '2025-04-18T21:24:06'
    },
    {
        registrationId: 'INVX-X13S02EZ',
        fullName: 'Taibi Roumaissa',
        studentId: '39053381',
        phone: '0665851681',
        specialization: 'M1 telecom',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:28:11'
    },
    {
        registrationId: 'INVX-GYVXPUNU',
        fullName: 'ijtihadlatamen',
        studentId: '39337412',
        phone: '0698479291',
        specialization: 'telecominication',
        projectTitle: 'القفل الدكي لحماية الممتلكات عن بعد',
        interests: ['electronics'],
        registrationDate: '2025-04-18T21:36:24'
    },
    {
        registrationId: 'INVX-TREB11T7',
        fullName: 'SMAHI MANSOURI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'networking'],
        registrationDate: '2025-04-18T21:43:22'
    },
    {
        registrationId: 'INVX-WX6X4JT3',
        fullName: 'Mohammed Ramzi Lamniai',
        studentId: '39051718',
        phone: '0796353010',
        specialization: 'Embedded system',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T21:43:34'
    },
    {
        registrationId: 'INVX-XWQ7VHGA',
        fullName: 'Bismilla raounek elbatoul',
        studentId: '39354120',
        phone: '0655397939',
        specialization: 'Electronique',
        projectTitle: 'Solar powered wifi irrigation',
        interests: ['electronics'],
        registrationDate: '2025-04-18T21:45:07'
    },
    {
        registrationId: 'WS-KD20GOYA',
        fullName: 'SMAHI MANSOURI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:45:17',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'WS-5BAO6BJ5',
        fullName: 'MANSOURI SMAHI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:46:08',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'WS-HRLSOS2I',
        fullName: 'MANSOURI SMAHI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'HSE',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T21:46:40',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World'
    },
    {
        registrationId: 'INVX-ZB8UBE0F',
        fullName: 'MANSOURI SMAHI',
        studentId: '39524916',
        phone: '0658922484',
        specialization: 'Hse',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T21:50:43'
    },
    {
        registrationId: 'INVX-SZERWX37',
        fullName: 'sarra ateitallah',
        studentId: '39306518',
        phone: '0791790693',
        specialization: 'Médecine',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-18T22:04:05'
    },
    {
        registrationId: 'WS-IJ6MUZ8M',
        fullName: 'Daoudamal',
        studentId: '39290519',
        phone: '0659329913',
        specialization: 'Eln',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T22:22:41',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'INVX-HPD71JNW',
        fullName: 'TOUILI MOHAMMED TAYEB',
        studentId: '39056662',
        phone: '0656465592',
        specialization: 'Energy renewables',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-18T22:25:58'
    },
    {
        registrationId: 'INVX-SCG7TOIC',
        fullName: 'AHMED MAHER Boughaba',
        studentId: '39050266',
        phone: '0657142683',
        specialization: 'Electronic system embedded',
        projectTitle: 'N/A',
        interests: ['web', 'electronics'],
        registrationDate: '2025-04-18T22:29:12'
    },
    {
        registrationId: 'INVX-QS94XGHL',
        fullName: 'Briki abdellah',
        studentId: '39308102',
        phone: '0658506454',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'networking'],
        registrationDate: '2025-04-18T22:29:19'
    },
    {
        registrationId: 'INVX-I8UF0ZA8',
        fullName: 'Hemmi Mohamed Islam',
        studentId: '39045868',
        phone: '0668352733',
        specialization: 'Machine électrique',
        projectTitle: 'Gaze safe',
        interests: ['robotics'],
        registrationDate: '2025-04-18T22:33:06'
    },
    {
        registrationId: 'INVX-RBC4I4HP',
        fullName: 'Zegheb maroua',
        studentId: '39310806',
        phone: '0552876893',
        specialization: 'Electronics',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'electronics', 'robotics'],
        registrationDate: '2025-04-18T22:42:14'
    },
    {
        registrationId: 'INVX-2D2GR89C',
        fullName: 'Yahia bouanane',
        studentId: '20233953',
        phone: '0656133124',
        specialization: 'الية',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T22:59:52'
    },
    {
        registrationId: 'INVX-WMT6ROFQ',
        fullName: 'Ziane debba',
        studentId: '39536613',
        phone: '0656798582',
        specialization: 'الية',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-18T23:02:52'
    },
    {
        registrationId: 'INVX-TYFVG8PW',
        fullName: 'Rezka kaoutar',
        studentId: '39338103',
        phone: '0792059652',
        specialization: 'Computer science engineering',
        projectTitle: 'N/A',
        interests: ['web'],
        registrationDate: '2025-04-18T23:03:45'
    },
    {
        registrationId: 'INVX-WWYV3SNX',
        fullName: 'Kadri Romeila Sandra',
        studentId: '39289606',
        phone: '0674262654',
        specialization: 'English student',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'iot', 'mobile'],
        registrationDate: '2025-04-18T23:07:25'
    },
    {
        registrationId: 'INVX-B9DT20K8',
        fullName: 'Rezka kaoutar',
        studentId: '39338103',
        phone: '0792059652',
        specialization: 'Computer science engineering',
        projectTitle: 'N/A',
        interests: ['web', 'networking'],
        registrationDate: '2025-04-18T23:09:34'
    },
    {
        registrationId: 'INVX-QMKRWVHW',
        fullName: 'Belal mohammed',
        studentId: '39052048',
        phone: '0675703253',
        specialization: 'Telecom',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-18T23:11:51'
    },
    {
        registrationId: 'INVX-SMMFH7OD',
        fullName: 'ABDLKAHHAR',
        studentId: '39049130',
        phone: '0675979198',
        specialization: 'اقتصاد وتسير مؤسسات',
        projectTitle: 'محطة ارصاد',
        interests: ['iot'],
        registrationDate: '2025-04-18T23:16:16'
    },
    {
        registrationId: 'INVX-GJLOCVD4',
        fullName: 'ABDERAOUF',
        studentId: '39053890',
        phone: '0663591928',
        specialization: 'hydraulique',
        projectTitle: 'نظام إنذار ضد السرقة',
        interests: ['electronics'],
        registrationDate: '2025-04-18T23:33:03'
    },
    {
        registrationId: 'INVX-23A1D5D1',
        fullName: 'Semra Mohammed Houssam',
        studentId: '39329116',
        phone: '0676991224',
        specialization: 'Automation',
        projectTitle: 'Smart medical appointment booking',
        interests: ['ai', 'web'],
        registrationDate: '2025-04-18T23:34:52'
    },
    {
        registrationId: 'INVX-CW2H9PS4',
        fullName: 'مريم عزيزي',
        studentId: '39050780',
        phone: '0656563762',
        specialization: 'ريادة أعمال',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'iot'],
        registrationDate: '2025-04-19T00:01:08'
    },
    {
        registrationId: 'INVX-VNFL4CCI',
        fullName: 'ZITONUI AHEAD YACINE',
        studentId: '39307402',
        phone: '0557746778',
        specialization: 'علوم اقتصادية والتسيير وعلوم تجارية',
        projectTitle: 'تجارة الكترونيه',
        interests: ['ai'],
        registrationDate: '2025-04-19T00:10:19'
    },
    {
        registrationId: 'INVX-YW2342X2',
        fullName: 'KACEM AHMED',
        studentId: '39046920',
        phone: '0661454542',
        specialization: 'Technical English (UFC)',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T00:40:04'
    },
    {
        registrationId: 'INVX-7RBX1A2B',
        fullName: 'بناي فيروز ريان',
        studentId: '39048511',
        phone: '0675948444',
        specialization: 'الية وانظمة',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking'],
        registrationDate: '2025-04-19T00:48:35'
    },
    {
        registrationId: 'INVX-8P5TMQKG',
        fullName: 'Bada ahmed siradj',
        studentId: '39051870',
        phone: '0563462538',
        specialization: 'electronics',
        projectTitle: 'Smart Irrigation System',
        interests: ['iot', 'electronics'],
        registrationDate: '2025-04-19T00:52:26'
    },
    {
        registrationId: 'WS-KRYGSNFB',
        fullName: 'بناي فيروز ريان',
        studentId: '39048511',
        phone: '0675948444',
        specialization: 'الية وانظمة',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T00:54:18',
        workshop: 'الساعة الثانية: فريد حاج سعيد - من مسقط رأسه إلى العالم'
    },
    {
        registrationId: 'INVX-3TSVYCA4',
        fullName: 'Daoudamal',
        studentId: '39290519',
        phone: '0659329913',
        specialization: 'Eln',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'data', 'iot', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T01:15:46'
    },
    {
        registrationId: 'INVX-AZGFN8OF',
        fullName: 'Ben nana roumissa',
        studentId: '39050794',
        phone: '0667964283',
        specialization: 'Physician medical',
        projectTitle: 'Plaza event',
        interests: ['ai', 'web', 'cyber', 'data'],
        registrationDate: '2025-04-19T01:20:51'
    },
    {
        registrationId: 'INVX-LVLPU7IJ',
        fullName: 'Mammadi Ahmed Djabrane',
        studentId: '39056979',
        phone: '0665030610',
        specialization: 'Info',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T01:21:23'
    },
    {
        registrationId: 'INVX-M1FED7E1',
        fullName: 'BOUGUENNOUR MOHAMMED SADOK',
        studentId: '39053174',
        phone: '0665883194',
        specialization: 'Ressources hydraulique',
        projectTitle: 'Smart réseaux',
        interests: ['ai', 'data', 'iot', 'networking'],
        registrationDate: '2025-04-19T02:46:13'
    },
    {
        registrationId: 'INVX-3KSU88U1',
        fullName: 'Talbi mohammed anis',
        studentId: '39334817',
        phone: '0776585687',
        specialization: 'Automatic',
        projectTitle: 'Smart Medical Appointment Booking',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T07:28:19'
    },
    {
        registrationId: 'INVX-DXUEDFOH',
        fullName: 'عبد الرحيم بن زازه',
        studentId: '39058851',
        phone: '0551298593',
        specialization: 'Gestion of agrocultur systeme',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T07:49:21'
    },
    {
        registrationId: 'INVX-N75W1D1H',
        fullName: 'Matallah Nerdjes',
        studentId: '39057174',
        phone: '0674247200',
        specialization: 'langue française',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-19T08:02:49'
    },
    
    {
        registrationId: 'INVX-P0V4O1M8',
        fullName: 'Ouchene fateh',
        studentId: '22021986',
        phone: '0770863117',
        specialization: 'Telecom',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T08:02:49'
    },
    {
        registrationId: 'INVX-YFGC9OHU',
        fullName: 'زروقي أحمد فوزي',
        studentId: '39310602',
        phone: '0660457081',
        specialization: 'اعلام الي مهندس دولة',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T14:26:02'
    },
    {
        registrationId: 'INVX-XTEWUFGI',
        fullName: 'wedad afissa',
        studentId: '39641215',
        phone: '0672255514',
        specialization: 'informatique ing',
        projectTitle: 'N/A',
        interests: ['web', 'data', 'cloud', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T14:25:08'
    },
    {
        registrationId: 'INVX-U8VVSSJL',
        fullName: 'بن قويدر عبد المؤمن',
        studentId: '39318404',
        phone: '0699996826',
        specialization: 'اعلام الي مهندس دولة',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T14:26:45'
    },
    {
        registrationId: 'INVX-Z17O1URV',
        fullName: 'Ben kaddour abd ennour',
        studentId: '39047010',
        phone: '0795683071',
        specialization: 'Technologie',
        projectTitle: 'FTTH',
        interests: ['cyber'],
        registrationDate: '2025-04-19T14:31:47'
    },
    {
        registrationId: 'INVX-38JSPZVX',
        fullName: 'Salah Edin Lakbichi',
        studentId: '39540518',
        phone: '0667380905',
        specialization: 'Computer Science Engineer',
        projectTitle: 'N/A',
        interests: ['ai', 'electronics', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T14:35:54'
    },
    {
        registrationId: 'INVX-BX1MJ31J',
        fullName: 'Laouar Mohammad abderrahmane',
        studentId: '39092011',
        phone: '0775551050',
        specialization: 'Instrument',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T15:11:28'
    },
    {
        registrationId: 'INVX-VHMWDK7Z',
        fullName: 'Laouisset ahmed yacine',
        studentId: '39300910',
        phone: '0669362712',
        specialization: 'Automatic',
        projectTitle: 'fruits counter',
        interests: ['ai', 'robotics'],
        registrationDate: '2025-04-19T15:14:40'
    },
    {
        registrationId: 'INVX-YNL06CRG',
        fullName: 'Akram Gueziz',
        studentId: '39295105',
        phone: '0697093868',
        specialization: 'Auto',
        projectTitle: "Contrôle de l'irrigation par axe à distance",
        interests: ['robotics'],
        registrationDate: '2025-04-19T16:43:34'
    },
    {
        registrationId: 'WS-9JR3ULU7',
        fullName: 'maou mayar malak',
        studentId: '39344917',
        phone: '0559436999',
        specialization: 'petroleum instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T16:51:43',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'WS-26VCN88X',
        fullName: 'DJARROUDIB NOUR MELEK',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T16:52:36',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'WS-961IT2TD',
        fullName: 'DJARROUDIB NOUR MELEK',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T16:53:01',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'WS-PFZTICTP',
        fullName: 'DJARROUDIB NOUR MELEK',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T16:53:18',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World'
    },
    {
        registrationId: 'WS-X5NII7GI',
        fullName: 'DJARROUDIB NOUR MELEK',
        studentId: '39345011',
        phone: '0558918966',
        specialization: 'Petroleum instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T16:53:32',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming'
    },
    {
        registrationId: 'WS-I0ZST5SV',
        fullName: 'Boukechouiou loibna',
        studentId: '39058275',
        phone: '0665251581',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T17:58:22',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World'
    },
    {
        registrationId: 'INVX-STJMGI3N',
        fullName: 'Bouafia mohammed amine',
        studentId: '35087817',
        phone: '0676083491',
        specialization: '2nd year geengineering mecanique',
        projectTitle: 'Visitor',
        interests: [],
        registrationDate: '2025-04-19T18:10:55'
    },
    {
        registrationId: 'INVX-ZR7MBJVL',
        fullName: 'Nouifdi rayene',
        studentId: '31201013',
        phone: '0668440889',
        specialization: '1st year science and technologie',
        projectTitle: 'Visitor',
        interests: [],
        registrationDate: '2025-04-19T18:13:58'
    },
    {
        registrationId: 'INVX-3QTZD506',
        fullName: 'Houari alaa eddine',
        studentId: '38348212',
        phone: '0549201566',
        specialization: '2nd year engineering mecanique',
        projectTitle: 'Visitor',
        interests: [],
        registrationDate: '2025-04-19T18:16:25'
    },
    {
        registrationId: 'INVX-OTD3ZBLL',
        fullName: 'Ballah meriem',
        studentId: '39400306',
        phone: '0668398577',
        specialization: 'Géne de procéder',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T18:16:26'
    },
    {
        registrationId: 'INVX-6634TWXY',
        fullName: 'Bentebba malak',
        studentId: '39322204',
        phone: '0783199258',
        specialization: 'Travaux public',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T18:20:06'
    },
    {
        registrationId: 'INVX-ALQL1AF0',
        fullName: 'HADJ AISSA BAELHADJ',
        studentId: '39083773',
        phone: '0659625281',
        specialization: 'Mechanical Engineering',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'networking'],
        registrationDate: '2025-04-19T18:22:51'
    },
    {
        registrationId: 'INVX-8I9IKIK2',
        fullName: 'Sadek amine djebaili',
        studentId: '39304310',
        phone: '0663015873',
        specialization: 'Mechanical engineering',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'electronics', 'networking', 'robotics'],
        registrationDate: '2025-04-19T18:30:55'
    },
    {
        registrationId: 'INVX-1A9V8Y0C',
        fullName: 'benyahia',
        studentId: '39055806',
        phone: '0665114874',
        specialization: 'G mécanique',
        projectTitle: 'N/A',
        interests: ['networking'],
        registrationDate: '2025-04-19T18:32:27'
    },
    {
        registrationId: 'INVX-LEED2SL4',
        fullName: 'Benesseddik Razika',
        studentId: '39397516',
        phone: '0665998040',
        specialization: 'Aoutamatiqu',
        projectTitle: '3D scanner',
        interests: [],
        registrationDate: '2025-04-19T18:39:11'
    },
    {
        registrationId: 'INVX-ZHEIKFCL',
        fullName: 'Almadani Mohi Eddin',
        studentId: '39050156',
        phone: '0778768502',
        specialization: 'Telecommunications',
        projectTitle: 'Dalil go',
        interests: ['networking'],
        registrationDate: '2025-04-19T18:47:24'
    },
    {
        registrationId: 'INVX-4247ZDQ9',
        fullName: 'Assia Benbelkacem',
        studentId: '39051856',
        phone: '0655807822',
        specialization: 'Telecommunications',
        projectTitle: 'Dalil go',
        interests: ['electronics'],
        registrationDate: '2025-04-19T18:50:52'
    },
    {
        registrationId: 'INVX-01GZGGH8',
        fullName: 'Radja Benddine',
        studentId: '39300302',
        phone: '0660719897',
        specialization: 'مدرسة عليا للأساتذة',
        projectTitle: 'N/A',
        interests: ['web', 'data', 'electronics', 'networking', 'mobile'],
        registrationDate: '2025-04-19T18:55:09'
    },
    {
        registrationId: 'INVX-9J550NRG',
        fullName: 'Toumi soundes',
        studentId: '39051627',
        phone: '0667165466',
        specialization: 'Petrochemicale',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T18:56:17'
    },
    {
        registrationId: 'INVX-L5PKYEXC',
        fullName: 'Ayat errahman Debbakh',
        studentId: '39320411',
        phone: '0656802281',
        specialization: 'Telecommunications',
        projectTitle: 'Dalil go',
        interests: ['electronics'],
        registrationDate: '2025-04-19T19:06:15'
    },
    {
        registrationId: 'INVX-OKUHH5AM',
        fullName: 'بالحبيب محمد الطاهر',
        studentId: '39354402',
        phone: '0555471218',
        specialization: 'الكترونيك',
        projectTitle: 'مستشعر المطر',
        interests: ['electronics'],
        registrationDate: '2025-04-19T19:16:57'
    },
    {
        registrationId: 'INVX-2P9VIZSV',
        fullName: 'Mohamed firas bekkari',
        studentId: '39304805',
        phone: '0696744372',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-19T19:20:17'
    },
    {
        registrationId: 'WS-UFP7BCXJ',
        fullName: 'MERABET SALSABIL',
        studentId: '33292413',
        phone: '0668702596',
        specialization: 'ENS Français',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T19:34:58',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World'
    },
    {
        registrationId: 'INVX-J7QLFYKL',
        fullName: 'KORICHI MOAHMED AYOUB',
        studentId: '39312210',
        phone: '0660696913',
        specialization: 'Telecommunications',
        projectTitle: 'Dalil go',
        interests: ['electronics'],
        registrationDate: '2025-04-19T19:42:00'
    },
    {
        registrationId: 'INVX-8TRH7GD4',
        fullName: 'Meriem toubakh',
        studentId: '39586110',
        phone: '0660907683',
        specialization: 'St',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T19:48:13'
    },
    {
        registrationId: 'INVX-IY35Q9B9',
        fullName: 'Rayane Bedoui',
        studentId: '39051601',
        phone: '0698003984',
        specialization: 'Etude et contrôle bâtîmes et routes',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T19:54:21'
    },
    {
        registrationId: 'INVX-0T9L0YFO',
        fullName: 'Kara roumaissa',
        studentId: '39340714',
        phone: '0541820217',
        specialization: 'Biologie',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T19:57:09'
    },
    {
        registrationId: 'INVX-AY1REQW2',
        fullName: 'Nadir hidaya',
        studentId: '39541104',
        phone: '0675254220',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T20:14:49'
    },
    {
        registrationId: 'INVX-IWM5JZ91',
        fullName: 'ZITOUNI ABDILLAH ANISS',
        studentId: '39307910',
        phone: '0670978419',
        specialization: 'علوم اقتصادية والتسيير وعلوم التجارية',
        projectTitle: 'تجارة الكترونية',
        interests: ['ai'],
        registrationDate: '2025-04-19T20:30:32'
    },
    {
        registrationId: 'INVX-6E2BAASY',
        fullName: 'Khaled RAHMA',
        studentId: '29315318',
        phone: '0674848696',
        specialization: 'Informatique (ingenieur)',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'robotics'],
        registrationDate: '2025-04-19T20:34:47'
    },
    {
        registrationId: 'INVX-HEYX76SW',
        fullName: 'Mechri Safia',
        studentId: '39050084',
        phone: '0664369498',
        specialization: 'Électronique',
        projectTitle: 'Hand tracking',
        interests: [],
        registrationDate: '2025-04-19T20:51:59'
    },
    {
        registrationId: 'INVX-LRUZUAV8',
        fullName: 'Benchabana Ahmed Zakaria',
        studentId: '39056448',
        phone: '0662807578',
        specialization: 'Electronic',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T20:55:28'
    },
    {
        registrationId: 'WS-LBMNOAGU',
        fullName: 'Belaribi Lidia',
        studentId: '39318302',
        phone: '0541009930',
        specialization: 'Renewable energies',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:15:22',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'WS-W1QPOWJR',
        fullName: 'Younsi Rahil',
        studentId: '32029013',
        phone: '0540473302',
        specialization: 'Hydrocarbons',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:16:49',
        workshop: 'FIRST HOUR: KARIM KHELIFI - From Classroom to Career'
    },
    {
        registrationId: 'INVX-ZPEURXBN',
        fullName: 'Meissa israa',
        studentId: '39046787',
        phone: '0659087575',
        specialization: 'Étude et contrôle bâtiment et routes',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:24:10'
    },
    {
        registrationId: 'INVX-UH1GJ35G',
        fullName: 'Gana dhiya',
        studentId: '39059369',
        phone: '0666700572',
        specialization: 'ميكانيك',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:31:05'
    },
    {
        registrationId: 'INVX-Z4UJ4SNL',
        fullName: 'Khouloud messaoudi',
        studentId: '39290710',
        phone: '0562719177',
        specialization: 'Hydraulique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:31:54'
    },
    {
        registrationId: 'INVX-EX9JPMDI',
        fullName: 'Ben hammouda RIHAN',
        studentId: '39328015',
        phone: '0673299540',
        specialization: 'Agricultural Sciences',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:32:44'
    },
    {
        registrationId: 'INVX-WPR2C2RO',
        fullName: 'Bouasria dia elhak',
        studentId: '39349311',
        phone: '0674570139',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:39:18'
    },
    {
        registrationId: 'INVX-67ITS866',
        fullName: 'Ben guehza med el bachir',
        studentId: '39047617',
        phone: '0540028435',
        specialization: 'Télécommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T21:40:07'
    },
    {
        registrationId: 'INVX-L74Z54ZA',
        fullName: 'Benarif Nesrine',
        studentId: '39294305',
        phone: '0669259970',
        specialization: 'Electronics',
        projectTitle: 'New Gen Absence',
        interests: ['electronics'],
        registrationDate: '2025-04-19T21:47:27'
    },
    {
        registrationId: 'INVX-XQ62E2S5',
        fullName: 'Lamine HADJSEYD',
        studentId: '39311623',
        phone: '0559423515',
        specialization: 'Hydrocarbures',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-19T21:51:17'
    },
    {
        registrationId: 'INVX-0BJVZPO2',
        fullName: 'Ikram bedjadj',
        studentId: '39306207',
        phone: '0698665757',
        specialization: 'Computer science',
        projectTitle: 'Implementing Ann model for speech emotion recognition',
        interests: ['ai', 'cyber', 'networking'],
        registrationDate: '2025-04-19T21:51:34'
    },
    {
        registrationId: 'INVX-E5DUJ06Y',
        fullName: 'Mohammed siad',
        studentId: '39323114',
        phone: '0654472177',
        specialization: 'Automatique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T21:52:01'
    },
    {
        registrationId: 'INVX-BY6JQ0WC',
        fullName: 'Massinissa Ait Ounas',
        studentId: '39313311',
        phone: '0770842608',
        specialization: 'Pilote',
        projectTitle: 'N/A',
        interests: ['cyber', 'electronics', 'robotics'],
        registrationDate: '2025-04-19T21:54:46'
    },
    {
        registrationId: 'INVX-22U14YC7',
        fullName: 'Allali mohammed idris',
        studentId: '39338118',
        phone: '0675724698',
        specialization: 'Electronic',
        projectTitle: 'Rain Sensor',
        interests: ['electronics'],
        registrationDate: '2025-04-19T22:00:38'
    },
    {
        registrationId: 'WS-X3PSYQ09',
        fullName: 'Gana Abdelbari',
        studentId: '39054406',
        phone: '0675312109',
        specialization: 'Embedded Systems',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T22:10:19',
        workshop: 'SECOND HOUR: ADEM MELLOUKA - FPGA & VHDL Programming'
    },
    {
        registrationId: 'WS-8JWQWRAN',
        fullName: 'Gana Abdelbari',
        studentId: '39054406',
        phone: '0675312109',
        specialization: 'Embedded Systems',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T22:11:35',
        workshop: 'SECOND HOUR: FARID HADJ SAID - From Home Town to the World'
    },
    {
        registrationId: 'INVX-98GIX1F4',
        fullName: 'Boussaid asma',
        studentId: '39053524',
        phone: '0661161820',
        specialization: 'Elctronic',
        projectTitle: 'New gen absence',
        interests: ['electronics'],
        registrationDate: '2025-04-19T22:37:31'
    },
    {
        registrationId: 'INVX-E1OIBEEY',
        fullName: 'Hayat arfa',
        studentId: '39313804',
        phone: '0670875785',
        specialization: 'Informatique',
        projectTitle: 'N/A',
        interests: ['data'],
        registrationDate: '2025-04-19T22:44:27'
    },
    {
        registrationId: 'INVX-HSUZZ54Z',
        fullName: 'هني ايناس',
        studentId: '20213905',
        phone: '0698533679',
        specialization: 'أدب عربي',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T22:44:45'
    },
    {
        registrationId: 'INVX-D3V7THLB',
        fullName: 'Ammour Doua',
        studentId: '39053367',
        phone: '0667159451',
        specialization: 'Telecommunication',
        projectTitle: 'N/A',
        interests: ['web'],
        registrationDate: '2025-04-19T22:46:56'
    },
    {
        registrationId: 'INVX-66M20PVE',
        fullName: 'Boughaba Ines',
        studentId: '39053333',
        phone: '0669775093',
        specialization: 'Telecommunication',
        projectTitle: 'N/A',
        interests: ['ai'],
        registrationDate: '2025-04-19T22:48:01'
    },
    {
        registrationId: 'INVX-SO61DSUT',
        fullName: 'Mohammed Laid kouidri',
        studentId: '39047629',
        phone: '0698334849',
        specialization: 'ELECTRONIC',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-19T22:50:02'
    },
    {
        registrationId: 'INVX-JHN68DMZ',
        fullName: 'Nihad djadla bentebbal',
        studentId: '39051376',
        phone: '0677497683',
        specialization: 'M1 electronic systems embedded',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-19T22:50:56'
    },
    {
        registrationId: 'INVX-Z3LRM7CH',
        fullName: 'Aouachir mohammed yacine',
        studentId: '39290213',
        phone: '0666849206',
        specialization: 'Telecommunications',
        projectTitle: 'Dalil go',
        interests: ['electronics'],
        registrationDate: '2025-04-19T23:09:13'
    },
    {
        registrationId: 'WS-8ER092HU',
        fullName: 'AGGAL MOHAMMED DRISS',
        studentId: '39380609',
        phone: '0671720179',
        specialization: 'Électrotechnique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T23:13:50',
        workshop: 'الساعة الأولى: أصالة تاريخ الميلاد - بناء العلامة التجارية الذاتية'
    },
    {
        registrationId: 'WS-KWSEKXQL',
        fullName: 'AGGAL MOHAMMED DRISS',
        studentId: '39380609',
        phone: '0671720179',
        specialization: 'Électrotechnique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T23:14:30',
        workshop: 'الساعة الثانية: آدم ميلوكا - برمجة FPGA وVHDL'
    },
    {
        registrationId: 'WS-X2Y3W7YC',
        fullName: 'AGGAL MOHAMMED DRISS',
        studentId: '39380609',
        phone: '0671720179',
        specialization: 'Électrotechnique',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T23:14:53',
        workshop: 'الساعة الأولى: كريم خليفي - من قاعة الدراسة إلى المهنة'
    },
    {
        registrationId: 'INVX-NYL9GVUJ',
        fullName: 'ZIDI SAFA',
        studentId: '39315519',
        phone: '1111111111',
        specialization: 'Geology',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'electronics', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T23:17:37'
    },
    {
        registrationId: 'INVX-VUG4INJ1',
        fullName: 'برابح ياسين',
        studentId: '39047677',
        phone: '0658807501',
        specialization: 'الكتروتقني',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-19T23:21:03'
    },
    {
        registrationId: 'WS-KTM5AZ8B',
        fullName: 'برابح ياسين',
        studentId: '39047677',
        phone: '0658807501',
        specialization: 'الكتروتقني',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T23:22:04',
        workshop: 'الساعة الثانية: آدم ميلوكا - برمجة FPGA وVHDL'
    },
    {
        registrationId: 'INVX-U8N49SIN',
        fullName: 'Remdani Safia',
        studentId: '20223039',
        phone: '2222222222',
        specialization: 'Geology',
        projectTitle: 'N/A',
        interests: ['ai', 'cyber', 'data', 'iot', 'electronics', 'networking', 'robotics'],
        registrationDate: '2025-04-19T23:27:21'
    },
    {
        registrationId: 'INVX-ZB2HICEA',
        fullName: 'Besmalasenoussaoui',
        studentId: '30397606',
        phone: '0000000000',
        specialization: 'Geology',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T23:28:47'
    },
    {
        registrationId: 'INVX-Z49TIYNI',
        fullName: 'Aiad Abdelchakour',
        studentId: '39046882',
        phone: '0676196446',
        specialization: 'Geology of hydrocarbons',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T23:49:30'
    },
    {
        registrationId: 'INVX-9T6KXJ5T',
        fullName: 'CHAFOU BAHA EDDINE',
        studentId: '39060393',
        phone: '0655871017',
        specialization: 'hydrocodone geology',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-19T23:53:02'
    },
    {
        registrationId: 'INVX-SW0CNY2I',
        fullName: 'ACHOURI haroune',
        studentId: '39049621',
        phone: '0773196462',
        specialization: 'Electrotechnique',
        projectTitle: 'N/A',
        interests: ['ai', 'web', 'cyber', 'data', 'iot', 'cloud', 'electronics', 'networking', 'mobile', 'robotics'],
        registrationDate: '2025-04-19T23:55:05'
    },
    {
        registrationId: 'INVX-YXYGIW4D',
        fullName: 'Saidi amel',
        studentId: '39059187',
        phone: '0611111111',
        specialization: 'Geology',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-19T23:57:36'
    },
    {
        registrationId: 'WS-DON2W4VK',
        fullName: 'Henni Dikra',
        studentId: '39306420',
        phone: '0667528128',
        specialization: "Système d'information",
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-20T00:04:38',
        workshop: 'FIRST HOUR: ASALA DOB - SELF BRANDING'
    },
    {
        registrationId: 'INVX-SHG4UJOG',
        fullName: 'كاتب آية الرحمان',
        studentId: '39318810',
        phone: '0697647979',
        specialization: 'حقوق و علوم سياسية',
        projectTitle: 'N/A',
        interests: ['web', 'iot', 'mobile', 'robotics'],
        registrationDate: '2025-04-20T00:09:42'
    },
    {
        registrationId: 'INVX-9VDHO2DC',
        fullName: 'Abderrhman',
        studentId: '20223930',
        phone: '0797525813',
        specialization: 'Telecommunication',
        projectTitle: 'Rank eysi',
        interests: ['web'],
        registrationDate: '2025-04-20T00:29:06'
    },
    {
        registrationId: 'INVX-4PSA1J6J',
        fullName: 'BENSALEM NOUR EL HOUDA',
        studentId: '39058670',
        phone: '0667120363',
        specialization: 'INDUSTRIAL ELECTROTECHNICS',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-20T00:25:54'
    },
    {
        registrationId: 'INVX-II74N3JC',
        fullName: 'Maroua Bouab',
        studentId: '39305602',
        phone: '0696177016',
        specialization: 'Telecommunications',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-20T00:33:10'
    },
    {
        registrationId: 'INVX-YOSN4WGT',
        fullName: 'بوعزة فاطيمة bouaza fatima',
        studentId: '37004792',
        phone: '0664546894',
        specialization: 'صيانة صناعية',
        projectTitle: 'صندوق تبريد -40C',
        interests: ['ai', 'web', 'electronics', 'robotics'],
        registrationDate: '2025-04-20T00:42:32'
    },
    {
        registrationId: 'INVX-0R6EKNT9',
        fullName: 'Bassou Mohammed fouad',
        studentId: '39056047',
        phone: '0541896503',
        specialization: 'Automatic',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-20T01:18:09'
    },
    {
        registrationId: 'INVX-XP4HYYML',
        fullName: 'Chouaib Bouras',
        studentId: '39055605',
        phone: '0696432746',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-20T01:37:03',
        workshops: "FIRST HOUR: ASALA DOB - SELF BRANDING",
    },    {
        registrationId: 'INVX-XP4HYYML',
        fullName: 'Chouaib Bouras',
        studentId: '39055605',
        phone: '0696432746',
        specialization: 'Instrumentation',
        projectTitle: 'N/A',
        interests: [],
        registrationDate: '2025-04-20T01:37:03',
        workshops: "FIRST HOUR: ASALA DOB - SELF BRANDING",
    },
    {
        registrationId: 'INVX-HXWO56UQ',
        fullName: 'Tobchi Alaa',
        studentId: '39049719',
        phone: '0675465085',
        specialization: 'electtonics',
        projectTitle: 'N/A',
        interests: ['electronics'],
        registrationDate: '2025-04-20T01:37:03',
    },
    {
        registrationId: 'INVX-BTLN49AC',
        fullName: 'ARAR NADIR',
        studentId: '39331515',
        phone: '0666517242',
        specialization: 'Génie proside',
        projectTitle: 'N/A',
        interests: ['mobile'],
        registrationDate: '2025-04-20T01:37:03',
    },
    
    



];

// Workshop definitions
// Workshop definitions
const workshops = [
    {
        id: 'asala',
        title: 'ASALA DOB - SELF BRANDING',
        description: 'Master the art of personal branding and professional self-presentation.',
        capacity: 50,
        time: 'FIRST HOUR'
    },
    {
        id: 'karim',
        title: 'KARIM KHELIFI - From Classroom to Career',
        description: 'Learn how to transition from academic studies to a successful professional career.',
        capacity: 50,
        time: 'FIRST HOUR'
    },
    {
        id: 'farid',
        title: 'FARID HADJ SAID - From Home Town to the World',
        description: 'Discover how to expand your horizons from local to global opportunities.',
        capacity: 50,
        time: 'SECOND HOUR'
    },
    {
        id: 'adem',
        title: 'ADEM MELLOUKA - FPGA & VHDL Programming',
        description: 'Learn the fundamentals of FPGA design and VHDL programming for embedded systems.',
        capacity: 50,
        time: 'SECOND HOUR'
    },


    

];

// DOM Elements
const studentsTableBody = document.getElementById('studentsTableBody');
const participantsTableBody = document.getElementById('participantsTableBody');
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
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const workshopsContainer = document.getElementById('workshopsContainer');

// Pagination variables
let currentPage = 1;
let participantsCurrentPage = 1;
const rowsPerPage = 10;

// Charts
let specializationChart, registrationTrendsChart, interestsChart, projectStatusChart;

// Initialize dashboard
function initDashboard() {
    updateStats();
    renderStudentsTable();
    renderParticipantsTable();
    setupEventListeners();
    setupCharts();
    renderWorkshops();
}

// Update dashboard statistics
function updateStats() {
    totalRegistrations.textContent = studentsData.length;
    
    // Count active projects (not "N/A" or empty)
    const activeProjectsCount = studentsData.filter(student => 
        student.projectTitle && !['N/A', 'No', 'Not specified', ''].includes(student.projectTitle)
    ).length;
    activeProjects.textContent = activeProjectsCount;
    
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
            student => student.interests && student.interests.includes(interestFilter.value)
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
            (student.studentId && student.studentId.toLowerCase().includes(searchTerm)) ||
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
            <td>${student.studentId || '-'}</td>
            <td>${student.specialization || '-'}</td>
            <td>${student.projectTitle || '-'}</td>
            <td>${student.interests ? student.interests.join(', ') : '-'}</td>
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

// Render participants table (similar to students table but shows all data)
function renderParticipantsTable() {
    const totalItems = studentsData.length;
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    
    if (participantsCurrentPage > totalPages && totalPages > 0) {
        participantsCurrentPage = totalPages;
    } else if (participantsCurrentPage < 1) {
        participantsCurrentPage = 1;
    }
    
    document.getElementById('participantsPrevPage').disabled = participantsCurrentPage === 1;
    document.getElementById('participantsNextPage').disabled = participantsCurrentPage === totalPages || totalPages === 0;
    document.getElementById('participantsCurrentPage').textContent = participantsCurrentPage;
    
    const startIndex = (participantsCurrentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, totalItems);
    
    document.getElementById('participantsStartItem').textContent = totalItems > 0 ? startIndex + 1 : 0;
    document.getElementById('participantsEndItem').textContent = endIndex;
    document.getElementById('participantsTotalItems').textContent = totalItems;
    
    participantsTableBody.innerHTML = '';
    
    studentsData.slice(startIndex, endIndex).forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.registrationId}</td>
            <td>${student.fullName}</td>
            <td>${student.studentId || '-'}</td>
            <td>${student.specialization || '-'}</td>
            <td>${student.projectTitle || '-'}</td>
            <td>${student.interests ? student.interests.join(', ') : '-'}</td>
            <td>${formatDate(student.registrationDate)}</td>
            <td>
                <button class="action-btn view-btn" data-id="${student.registrationId}">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `;
        
        participantsTableBody.appendChild(row);
    });
    
    document.querySelectorAll('#participantsTableBody .view-btn').forEach(btn => {
        btn.addEventListener('click', () => showStudentDetails(btn.dataset.id));
    });
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Show student details modal
function showStudentDetails(registrationId) {
    const student = studentsData.find(s => s.registrationId === registrationId);
    if (!student) return;
    
    document.getElementById('modalStudentName').textContent = student.fullName;
    document.getElementById('modalRegId').textContent = student.registrationId;
    document.getElementById('modalStudentId').textContent = student.studentId || 'Not specified';
    document.getElementById('modalPhone').textContent = student.phone || 'Not specified';
    document.getElementById('modalSpecialization').textContent = student.specialization || 'Not specified';
    document.getElementById('modalRegDate').textContent = formatDate(student.registrationDate);
    document.getElementById('modalProjectTitle').textContent = student.projectTitle || 'Not specified';
    document.getElementById('modalInterests').textContent = student.interests ? student.interests.join(', ') : 'Not specified';
    
    studentModal.style.display = 'flex';
}

// Setup charts for analytics
function setupCharts() {
    // Specialization distribution chart
    const specializationCtx = document.getElementById('specializationChart').getContext('2d');
    const specializations = studentsData.reduce((acc, student) => {
        acc[student.specialization] = (acc[student.specialization] || 0) + 1;
        return acc;
    }, {});
    
    const sortedSpecializations = Object.entries(specializations)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    specializationChart = new Chart(specializationCtx, {
        type: 'bar',
        data: {
            labels: sortedSpecializations.map(item => item[0]),
            datasets: [{
                label: 'Number of Students',
                data: sortedSpecializations.map(item => item[1]),
                backgroundColor: '#4e73df',
                borderColor: '#4e73df',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // Registration trends chart (last 7 days)
    const trendsCtx = document.getElementById('registrationTrendsChart').getContext('2d');
    const now = new Date();
    const dates = [];
    const counts = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        dates.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
        counts.push(
            studentsData.filter(student => {
                const studentDate = new Date(student.registrationDate).toISOString().split('T')[0];
                return studentDate === dateStr;
            }).length
        );
    }
    
    registrationTrendsChart = new Chart(trendsCtx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Registrations',
                data: counts,
                backgroundColor: 'rgba(78, 115, 223, 0.05)',
                borderColor: '#4e73df',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // Interests distribution chart
    const interestsCtx = document.getElementById('interestsChart').getContext('2d');
    const allInterests = studentsData.flatMap(student => student.interests || []);
    const interestCounts = allInterests.reduce((acc, interest) => {
        acc[interest] = (acc[interest] || 0) + 1;
        return acc;
    }, {});
    
    const sortedInterests = Object.entries(interestCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    
    interestsChart = new Chart(interestsCtx, {
        type: 'doughnut',
        data: {
            labels: sortedInterests.map(item => item[0]),
            datasets: [{
                data: sortedInterests.map(item => item[1]),
                backgroundColor: [
                    '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', 
                    '#e74a3b', '#858796', '#5a5c69', '#3a3b45'
                ],
                hoverBackgroundColor: [
                    '#2e59d9', '#17a673', '#2c9faf', '#dda20a', 
                    '#be2617', '#6c757d', '#4e525c', '#2e3035'
                ],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });

    // Project status chart
    const projectCtx = document.getElementById('projectStatusChart').getContext('2d');
    const withProject = studentsData.filter(student => 
        student.projectTitle && !['N/A', 'No', 'Not specified', ''].includes(student.projectTitle)
        ).length;
    const withoutProject = studentsData.length - withProject;
    
    projectStatusChart = new Chart(projectCtx, {
        type: 'pie',
        data: {
            labels: ['With Project', 'Without Project'],
            datasets: [{
                data: [withProject, withoutProject],
                backgroundColor: ['#1cc88a', '#e74a3b'],
                hoverBackgroundColor: ['#17a673', '#be2617'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

// Render workshops with their statistics
// Render workshops with their statistics, grouped by time slot
function renderWorkshops() {
    workshopsContainer.innerHTML = '';
    
    // Group workshops by time slot
    const workshopsByTime = workshops.reduce((acc, workshop) => {
        if (!acc[workshop.time]) {
            acc[workshop.time] = [];
        }
        acc[workshop.time].push(workshop);
        return acc;
    }, {});
    
    // Render each time slot section
    for (const [timeSlot, timeWorkshops] of Object.entries(workshopsByTime)) {
        const timeSection = document.createElement('div');
        timeSection.className = 'workshop-time-section';
        timeSection.innerHTML = `<h2 class="time-slot-header">${timeSlot}</h2>`;
        
        timeWorkshops.forEach(workshop => {
            const workshopRegistrations = studentsData.filter(student => 
                student.workshop && student.workshop.includes(workshop.title)
            );
            
            const today = new Date().toISOString().split('T')[0];
            const todayRegistrations = workshopRegistrations.filter(student => 
                new Date(student.registrationDate).toISOString().split('T')[0] === today
            ).length;
            
            const recentParticipants = workshopRegistrations
                .sort((a, b) => new Date(b.registrationDate) - new Date(a.registrationDate))
                .slice(0, 5);
            
            const workshopCard = document.createElement('div');
            workshopCard.className = 'workshop-card';
            workshopCard.innerHTML = `
                <h3>${workshop.title}</h3>
                <p>${workshop.description}</p>
                
                <div class="workshop-stats">
                    <div class="workshop-stat">
                        <h4>${workshopRegistrations.length}</h4>
                        <p>Total Registrations</p>
                    </div>
                    <div class="workshop-stat">
                        <h4>${todayRegistrations}</h4>
                        <p>Today</p>
                    </div>
                    <div class="workshop-stat">
                        <h4>${workshop.capacity}</h4>
                        <p>Capacity</p>
                    </div>
                </div>
                
                <div class="workshop-participants">
                    <h4>Recent Registrations</h4>
                    <div class="participants-list" id="${workshop.id}-participants">
                        ${recentParticipants.length > 0 ? 
                            recentParticipants.map(student => `
                                <div class="participant-item">
                                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(student.fullName)}&background=random" alt="${student.fullName}">
                                    <div class="participant-info">
                                        <h5>${student.fullName}</h5>
                                        <p>${student.specialization || 'Not specified'} • ${formatDate(student.registrationDate)}</p>
                                    </div>
                                </div>
                            `).join('') :
                            '<p>No recent registrations</p>'
                        }
                    </div>
                </div>
            `;
            
            timeSection.appendChild(workshopCard);
        });
        
        workshopsContainer.appendChild(timeSection);
    }
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
    
    // Participants pagination
    document.getElementById('participantsPrevPage').addEventListener('click', () => {
        if (participantsCurrentPage > 1) {
            participantsCurrentPage--;
            renderParticipantsTable();
        }
    });
    
    document.getElementById('participantsNextPage').addEventListener('click', () => {
        const totalPages = Math.ceil(studentsData.length / rowsPerPage);
        if (participantsCurrentPage < totalPages) {
            participantsCurrentPage++;
            renderParticipantsTable();
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
    
    // Tab navigation
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(tb => tb.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Update charts when analytics tab is shown
            if (tabId === 'analytics') {
                setupCharts();
            }
            
            // Update workshop stats when workshops tab is shown
            if (tabId === 'workshops') {
                renderWorkshops();
            }
        });
    });
}

// Export data as CSV
function exportData() {
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add header row
    const headers = [
        'Registration ID', 'Full Name', 'Student ID', 'Phone', 
        'Specialization', 'Project Title', 'Interests', 'Registration Date', 'Workshop'
    ];
    csvContent += headers.join(',') + "\r\n";
    
    // Add data rows
    studentsData.forEach(student => {
        const row = [
            student.registrationId,
            student.fullName,
            student.studentId || '',
            student.phone || '',
            student.specialization || '',
            student.projectTitle || '',
            student.interests ? student.interests.join('; ') : '',
            new Date(student.registrationDate).toLocaleString(),
            student.workshop || ''
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