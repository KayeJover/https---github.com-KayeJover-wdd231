
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

// Function to calculate the difference between two dates in days
function daysBetween(date1, date2) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMilliseconds = date2 - date1;
    return Math.floor(differenceInMilliseconds / millisecondsPerDay);
  }
  
  // Function to set the visitor message
  function setVisitorMessage() {
    const visitorMessageElement = document.getElementById("visitor-message");
    const lastVisit = localStorage.getItem("lastVisit");
  
    const currentDate = Date.now(); // Get current date in milliseconds
  
    if (!lastVisit) {
      // First visit
      visitorMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const lastVisitDate = parseInt(lastVisit, 10); // Parse the stored value as an integer
      if (!isNaN(lastVisitDate)) { // Ensure it's a valid number
        const daysAgo = daysBetween(lastVisitDate, currentDate);
  
        if (daysAgo < 1) {
          // Last visit was less than a day ago
          visitorMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysAgo === 1) {
          // Last visit was exactly one day ago
          visitorMessageElement.textContent = "You last visited 1 day ago.";
        } else {
          // Last visit was more than one day ago
          visitorMessageElement.textContent = `You last visited ${daysAgo} days ago.`;
        }
      } else {
        // In case of a corrupted or invalid last visit date, show welcome message
        visitorMessageElement.textContent = "Welcome! Let us know if you have any questions.";
      }
    }
  
    // Store the current date as the last visit in localStorage
    localStorage.setItem("lastVisit", currentDate.toString());
  }
  
  // Call the function when the page loads
  window.onload = setVisitorMessage;
  