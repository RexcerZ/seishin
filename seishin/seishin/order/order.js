// Open the menu
document.getElementById("menuButton").addEventListener("click", function () {
  const menuContent = document.getElementById("menuContent");
  const menuButton = document.getElementById("menuButton");
  menuContent.classList.add("open"); // Add the 'open' class to slide the menu in
  menuButton.classList.remove("visible"); // Hide the plus button
});

// Close the menu
document.getElementById("closeButton").addEventListener("click", function () {
  const menuContent = document.getElementById("menuContent");
  const menuButton = document.getElementById("menuButton");
  menuContent.classList.remove("open"); // Remove the 'open' class to slide the menu out

  // Delay showing the plus button until the menu has fully slid out
  setTimeout(() => {
    menuButton.classList.add("visible"); // Show the plus button
  }, 300); // Match the duration of the slide-out animation (0.3s)
});

// Toggle Gallery Dropdown
document.getElementById("galleryButton").addEventListener("click", function () {
  const galleryDropdown = document.getElementById("galleryDropdown");
  const galleryButton = document.getElementById("galleryButton");

  if (galleryDropdown.style.maxHeight) {
    galleryDropdown.style.maxHeight = null; // Collapse the dropdown
    galleryButton.src = "images/plus.png"; // Change to plus icon
  } else {
    galleryDropdown.style.maxHeight = galleryDropdown.scrollHeight + "px"; // Expand the dropdown
    galleryButton.src = "images/minus.png"; // Change to minus icon
  }
});

// Toggle Order Dropdown
document.getElementById("orderButton").addEventListener("click", function () {
  const orderDropdown = document.getElementById("orderDropdown");
  const orderButton = document.getElementById("orderButton");

  if (orderDropdown.style.maxHeight) {
    orderDropdown.style.maxHeight = null; // Collapse the dropdown
    orderButton.src = "images/plus.png"; // Change to plus icon
  } else {
    orderDropdown.style.maxHeight = orderDropdown.scrollHeight + "px"; // Expand the dropdown
    orderButton.src = "images/minus.png"; // Change to minus icon
  }
});

function showGlobalNotification() {
  // Create the notification element
  const notification = document.createElement('div');
  notification.classList.add('global-notification');
  notification.textContent = "This item has been added to your cart!";

  // Add it to the body so it covers the whole site
  document.body.appendChild(notification);

  // Trigger a reflow and then slide-in (this forces the transition)
  setTimeout(() => {
    notification.style.top = '20px'; // Visible position
  }, 10);

  // Wait for 2 seconds, then slide out
  setTimeout(() => {
    notification.style.top = '-100px'; // Slide back up off-screen
    // Remove the element after the transition is finished (500ms)
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 600);
  }, 2000);
}

// Add the global notification on cart button click
document.querySelectorAll('.cart-button').forEach(button => {
  button.addEventListener('click', function() {
    console.log('Cart button clicked');
    showGlobalNotification();

    // You can also include any other code for adding to cart here.
  });
});





// When the up-button image is clicked, scroll to the top smoothly.
(function() {
  const upButton = document.querySelector('.up-button');
  if (!upButton) return;

  // Toggle the "visible" class based on scroll position.
  function toggleUpButton() {
    if (window.pageYOffset > 300) {
      upButton.classList.add('visible');
    } else {
      upButton.classList.remove('visible');
    }
  }

  // Listen for scroll events.
  window.addEventListener('scroll', toggleUpButton);

  // Set up click event to scroll to the top smoothly.
  upButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initial check in case the user reloads midway.
  toggleUpButton();
})();