const hamburgerElement = document.querySelector('#Button');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

});
// Automatically fill the timestamp with the current date and time when the form loads

document.getElementById('timestamp').value = new Date().toISOString();

// Functions to open and close modals
function openModal(modalId) {
 document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
 document.getElementById(modalId).style.display = 'none';
}

 // Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);

    // Assign the values to the respective elements, but only after DOM has loaded
    const firstNameElement = document.getElementById('firstName');
    const lastNameElement = document.getElementById('lastName');
    const emailElement = document.getElementById('email');
    const mobileNumberElement = document.getElementById('mobileNumber');
    const businessNameElement = document.getElementById('businessName');
    const timestampElement = document.getElementById('timestamp');

    if (firstNameElement) firstNameElement.textContent = urlParams.get('first-name');
    if (lastNameElement) lastNameElement.textContent = urlParams.get('last-name');
    if (emailElement) emailElement.textContent = urlParams.get('email');
    if (mobileNumberElement) mobileNumberElement.textContent = urlParams.get('mobile-number');
    if (businessNameElement) businessNameElement.textContent = urlParams.get('business-name');
    if (timestampElement) timestampElement.textContent = urlParams.get('timestamp');
});

// Get all 'Learn More' buttons
const learnMoreButtons = document.querySelectorAll('.learn-more');

// Get all modal close buttons
const closeButtons = document.querySelectorAll('.close');

// Show modal when 'Learn More' button is clicked
learnMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Close modal when the close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


