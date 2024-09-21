let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
let navLinks = document.querySelectorAll(".navlist li a");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// Add active class to clicked link and remove from others
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(link => link.classList.remove("active")); // Remove 'active' from all links
        this.classList.add("active"); // Add 'active' to the clicked link
    });
});

// navlost code
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

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

// courswork 
const CourseWork = [
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

function populateCourses() {
    const courseworkGrid = document.querySelector('.coursework-grid');
    courseworkGrid.innerHTML = '';

    CourseWork.forEach(course => {

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
 

const services = [
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

function populateServices() {
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
};
 
