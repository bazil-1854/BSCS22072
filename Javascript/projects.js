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
 
window.onload = function () { 
    populateProjects();
};

const translate_page = () => {
    const selectedLanguage = document.getElementById("language-selector").value; 
    populateProjects(selectedLanguage);
}
