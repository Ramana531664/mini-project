// script.js

// Add event listener to navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to button
document.querySelector('button').addEventListener('click', event => {
    event.preventDefault();
    const id = '#contact';
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});