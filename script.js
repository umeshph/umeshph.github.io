document.addEventListener("DOMContentLoaded", function() {
    
    // This is the modern way to handle scroll animations.
    // It's more efficient than listening to every scroll event.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'show' class to make it visible
                entry.target.classList.add('show');
            }
        });
    });

    // Find all elements with the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Tell the observer to watch each of these hidden elements
    hiddenElements.forEach((el) => observer.observe(el));

});