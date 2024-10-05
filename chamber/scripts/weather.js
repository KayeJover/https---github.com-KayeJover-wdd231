
// Selectors for current weather elements
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
const weatherDataContainer = document.querySelector('#weather-data');


const myKey = "73f33a35ca9203f921d00ad1a2b4ea2f";
const myLat = "10.31995";
const myLong = "123.881978";

// API URL for current weather and forecast
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// Fetch current weather data
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For debugging
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the results
function displayResults(data) {
    myDescription.innerHTML = capitalizeWords(data.weather[0].description);
    myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`; 
    myHigh.innerHTML = `${Math.round(data.main.temp_max)}&deg;F`;
    myLow.innerHTML = `${Math.round(data.main.temp_min)}&deg;F`;
    // Set the weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

// Helper function to capitalize words
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

apiFetch();


// JavaScript code for the spotlights
const businesses = [
    {
        "companyName": "MetroTech Solutions",
        "logo": "metrotect.jpg",
        "phone": "(632) 654-3210",
        "address": "123 Metro Ave, Cebu City, Philippines",
        "website": "https://metrotech.com",
        "membershipLevel": "Silver",
        "email": "support@metrotech.com"
    },
    {
        "companyName": "Aboitiz Power Corporation",
        "logo": "aboitiz.png",
        "phone": "(032) 230-8333",
        "address": "3rd Floor, Aboitiz Corporate Center, M.L. Quezon Avenue, Cebu City, Philippines",
        "website": "https://aboitizpower.com/",
        "membershipLevel": "Gold",
        "email": "customer.service@aboitiz.com"
    },
    {
        "companyName": "Megaworld Corporation",
        "logo": "megaworld.png",
        "phone": "(032) 231-6700",
        "address": "The Mactan Newtown, Lapu-Lapu City, Cebu, Philippines",
        "website": "https://www.megaworldcorp.com/",
        "membershipLevel": "Gold",
        "email": "info@megaworldcorp.com"
    }
];

function getRandomBusinesses(businesses, num) {
    const shuffled = businesses.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displaySpotlights(businesses) {
    const spotlightsDataContainer = document.querySelector('#spotlights'); // Adjust selector to the main container
    spotlightsDataContainer.innerHTML = ''; // Clear previous data

    businesses.forEach(business => {
        const content = `
            <div class="member-data">
                <div class="business-info">
                    <div class="business-logo">
                        <img src="images/${business.logo}" alt="${business.companyName} logo" width="150" height="100">
                    </div>
                    <div class="details">
                        <p class="business-name"><strong>${business.companyName}</strong></p>
                        <p class="membership-level"><strong>${business.membershipLevel}</strong></p>
                        <hr>
                        <p class="email"><strong>Email:</strong> ${business.email}</p>
                        <p class="phone"><strong>Phone:</strong> ${business.phone}</p>
                        <p class="url"><strong>URL:</strong> <a href="${business.website}" target="_blank">Visit Website</a></p>
                    </div>
                </div>
            </div>
        `;
        spotlightsDataContainer.innerHTML += content; // Append content to the container
    });
}

const selectedBusinesses = getRandomBusinesses(businesses, 3); 
displaySpotlights(selectedBusinesses);

const hamburgerElement = document.querySelector('#Button');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

});