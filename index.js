
// Navbar hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


// project object 
const projects_en = [
    {
        name: "ChessTacTix",
        description: "Chess Tactix is a two-player chess game developed in C++ using the SFML (Simple and Fast Multimedia Library). It features all the standard chess moves.",
        image: "Assets/chessIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LmFl1tEM2iTJ38gk_",
        category: "uiux"
    },
    {
        name: "Cobra Quest",
        description: "CobraQuest is an engaging snake game with multiple difficulty levels and a multiplayer mode. It offers a dynamic and challenging experience for both solo players and friends.",
        image: "Assets/cobraIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2KOuwcw-D2ekjgc5Ft",
        category: "web"
    },
    {
        name: "FlexiBase",
        description: "FlexiBase is a lightweight database system inspired by MongoDB, implemented using Data Structures and Algorithms (DSA) core concepts. It supports basic CRUD operations and efficient data searching.",
        image: "Assets/flexibaseIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Lqfm-dWrxvRaaP_pW",
        category: "web"
    },
    {
        name: "TetroMania",
        description: "TetroMania is a classic Tetris game implemented in C++ using SFML. It features four distinct levels, each with increasing complexity and unique obstacles.",
        image: "Assets/tetrisIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Li7KSR4uSpYJTmtTu",
        category: "web"
    },
    {
        name: "PixelPaint",
        description: "Paint Master is an advanced MS Paint clone developed in Python using the Tkinter library. It provides a rich set of tools for creating and editing digital drawings.",
        image: "Assets/paintIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LtCFIPA0mDAnX9KNr",
        category: "web"
    }
];
const projects_ur = [
    {
        name: "چیس ٹاکس",
        description: "چیس ٹاکس ایک دو کھلاڑیوں کا شطرنج کھیل ہے جو C++ میں SFML (سادہ اور تیز ملٹی میڈیا لائبریری) کا استعمال کرتے ہوئے تیار کیا گیا ہے۔ اس میں تمام معیاری شطرنج کی حرکات شامل ہیں۔",
        image: "Assets/chessIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LmFl1tEM2iTJ38gk_",
        category: "uiux"
    },
    {
        name: "کوبرا کویسٹ",
        description: "کوبرا کویسٹ ایک دلچسپ سانپ کھیل ہے جس میں متعدد مشکلات کی سطحیں اور ایک ملٹی پلیئر موڈ ہے۔ یہ اکیلا کھلاڑیوں اور دوستوں دونوں کے لیے ایک متحرک اور چیلنجنگ تجربہ فراہم کرتا ہے۔",
        image: "Assets/cobraIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2KOuwcw-D2ekjgc5Ft",
        category: "web"
    },
    {
        name: "فلیکس بیس",
        description: "فلیکس بیس ایک ہلکا پھلکا ڈیٹا بیس سسٹم ہے جو MongoDB سے متاثر ہے، جو Data Structures اور Algorithms (DSA) کے بنیادی تصورات کا استعمال کرتے ہوئے نافذ کیا گیا ہے۔ یہ بنیادی CRUD آپریشنز اور مؤثر ڈیٹا تلاش کی حمایت کرتا ہے۔",
        image: "Assets/flexibaseIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Lqfm-dWrxvRaaP_pW",
        category: "web"
    },
    {
        name: "ٹیٹرو مینیا",
        description: "ٹیٹرو مینیا ایک کلاسک ٹیٹرِس کھیل ہے جو C++ میں SFML کا استعمال کرتے ہوئے نافذ کیا گیا ہے۔ اس میں چار مختلف سطحیں ہیں، ہر ایک بڑھتی ہوئی پیچیدگی اور منفرد رکاوٹوں کے ساتھ۔",
        image: "Assets/tetrisIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Li7KSR4uSpYJTmtTu",
        category: "web"
    },
    {
        name: "پکسل پینٹ",
        description: "پینٹ ماسٹر ایک جدید MS پینٹ کلون ہے جو Python میں Tkinter لائبریری کا استعمال کرتے ہوئے تیار کیا گیا ہے۔ یہ ڈیجیٹل ڈرائنگز تخلیق اور ترمیم کرنے کے لیے ایک امیر سیٹ کے ٹولز فراہم کرتا ہے۔",
        image: "Assets/paintIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LtCFIPA0mDAnX9KNr",
        category: "web"
    }
];
const projects_ar = [
    {
        name: "تشيس تاكسيك",
        description: "تشيس تاكسيك هو لعبة شطرنج ثنائية اللاعبين تم تطويرها باستخدام C++ و SFML (مكتبة الوسائط المتعددة البسيطة والسريعة). تحتوي على جميع الحركات القياسية للشطرنج.",
        image: "Assets/chessIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LmFl1tEM2iTJ38gk_",
        category: "uiux"
    },
    {
        name: "مهمة كوبرا",
        description: "مهمة كوبرا هي لعبة ثعبان مثيرة مع مستويات صعوبة متعددة ووضع لعب جماعي. تقدم تجربة ديناميكية وتحديّة للاعبين الفرديين والأصدقاء على حد سواء.",
        image: "Assets/cobraIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2KOuwcw-D2ekjgc5Ft",
        category: "web"
    },
    {
        name: "فليكس بيس",
        description: "فليكس بيس هو نظام قاعدة بيانات خفيف الوزن مستوحى من MongoDB، يتم تنفيذه باستخدام مفاهيم هياكل البيانات والخوارزميات (DSA). يدعم العمليات الأساسية CRUD والبحث الفعال عن البيانات.",
        image: "Assets/flexibaseIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Lqfm-dWrxvRaaP_pW",
        category: "web"
    },
    {
        name: "تيترو مانيا",
        description: "تيترو مانيا هي لعبة تيترس كلاسيكية تم تنفيذها باستخدام C++ و SFML. تحتوي على أربعة مستويات مميزة، كل منها مع تعقيدات متزايدة وعقبات فريدة.",
        image: "Assets/tetrisIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Li7KSR4uSpYJTmtTu",
        category: "web"
    },
    {
        name: "بكسل بانت",
        description: "بنت ماستر هو استنساخ متقدم لـ MS Paint تم تطويره باستخدام Python و Tkinter. يوفر مجموعة غنية من الأدوات لإنشاء وتحرير الرسوم الرقمية.",
        image: "Assets/paintIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LtCFIPA0mDAnX9KNr",
        category: "web"
    }
];
const projects_fr = [
    {
        name: "ChessTacTix",
        description: "Chess Tactix est un jeu d'échecs à deux joueurs développé en C++ utilisant SFML (Simple and Fast Multimedia Library). Il propose tous les mouvements d'échecs standard.",
        image: "Assets/chessIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LmFl1tEM2iTJ38gk_",
        category: "uiux"
    },
    {
        name: "Cobra Quest",
        description: "CobraQuest est un jeu de serpent captivant avec plusieurs niveaux de difficulté et un mode multijoueur. Il offre une expérience dynamique et stimulante pour les joueurs solo et les amis.",
        image: "Assets/cobraIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2KOuwcw-D2ekjgc5Ft",
        category: "web"
    },
    {
        name: "FlexiBase",
        description: "FlexiBase est un système de base de données léger inspiré de MongoDB, implémenté à l'aide des concepts de structures de données et d'algorithmes (DSA). Il prend en charge les opérations CRUD de base et la recherche de données efficace.",
        image: "Assets/flexibaseIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Lqfm-dWrxvRaaP_pW",
        category: "web"
    },
    {
        name: "TetroMania",
        description: "TetroMania est un jeu classique de Tetris implémenté en C++ avec SFML. Il propose quatre niveaux distincts, chacun avec une complexité croissante et des obstacles uniques.",
        image: "Assets/tetrisIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2Li7KSR4uSpYJTmtTu",
        category: "web"
    },
    {
        name: "PixelPaint",
        description: "PixelPaint est un clone avancé de MS Paint développé en Python avec la bibliothèque Tkinter. Il offre un ensemble complet d'outils pour créer et éditer des dessins numériques.",
        image: "Assets/paintIcon.jpg",
        link: "https://entitysafe.netlify.app/pages/AppList/-O2LtCFIPA0mDAnX9KNr",
        category: "web"
    }
];
const projectsData = {
    en: projects_en,
    ur: projects_ur,
    fr: projects_fr,
    ar: projects_ar
};


function populateProjects(selectedLanguage) {
    const projects = projectsData[selectedLanguage] || projectsData['en'];

    const projectGallery = document.querySelector('.project-gallery');
    projectGallery.innerHTML = '';

    projects.forEach(project => {

        const projectBox = document.createElement('div');
        projectBox.className = `project-box mix ${project.category}`;

        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        const projectNameImg = document.createElement('div');
        projectNameImg.className = 'project-name-img';

        const projectImg = document.createElement('div');
        projectImg.className = 'project-img';
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = '';
        projectImg.appendChild(img);

        const projectName = document.createElement('h3');
        projectName.className = 'project-name';
        projectName.textContent = project.name;

        projectNameImg.appendChild(projectImg);
        projectNameImg.appendChild(projectName);

        const description = document.createElement('p');
        description.textContent = project.description;

        const viewProjectLink = document.createElement('a');
        viewProjectLink.href = project.link;
        viewProjectLink.className = 'view-project';
        viewProjectLink.textContent = 'View Project';
        viewProjectLink.target = '_blank';

        projectContent.appendChild(projectNameImg);
        projectContent.appendChild(description);
        projectContent.appendChild(viewProjectLink);

        projectBox.appendChild(projectContent);

        projectGallery.appendChild(projectBox);
    });
}

// courswork 
const courses_en = [
    {
        title: "Object-Oriented Programming",
        description: "Learned OOP concepts such as inheritance, polymorphism, and encapsulation.",
        iconClass: "bx bx-objects-vertical-center"
    },
    {
        title: "Data Structures & Algorithms",
        description: "Focused on sorting, searching algorithms and their complexity.",
        iconClass: "bx bxs-building"
    },
    {
        title: "Data Analysis and Algorithms",
        description: "Gained proficiency in advanced data analysis techniques, data visualization, and pattern recognition.",
        iconClass: "bx bxs-network-chart"
    },
    {
        title: "Database Management Systems",
        description: "Focused on SQL, NoSQL, and efficient database designs.",
        iconClass: "bx bxs-data"
    },
    {
        title: "Computer Organization and Architecture",
        description: "Studied fundamental principles of computer organization such as CPU design, memory hierarchy, and instruction sets.",
        iconClass: "bx bx-barcode-reader"
    },
    {
        title: "Linear Algebra",
        description: "Explored key concepts including vector spaces, matrices, and linear transformations. Focused on solving systems of linear equations.",
        iconClass: "bx bx-math"
    }
];
const courses_ur = [
    {
        title: "آبجیکٹ اورینٹڈ پروگرامنگ",
        description: "وراثت، کثیر العملیت، اور انکیپسولیشن جیسے OOP تصورات کو سیکھا۔",
        iconClass: "bx bx-objects-vertical-center"
    },
    {
        title: "ڈیٹا اسٹرکچرز اور الگوردمز",
        description: "ترتیب، تلاش کے الگورتھمز اور ان کی پیچیدگی پر توجہ دی۔",
        iconClass: "bx bxs-building"
    },
    {
        title: "ڈیٹا تجزیہ اور الگوردمز",
        description: "ڈیٹا تجزیہ کی جدید تکنیکوں، ڈیٹا کی تصاویر، اور نمونہ پہچان میں مہارت حاصل کی۔",
        iconClass: "bx bxs-network-chart"
    },
    {
        title: "ڈیٹا بیس مینجمنٹ سسٹمز",
        description: "SQL، NoSQL، اور موثر ڈیٹا بیس ڈیزائنز پر توجہ مرکوز کی۔",
        iconClass: "bx bxs-data"
    },
    {
        title: "کمپیوٹر تنظیم اور آرکیٹیکچر",
        description: "سی پی یو ڈیزائن، میموری کی درجہ بندی، اور ہدایات سیٹس جیسے کمپیوٹر کی بنیادی اصولوں کا مطالعہ کیا۔",
        iconClass: "bx bx-barcode-reader"
    },
    {
        title: "لینیئر الجبرا",
        description: "اہم تصورات جیسے ویکٹر اسپیسز، میٹرکس، اور لینیئر ٹرانسفارمیشنز کو دریافت کیا۔ لینیئر مساوات کے سسٹمز کو حل کرنے پر توجہ دی۔",
        iconClass: "bx bx-math"
    }
];
const courses_ar = [
    {
        title: "البرمجة الكائنية",
        description: "تعلم مفاهيم OOP مثل الوراثة، تعدد الأشكال، والتغليف.",
        iconClass: "bx bx-objects-vertical-center"
    },
    {
        title: "هياكل البيانات والخوارزميات",
        description: "التركيز على خوارزميات الفرز والبحث وتعقيدها.",
        iconClass: "bx bxs-building"
    },
    {
        title: "تحليل البيانات والخوارزميات",
        description: "إتقان تقنيات التحليل المتقدم للبيانات، وتصور البيانات، والتعرف على الأنماط.",
        iconClass: "bx bxs-network-chart"
    },
    {
        title: "نظم إدارة قواعد البيانات",
        description: "التركيز على SQL و NoSQL وتصميمات قواعد البيانات الفعالة.",
        iconClass: "bx bxs-data"
    },
    {
        title: "تنظيم الكمبيوتر والهندسة المعمارية",
        description: "دراسة المبادئ الأساسية لتنظيم الكمبيوتر مثل تصميم وحدة المعالجة المركزية، والتسلسل الهرمي للذاكرة، ومجموعات التعليمات.",
        iconClass: "bx bx-barcode-reader"
    },
    {
        title: "الجبر الخطي",
        description: "استكشاف المفاهيم الرئيسية بما في ذلك الفضاءات المتجهة، والمصفوفات، والتحويلات الخطية. التركيز على حل أنظمة المعادلات الخطية.",
        iconClass: "bx bx-math"
    }
];
const courses_fr = [
    {
        title: "Programmation Orientée Objet",
        description: "Apprentissage des concepts OOP tels que l'héritage, le polymorphisme et l'encapsulation.",
        iconClass: "bx bx-objects-vertical-center"
    },
    {
        title: "Structures de Données et Algorithmes",
        description: "Focalisation sur les algorithmes de tri, de recherche et leur complexité.",
        iconClass: "bx bxs-building"
    },
    {
        title: "Analyse de Données et Algorithmes",
        description: "Maîtrise des techniques avancées d'analyse de données, de visualisation des données et de reconnaissance de motifs.",
        iconClass: "bx bxs-network-chart"
    },
    {
        title: "Systèmes de Gestion de Bases de Données",
        description: "Focus sur SQL, NoSQL, et des conceptions de bases de données efficaces.",
        iconClass: "bx bxs-data"
    },
    {
        title: "Organisation et Architecture des Ordinateurs",
        description: "Étude des principes fondamentaux de l'organisation des ordinateurs tels que la conception du CPU, la hiérarchie de la mémoire et les jeux d'instructions.",
        iconClass: "bx bx-barcode-reader"
    },
    {
        title: "Algèbre Linéaire",
        description: "Exploration des concepts clés incluant les espaces vectoriels, les matrices et les transformations linéaires. Focalisation sur la résolution des systèmes d'équations linéaires.",
        iconClass: "bx bx-math"
    }
];
const coursesData = {
    en: courses_en,
    ur: courses_ur,
    fr: courses_fr,
    ar: courses_ar
};


function populateCourses(selectedLanguage) {
    const courses = coursesData[selectedLanguage] || coursesData['en'];
    const courseworkGrid = document.querySelector('.coursework-grid');
    courseworkGrid.innerHTML = '';

    courses.forEach(course => {

        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';

        const icon = document.createElement('i');
        icon.className = `course-icon ${course.iconClass}`;
        courseItem.appendChild(icon);

        const courseInfo = document.createElement('div');
        courseInfo.className = 'course-info';

        const courseTitle = document.createElement('h2');
        courseTitle.textContent = course.title;

        const courseDescription = document.createElement('p');
        courseDescription.textContent = course.description;

        courseInfo.appendChild(courseTitle);
        courseInfo.appendChild(courseDescription);
        courseItem.appendChild(courseInfo);
        courseworkGrid.appendChild(courseItem);
    });
}

const services_en = [
    {
        title: "Web Development",
        description: "Crafting responsive, scalable, and dynamic websites that drive engagement and elevate your brand.",
        iconClass: "bx bx-layer"
    },
    {
        title: "Desktop Development",
        description: "Developing robust desktop applications tailored to your business needs, ensuring seamless functionality.",
        iconClass: "bx bx-code-alt"
    },
    {
        title: "Mobile App Development",
        description: "Designing user-friendly mobile applications that provide exceptional experiences on all devices.",
        iconClass: "bx bxs-party"
    },
    {
        title: "UI / UX Design",
        description: "Creating intuitive and visually appealing designs to ensure a seamless and engaging user journey.",
        iconClass: "bx bx-desktop"
    }
];
const services_ur = [
    {
        title: "ویب ڈیولپمنٹ",
        description: "ریسپانسیو، قابل توسیع اور متحرک ویب سائٹس تیار کرنا جو آپ کے برانڈ کو فروغ دیں اور صارفین کو متوجہ کریں۔",
        iconClass: "bx bx-layer"
    },
    {
        title: "ڈیسک ٹاپ ڈیولپمنٹ",
        description: "آپ کے کاروباری ضروریات کے مطابق مضبوط ڈیسک ٹاپ ایپلیکیشنز تیار کرنا، جو بغیر کسی رکاوٹ کے کام کریں۔",
        iconClass: "bx bx-code-alt"
    },
    {
        title: "موبائل ایپ ڈیولپمنٹ",
        description: "تمام آلات پر بہترین تجربات فراہم کرنے والی یوزر فرینڈلی موبائل ایپلیکیشنز تیار کرنا۔",
        iconClass: "bx bxs-party"
    },
    {
        title: "یو آئی / یو ایکس ڈیزائن",
        description: "صارفین کے سفر کو بہترین اور پُر کشش بنانے کے لیے خوبصورت اور بصری طور پر دلکش ڈیزائن تیار کرنا۔",
        iconClass: "bx bx-desktop"
    }
];
const services_fr = [
    {
        title: "Développement Web",
        description: "Conception de sites web réactifs, évolutifs et dynamiques pour renforcer l'engagement et valoriser votre marque.",
        iconClass: "bx bx-layer"
    },
    {
        title: "Développement de Bureau",
        description: "Développement d'applications de bureau robustes, adaptées à vos besoins professionnels, assurant une fonctionnalité fluide.",
        iconClass: "bx bx-code-alt"
    },
    {
        title: "Développement d'Applications Mobiles",
        description: "Conception d'applications mobiles conviviales offrant des expériences exceptionnelles sur tous les appareils.",
        iconClass: "bx bxs-party"
    },
    {
        title: "Conception UI / UX",
        description: "Création de designs intuitifs et esthétiques pour garantir une expérience utilisateur fluide et engageante.",
        iconClass: "bx bx-desktop"
    }
];
const services_ar = [
    {
        title: "تطوير الويب",
        description: "تصميم مواقع ويب تفاعلية وقابلة للتوسع وديناميكية لتعزيز التفاعل ورفع قيمة علامتك التجارية.",
        iconClass: "bx bx-layer"
    },
    {
        title: "تطوير سطح المكتب",
        description: "تطوير تطبيقات سطح المكتب المتينة المخصصة لتلبية احتياجات عملك وضمان التشغيل السلس.",
        iconClass: "bx bx-code-alt"
    },
    {
        title: "تطوير تطبيقات الجوال",
        description: "تصميم تطبيقات جوال سهلة الاستخدام توفر تجارب استثنائية على جميع الأجهزة.",
        iconClass: "bx bxs-party"
    },
    {
        title: "تصميم واجهة المستخدم / تجربة المستخدم",
        description: "إنشاء تصاميم جاذبة وبديهية لضمان تجربة مستخدم سلسة وممتعة.",
        iconClass: "bx bx-desktop"
    }
];
const servicesData = {
    en: services_en,
    ur: services_ur,
    fr: services_fr,
    ar: services_ar
};

function populateServices(selectedLanguage) {
    const services = servicesData[selectedLanguage] || servicesData['en'];

    const allServices = document.querySelector('.allServices');
    allServices.innerHTML = '';

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'servicesItem';

        const iconServices = document.createElement('div');
        iconServices.className = 'icon-services';

        const icon = document.createElement('i');
        icon.className = service.iconClass;

        iconServices.appendChild(icon);
        iconServices.appendChild(document.createElement('span'));

        const serviceInfo = document.createElement('div');
        serviceInfo.className = 'service-info';

        const serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.title;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        serviceInfo.appendChild(serviceTitle);
        serviceInfo.appendChild(serviceDescription);

        serviceItem.appendChild(iconServices);
        serviceItem.appendChild(serviceInfo);

        allServices.appendChild(serviceItem);
    });
}

window.onload = function () {
    populateCourses();
    populateServices();
    populateProjects();
};

const translate_page = () => {
    const selectedLanguage = document.getElementById("language-selector").value;
    populateCourses(selectedLanguage);
    populateServices(selectedLanguage);
    populateProjects(selectedLanguage);
}
