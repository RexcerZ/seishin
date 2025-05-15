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


