// Open the menu
document.getElementById('menuButton').addEventListener('click', function () {
    const menuContent = document.getElementById('menuContent');
    const menuButton = document.getElementById('menuButton');
    menuContent.classList.add('open'); // Add the 'open' class to slide the menu in
    menuButton.classList.remove('visible'); // Hide the plus button
});

// Close the menu
document.getElementById('closeButton').addEventListener('click', function () {
    const menuContent = document.getElementById('menuContent');
    const menuButton = document.getElementById('menuButton');
    menuContent.classList.remove('open'); // Remove the 'open' class to slide the menu out

    // Delay showing the plus button until the menu has fully slid out
    setTimeout(() => {
        menuButton.classList.add('visible'); // Show the plus button
    }, 300); // Match the duration of the slide-out animation (0.3s)
});

// Toggle Gallery Dropdown
document.getElementById('galleryButton').addEventListener('click', function () {
    const galleryDropdown = document.getElementById('galleryDropdown');
    const galleryButton = document.getElementById('galleryButton');

    if (galleryDropdown.style.maxHeight) {
        galleryDropdown.style.maxHeight = null; // Collapse the dropdown
        galleryButton.src = "images/plus.png"; // Change to plus icon
    } else {
        galleryDropdown.style.maxHeight = galleryDropdown.scrollHeight + "px"; // Expand the dropdown
        galleryButton.src = "images/minus.png"; // Change to minus icon
    }
});

// Toggle Order Dropdown
document.getElementById('orderButton').addEventListener('click', function () {
    const orderDropdown = document.getElementById('orderDropdown');
    const orderButton = document.getElementById('orderButton');

    if (orderDropdown.style.maxHeight) {
        orderDropdown.style.maxHeight = null; // Collapse the dropdown
        orderButton.src = "images/plus.png"; // Change to plus icon
    } else {
        orderDropdown.style.maxHeight = orderDropdown.scrollHeight + "px"; // Expand the dropdown
        orderButton.src = "images/minus.png"; // Change to minus icon
    }
});



// Select necessary elements
const container = document.querySelector('.scrollable-container');
const boxes = document.querySelectorAll('.box');
const dots = document.querySelectorAll('.dot'); // Fixed number of dots

// Function to scroll to a specific box based on the dot index
function scrollToBox(index) {
    // Calculate the corresponding box index based on the dot index
    const boxIndex = Math.floor((index / dots.length) * boxes.length);
    const targetBox = boxes[boxIndex];

    // Calculate the correct scroll position relative to the container
    const targetPosition = targetBox.offsetTop - container.offsetTop;

    // Scroll to the target box
    container.scrollTo({
        top: targetPosition,
        behavior: 'smooth', // Smooth scrolling
    });

    // Update the active dot immediately
    updateActiveDot(index);
}

// Function to update the active dot based on the current scroll position
function updateActiveDot(activeIndex = null) {
    // If activeIndex is provided (e.g., from a click), use it
    if (activeIndex !== null) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
        return;
    }

    // Otherwise, calculate the active dot based on scroll position
    const scrollTop = container.scrollTop;
    const totalScrollableHeight = container.scrollHeight - container.clientHeight;

    // Calculate the progress as a percentage
    const progress = scrollTop / totalScrollableHeight;

    // Determine the active dot based on the progress
    const activeIndexCalculated = Math.floor(progress * dots.length);

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndexCalculated);
    });
}

// Add click event listeners to fixed dots for navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToBox(index);
    });
});

// Add scroll event listener to update the active dot during scrolling
container.addEventListener('scroll', () => {
    updateActiveDot();
});

(function() {
  const upButton = document.querySelector('.up-button');
  const container = document.querySelector('.scrollable-container');  // select the scrollable container
  if (!upButton || !container) return;

  function toggleUpButton() {
    // Use container.scrollTop instead of window.pageYOffset
    if (container.scrollTop > 300) {
      upButton.classList.add('visible');
    } else {
      upButton.classList.remove('visible');
    }
  }

  // Listen for scroll events on your container
  container.addEventListener('scroll', toggleUpButton);

  // When the up button is clicked, scroll the container back to the top smoothly.
  upButton.addEventListener('click', () => {
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initial check in case the container is already scrolled on page load.
  toggleUpButton();
})();