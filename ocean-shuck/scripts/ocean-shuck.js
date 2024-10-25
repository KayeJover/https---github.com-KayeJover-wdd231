// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the content of the elements with the corresponding ids
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modification: ' + lastModifiedDate;
}

const hamburgerElement = document.querySelector('#Button');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

});

// Get the current page's file name from the URL
const currentPage = window.location.pathname.split('/').pop();

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through the links to find the matching one
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


// Function to fetch menu data from menu.json
async function fetchMenu() {
    try {
        const response = await fetch('data/menu.json'); // Check if this path is correct
        if (!response.ok) throw new Error('Network response was not ok');

        const menuData = await response.json();
        displayMenu(menuData.menu); // Call displayMenu with the menu array
    } catch (error) {
        console.error('Error fetching menu data:', error);
    }
}

// Function to display menu items
function displayMenu(menuItems) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear existing content

    menuItems.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        category.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-item'; // Apply the class for styling
            itemCard.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p class="price">₱${item.price}</p>
                <img src="images/${item.image}" alt="${item.name} Logo" loading="lazy" width="200" height="900">
            `;
            categoryDiv.appendChild(itemCard);
        });

        menuContainer.appendChild(categoryDiv);
    });
}

// Function to switch to grid view
function showGridView() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.style.display = 'grid';
    menuContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))'; 
}

// Function to switch to list view
function showListView() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.style.display = 'block';
    menuContainer.classList.add('list'); // Add list class for styling
}

// Event listeners for grid and list view buttons
document.getElementById('grid').addEventListener('click', () => {
    showGridView();
    document.getElementById('menu-container').classList.remove('list'); // Remove list class if added
});

document.getElementById('list').addEventListener('click', () => {
    showListView();
    document.getElementById('menu-container').classList.add('list'); // Add list class for styling
});

// Call the fetch function on page load
window.onload = fetchMenu;
