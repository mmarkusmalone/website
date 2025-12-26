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

function openModal(storyId) {
    const modal = document.getElementById("storyModal");
    const modalBody = document.getElementById("modalBody");
    const template = document.getElementById(storyId);

    // Clone the hidden story content into the modal
    modalBody.innerHTML = template.innerHTML;
    
    // Show the modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById("storyModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close if user clicks outside the white box
window.onclick = function(event) {
    const modal = document.getElementById("storyModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Example for one item:
document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    const img = wrapper.querySelector('img');
    const gifSrc = img.getAttribute('data-gif');
    const stillSrc = img.getAttribute('data-still');

    wrapper.addEventListener('mouseenter', () => {
        if (stillSrc) img.src = stillSrc;
    });

    wrapper.addEventListener('mouseleave', () => {
        if (gifSrc) img.src = gifSrc;
    });
});