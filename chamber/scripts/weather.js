


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
