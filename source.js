function toggleNav() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}

// Close the menu if the user clicks anywhere else
document.addEventListener('click', function(event) {
    const nav = document.getElementById('navMenu');
    // Check if the click was outside the nav container
    if (!nav.contains(event.target)) {
        nav.classList.remove('active');
    }
});

document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parent = trigger.parentElement;
        
        // Toggle the active class on the clicked section
        parent.classList.toggle('active');
    });
});