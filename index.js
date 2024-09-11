// active hamburger menu 
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

 
// Translation data
const translations = {
    en: {
        nav: {
            logo: "MyPortfolio",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            certifications: "Certifications",
            degrees: "Degrees",
            contact: "Contact"
        },
        about: {
            heading: "About Me",
            content: "Welcome to my portfolio. I am a professional developer with expertise in full-stack web development, project management, and software design."
        },
        skills: {
            heading: "Skills",
            softSkillsHeading: "Soft Skills",
            hardSkillsHeading: "Hard Skills",
            softSkills: ["Leadership", "Communication", "Time Management", "Problem Solving"],
            hardSkills: ["JavaScript", "React", "Node.js", "Python"]
        },
        projects: {
            heading: "Projects",
            project1Title: "Project 1",
            project1Date: "Date: Jan 2023",
            project1Description: "A full-stack e-commerce application built using React and Node.js.",
            project2Title: "Project 2",
            project2Date: "Date: March 2023",
            project2Description: "A mobile app for managing tasks, built using React Native."
        },
        certifications: {
            heading: "Certifications & Awards",
            cert1: "Google Cloud Architect - June 2023",
            cert2: "React Developer Certification - March 2023",
            cert3: "Best Hackathon Project - August 2022"
        },
        degrees: {
            heading: "Degrees & Courses",
            degree1: "Bachelor's Degree in Computer Science - XYZ University (2020-2024)",
            degree2: "Short Course: Advanced JavaScript - 2022"
        },
        contact: {
            heading: "Contact",
            email: "Email: yourname@example.com"
        }
    },
    ar: {
        nav: {
            logo: "ملفي الشخصي",
            about: "حول",
            skills: "المهارات",
            projects: "المشاريع",
            certifications: "الشهادات",
            degrees: "الدرجات",
            contact: "الاتصال"
        },
        about: {
            heading: "عني",
            content: "مرحبًا بك في محفظتي. أنا مطور محترف متخصص في تطوير الويب الكامل وإدارة المشاريع وتصميم البرمجيات."
        },
        skills: {
            heading: "المهارات",
            softSkillsHeading: "المهارات اللينة",
            hardSkillsHeading: "المهارات الصعبة",
            softSkills: ["القيادة", "الاتصال", "إدارة الوقت", "حل المشاكل"],
            hardSkills: ["جافا سكريبت", "ريآكت", "نود.جي إس", "بايثون"]
        },
        projects: {
            heading: "المشاريع",
            project1Title: "المشروع 1",
            project1Date: "التاريخ: يناير 2023",
            project1Description: "تطبيق تجارة إلكترونية كامل تم بناؤه باستخدام React و Node.js.",
            project2Title: "المشروع 2",
            project2Date: "التاريخ: مارس 2023",
            project2Description: "تطبيق محمول لإدارة المهام تم بناؤه باستخدام React Native."
        },
        certifications: {
            heading: "الشهادات والجوائز",
            cert1: "مهندس سحابي من جوجل - يونيو 2023",
            cert2: "شهادة مطور React - مارس 2023",
            cert3: "أفضل مشروع هاكاثون - أغسطس 2022"
        },
        degrees: {
            heading: "الدرجات والدورات",
            degree1: "درجة البكالوريوس في علوم الكمبيوتر - جامعة XYZ (2020-2024)",
            degree2: "دورة قصيرة: جافا سكريبت متقدمة - 2022"
        },
        contact: {
            heading: "الاتصال",
            email: "البريد الإلكتروني: yourname@example.com"
        }
    },
    ur: {
        nav: {
            logo: "میری پورٹ فولیو",
            about: "میرے بارے میں",
            skills: "مہارتیں",
            projects: "پروجیکٹس",
            certifications: "سرٹیفیکیشنز",
            degrees: "ڈگریاں",
            contact: "رابطہ"
        },
        about: {
            heading: "میرے بارے میں",
            content: "میرے پورٹ فولیو میں خوش آمدید۔ میں ایک پیشہ ور ڈویلپر ہوں جسے فل اسٹیک ویب ڈویلپمنٹ، پروجیکٹ مینجمنٹ، اور سافٹ ویئر ڈیزائن میں مہارت حاصل ہے۔"
        },
        skills: {
            heading: "مہارتیں",
            softSkillsHeading: "نرم مہارتیں",
            hardSkillsHeading: "سخت مہارتیں",
            softSkills: ["قیادت", "مواصلات", "وقت کا انتظام", "مسئلہ حل کرنا"],
            hardSkills: ["جاوا اسکرپٹ", "ریئیکٹ", "نوڈ.جے ایس", "پائتھون"]
        },
        projects: {
            heading: "پروجیکٹس",
            project1Title: "پروجیکٹ 1",
            project1Date: "تاریخ: جنوری 2023",
            project1Description: "ایک فل اسٹیک ای کامرس ایپلیکیشن جو React اور Node.js کا استعمال کرتے ہوئے بنائی گئی ہے۔",
            project2Title: "پروجیکٹ 2",
            project2Date: "تاریخ: مارچ 2023",
            project2Description: "ایک موبائل ایپ جو کاموں کا انتظام کرتی ہے، React Native کا استعمال کرتے ہوئے بنائی گئی ہے۔"
        },
        certifications: {
            heading: "سرٹیفیکیشنز اور ایوارڈز",
            cert1: "گوگل کلاؤڈ آرکیٹیکٹ - جون 2023",
            cert2: "ریئیکٹ ڈویلپر سرٹیفیکیشن - مارچ 2023",
            cert3: "بہترین ہیکاتھون پروجیکٹ - اگست 2022"
        },
        degrees: {
            heading: "ڈگریاں اور کورسز",
            degree1: "کمپیوٹر سائنس میں بیچلر ڈگری - XYZ یونیورسٹی (2020-2024)",
            degree2: "مختصر کورس: ایڈوانسڈ جاوا اسکرپٹ - 2022"
        },
        contact: {
            heading: "رابطہ",
            email: "ای میل: yourname@example.com"
        }
    },
    fr: {
        nav: {
            logo: "MonPortfolio",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            certifications: "Certifications",
            degrees: "Diplômes",
            contact: "Contact"
        },
        about: {
            heading: "À propos de moi",
            content: "Bienvenue sur mon portfolio. Je suis un développeur professionnel avec une expertise en développement web full-stack, gestion de projets et conception de logiciels."
        },
        skills: {
            heading: "Compétences",
            softSkillsHeading: "Compétences Douces",
            hardSkillsHeading: "Compétences Techniques",
            softSkills: ["Leadership", "Communication", "Gestion du temps", "Résolution de problèmes"],
            hardSkills: ["JavaScript", "React", "Node.js", "Python"]
        },
        projects: {
            heading: "Projets",
            project1Title: "Projet 1",
            project1Date: "Date : Jan 2023",
            project1Description: "Une application e-commerce full-stack développée avec React et Node.js.",
            project2Title: "Projet 2",
            project2Date: "Date : Mars 2023",
            project2Description: "Une application mobile pour la gestion des tâches, développée avec React Native."
        },
        certifications: {
            heading: "Certifications et Récompenses",
            cert1: "Architecte Cloud Google - Juin 2023",
            cert2: "Certification Développeur React - Mars 2023",
            cert3: "Meilleur Projet Hackathon - Août 2022"
        },
        degrees: {
            heading: "Diplômes et Cours",
            degree1: "Licence en Informatique - Université XYZ (2020-2024)",
            degree2: "Cours Court : JavaScript Avancé - 2022"
        },
        contact: {
            heading: "Contact",
            email: "Email : yourname@example.com"
        }
    }
};

// Function to translate page
function translatePage() {
    const selectedLanguage = document.getElementById("language-selector").value;
    const translation = translations[selectedLanguage] || translations["en"];

    // Navbar
    document.getElementById("nav-logo").textContent = translation.nav.logo;
    document.getElementById("nav-about").textContent = translation.nav.about;
    document.getElementById("nav-skills").textContent = translation.nav.skills;
    document.getElementById("nav-projects").textContent = translation.nav.projects;
    document.getElementById("nav-certifications").textContent = translation.nav.certifications;
    document.getElementById("nav-degrees").textContent = translation.nav.degrees;
    document.getElementById("nav-contact").textContent = translation.nav.contact;

    // About section
    document.getElementById("about-heading").textContent = translation.about.heading;
    document.getElementById("about-content").textContent = translation.about.content;

    // Skills section
    document.getElementById("skills-heading").textContent = translation.skills.heading;
    document.getElementById("soft-skills-heading").textContent = translation.skills.softSkillsHeading;
    document.getElementById("hard-skills-heading").textContent = translation.skills.hardSkillsHeading;
    document.getElementById("soft-skills-list").innerHTML = translation.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
    document.getElementById("hard-skills-list").innerHTML = translation.skills.hardSkills.map(skill => `<li>${skill}</li>`).join('');


    document.getElementById("technical-skills-heading").textContent = translation.skills.softSkillsHeading;
    document.getElementById("technical-skills-list").innerHTML = translation.skills.hardSkills.map(skill => `<li>${skill}</li>`).join('');

    // Projects section
    document.getElementById("projects-heading").textContent = translation.projects.heading;
    document.getElementById("project1-title").textContent = translation.projects.project1Title;
    document.getElementById("project1-date").textContent = translation.projects.project1Date;
    document.getElementById("project1-description").textContent = translation.projects.project1Description;
    document.getElementById("project2-title").textContent = translation.projects.project2Title;
    document.getElementById("project2-date").textContent = translation.projects.project2Date;
    document.getElementById("project2-description").textContent = translation.projects.project2Description;

    // Certifications section
    document.getElementById("certifications-heading").textContent = translation.certifications.heading;
    document.getElementById("cert1").textContent = translation.certifications.cert1;
    document.getElementById("cert2").textContent = translation.certifications.cert2;
    document.getElementById("cert3").textContent = translation.certifications.cert3;

    // Degrees section
    document.getElementById("degrees-heading").textContent = translation.degrees.heading;
    document.getElementById("degree1").textContent = translation.degrees.degree1;
    document.getElementById("degree2").textContent = translation.degrees.degree2;

    // Contact section
    document.getElementById("contact-heading").textContent = translation.contact.heading;
    document.getElementById("contact-email").textContent = translation.contact.email;
}
