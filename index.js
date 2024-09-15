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
