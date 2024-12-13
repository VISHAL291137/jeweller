document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger'); // Get the hamburger icon by ID
    const navList = document.getElementById('nav-list'); // Get the navigation list by ID

    // Add event listener to toggle the 'active' class on click
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});