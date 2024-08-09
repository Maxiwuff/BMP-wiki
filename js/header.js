// JS for fading away the header //
// Get the header element
const header = document.querySelector('header');

// Variables to track scroll position
let lastScrollTop = 0;
const scrollThreshold = 50; // Adjust this value to change sensitivity

// Function to handle scroll events
function handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction
    if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up or at the top
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScrollTop;
}

// Add scroll event listener (it listens for events)
window.addEventListener('scroll', handleScroll, { passive: true });

// Add some basic styles to the header for smooth transition on the fly
header.style.transition = 'transform 0.3s ease-in-out';
header.style.position = 'fixed';
header.style.top = '0';
header.style.left = '0';
header.style.right = '0';
header.style.zIndex = '1000';