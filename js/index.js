// Console Log
console.log('index.js is initialized');

// Function to get the menu element
function getMenu() {
    return document.querySelector('.menu');
}

// Function to show the menu
function showMenu() {
    const menu = getMenu();
    if (menu) {
        menu.style.display = 'flex';
    } else {
        console.error('Menu element not found');
    }
}

// Function to hide the menu
function hideMenu() {
    const menu = getMenu();
    if (menu) {
        menu.style.display = 'none';
    } else {
        console.error('Menu element not found');
    }
}

// Event listener for menu links to hide menu and scroll smoothly
document.querySelector('.menu').addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        hideMenu();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
});

// ScrollReveal
ScrollReveal({ reset: true });

// Variables - Slide Left & Right
var slideRight = {
    distance: '30%',
    origin: 'Right',
    duration: 1000,
    opacity: 0,
}

var slideLeft = {
    distance: '30%',
    origin: 'left',
    duration: 1000,
    opacity: 0,
}

// Variables - Slide left
var slideLeft1 = {
    distance: '30%',
    origin: 'left',
    delay: 600,
    duration: 1000,
    opacity: 0,
}

var slideLeft2 = {
    distance: '30%',
    origin: 'left',
    delay: 700,
    duration: 1000,
    opacity: 0,
}

var slideLeft3 = {
    distance: '30%',
    origin: 'left',
    delay: 800,
    duration: 1000,
    opacity: 0,
}

var slideLeft4 = {
    distance: '30%',
    origin: 'left',
    delay: 900,
    duration: 1000,
    opacity: 0,
}

var slideLeft5 = {
    distance: '30%',
    origin: 'left',
    delay: 1000,
    duration: 1000,
    opacity: 0,
}

var slideLeft6 = {
    distance: '30%',
    origin: 'left',
    delay: 1100,
    duration: 1000,
    opacity: 0,
}

// Variables - Slide Up
var slideUp = {
    reset: false,
    distance: '70%',
    origin: 'bottom',
    delay: 500,
    duration: 1000,
    opacity: 0,
}

var slideUp1 = {
    reset: false,
    distance: '10%',
    origin: 'bottom',
    delay: 500,
    duration: 1000,
    opacity: 0,
}

var slideUp2 = {
    reset: false,
    distance: '10%',
    origin: 'bottom',
    delay: 600,
    duration: 1000,
    opacity: 0,
}

var slideUp3 = {
    reset: false,
    distance: '10%',
    origin: 'bottom',
    delay: 700,
    duration: 1000,
    opacity: 0,
}

ScrollReveal().reveal('hr', {duration:1000, reset:true})

// HERO SECTION
ScrollReveal().reveal('.box-1', {duration: 1000, reset: false});
ScrollReveal().reveal('.box-2', {duration: 2000, reset: false});

// SHOWCASE SECTION
ScrollReveal().reveal('.wrapper-top', slideRight);
ScrollReveal().reveal('.wrapper-bottom', slideLeft);

// PRODUCTS SECTION
ScrollReveal().reveal('.box-3', {duration: 1000, reset: false});
ScrollReveal().reveal('.box-4', {duration: 1000, reset: false});

// OUR PROCESS SECTION
ScrollReveal().reveal('#process-title', {duration: 2000, reset: false})
ScrollReveal().reveal('.process-container-1', slideRight);
ScrollReveal().reveal('.process-container-2', slideLeft);
ScrollReveal().reveal('.process-container-3', slideRight);

// HOW TO ORDER SECTION
ScrollReveal().reveal('#howto-title-1', slideUp);
ScrollReveal().reveal('.box-howto-1', slideUp1);
ScrollReveal().reveal('.box-howto-2', slideUp2);
ScrollReveal().reveal('.box-howto-3', slideUp3);

// CONTACT US SECTION
ScrollReveal().reveal('#contact-title-1', slideLeft1);
ScrollReveal().reveal('.contact-text-container-1', slideLeft2);
ScrollReveal().reveal('.contact-text-container-2', slideLeft3);
ScrollReveal().reveal('.contact-text-container-3', slideLeft4);

ScrollReveal().reveal('#warning', slideLeft5);
ScrollReveal().reveal('#attribution', slideLeft6);

ScrollReveal().reveal('#contact-img-1', {duration: 3000});