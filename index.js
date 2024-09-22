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
async function fetchSkills() {
    const response = await fetch('./JSON_objects/skills.json');
    const skills = await response.json();
    return skills;
}

async function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    const skills = await fetchSkills();

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
async function fetchCourses() {
    const response = await fetch('./JSON_objects/coursework.json');
    const courses = await response.json();
    return courses;
}

async function populateCourses() {
    const courseworkGrid = document.querySelector('.coursework-grid');
    courseworkGrid.innerHTML = '';

    const courses = await fetchCourses();

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
async function fetchServices() {
    const response = await fetch('./JSON_objects/services.json');
    const services = await response.json();
    return services;
}

async function populateServices() {
    const allServices = document.querySelector('.allServices');
    allServices.innerHTML = '';

    const services = await fetchServices();

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
async function fetchProjects() {
    const response = await fetch('./JSON_objects/projects.json');
    const projects = await response.json();
    return projects;
}

async function populateProjects() {
    const projectGallery = document.querySelector('.project-gallery');
    projectGallery.innerHTML = '';

    const projects = await fetchProjects();

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

 
async function fetchVideoLinks() {
    const response = await fetch('./JSON_objects/video.json');
    const videoLinks = await response.json();
    return videoLinks;
}

async function populateVideos() {
    const gallery = document.querySelector('.project-video-gallery');
    gallery.innerHTML = '';

    const videoLinks = await fetchVideoLinks();

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

