let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

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
 

window.onload = function () {
    populateCourses(); 
};

const translate_page = () => {
    const selectedLanguage = document.getElementById("language-selector").value;
    populateCourses(selectedLanguage); 
}
