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

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

});

// Function to fetch member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display member information
function displayMembers(members) {
    const memberContainer = document.getElementById('member-container');
    memberContainer.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card'; // Apply the class here
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} Logo" width="200" height="100">
            <div>
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `;
        memberContainer.appendChild(memberCard);
    });
}

// Function to switch to grid view
function showGridView() {
    const memberContainer = document.getElementById('member-container');
    memberContainer.style.display = 'grid';
    memberContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))'; 
}

// Function to switch to list view
function showListView() {
    const memberContainer = document.getElementById('member-container');
    memberContainer.style.display = 'flex';
    memberContainer.classList.add('list'); // Add list class for styling
}

// Event listeners for buttons
document.getElementById('grid').addEventListener('click', () => {
    showGridView();
    document.getElementById('member-container').classList.remove('list'); // Remove list class if added
});

document.getElementById('list').addEventListener('click', () => {
    showListView();
    document.getElementById('member-container').classList.add('list'); // Add list class for styling
});

// Call the fetch function on page load
window.onload = fetchMembers;


// Toggle view function
function toggleView(view) {
    const memberContainer = document.getElementById('member-container');
    if (view === 'grid') {
        memberContainer.classList.add('grid-view');
        memberContainer.classList.remove('list-view');
    } else {
        memberContainer.classList.add('list-view');
        memberContainer.classList.remove('grid-view');
    }
}
// Grid and List
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
