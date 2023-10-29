const header = document.querySelector('#header');
const hamburger = document.querySelector('#header .hamburger');
const navLinks = document.querySelector('#nav-bar #nav-links');

window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');

    header.classList.toggle('sticky', window.scrollY > 300);
    logo.classList.toggle('logo-size', window.scrollY > 300);
    hamburger.classList.toggle('ham-size', window.scrollY > 300);

})


hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('open-icon');
    navLinks.classList.toggle('open');
});


