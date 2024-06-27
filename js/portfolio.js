// Console Log
console.log('portfolio.js is initialized');

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
ScrollReveal({reset:true, mobile:false});

ScrollReveal().reveal('.title-1', {duration:2000});
ScrollReveal().reveal('hr', {duration:2000});

ScrollReveal().reveal('.gallery-item-1', {delay: 500});
ScrollReveal().reveal('.gallery-item-2', {delay: 600});
ScrollReveal().reveal('.gallery-item-3', {delay: 700});
ScrollReveal().reveal('.gallery-item-4', {delay: 800});
ScrollReveal().reveal('.gallery-item-5', {delay: 900});
ScrollReveal().reveal('.gallery-item-6', {delay: 1000});
ScrollReveal().reveal('.gallery-item-7', {delay: 1100});

ScrollReveal().reveal('.warning-container');