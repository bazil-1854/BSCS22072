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
    populateServices(); 
};

const translate_page = () => {
    const selectedLanguage = document.getElementById("language-selector").value; 
    populateServices(selectedLanguage); 
}
