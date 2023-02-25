
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
}
});


/* nav mobile-menu */

function menuShow() {
let menuMobile = document.querySelector('.mobile-menu');
if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "img/menu_white_36dp.svg";
} else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "img/close_white_36dp.svg";
}
}