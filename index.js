let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
let navLinks = document.querySelectorAll(".navlist li a");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

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

// skills
const skills = [
    { name: "JavaScript", iconClass: "bx bxl-javascript" },
    { name: "React", iconClass: "bx bxl-react" },
    { name: "Node.js", iconClass: "bx bxl-nodejs" },
    { name: "Python", iconClass: "bx bxl-python" },
    { name: "My SQL", iconClass: "bx bx-data" },
    { name: "Git & GitHub", iconClass: "bx bxl-git" }
];

function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('card', 'skill-card');

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');

        const icon = document.createElement('i');
        icon.className = skill.iconClass + ' skill-icon';

        const skillName = document.createElement('h3');
        skillName.textContent = skill.name;

        iconContainer.appendChild(icon);
        skillCard.appendChild(iconContainer);
        skillCard.appendChild(skillName);

        skillsGrid.appendChild(skillCard);
    });
}



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

// project object 
const projects = [
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

function populateProjects() {
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
const videoLinks = [
    { src: "https://www.youtube.com/embed/3XhKu9YnS3o" },
    { src: "https://www.youtube.com/embed/oLvk7NzsmxY" },
    { src: "https://www.youtube.com/embed/Sj-DQWourYk" },
    { src: "https://www.youtube.com/embed/Q1Gpnd9hhuI" },
    { src: "https://www.youtube.com/embed/dEuobtAqfBI" }
];

function populateVideos() {
    const gallery = document.querySelector('.project-video-gallery');
    videoLinks.forEach(video => {
        const videoContent = document.createElement('div');
        videoContent.classList.add('video-content');

        const iframe = document.createElement('iframe');
        iframe.src = video.src;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('allowfullscreen', true);

        videoContent.appendChild(iframe);
        gallery.appendChild(videoContent);
    });
}

window.onload = function () {
    populateSkills();
    populateCourses();
    populateServices();
    populateProjects();
    populateVideos()
};

