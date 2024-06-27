// Console Log
console.log('about_us.js is initialized');

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
    distance: '20%',
    origin: 'bottom',
    delay: 500,
    duration: 1000,
    opacity: 0,
}

ScrollReveal().reveal('hr', {duration:2000, reset:false})

// ABOUT US SECTION
ScrollReveal().reveal('.about-title-1', slideLeft1, {duration: 1000, reset: false});
ScrollReveal().reveal('.about-text-1', slideLeft2, {duration: 1000, reset: false});
ScrollReveal().reveal('.about-text-2', slideLeft3, {duration: 1000, reset: false});
ScrollReveal().reveal('.about-contact', slideLeft4, {duration: 1000, reset: false});

ScrollReveal().reveal('.box-2', slideUp, {duration: 2000, reset: false});