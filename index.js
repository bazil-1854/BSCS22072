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
 

window.onload = function () {
    populateCourses(); 
};

const translate_page = () => { 
    populateCourses(); 
}

