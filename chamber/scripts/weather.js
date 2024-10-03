// Selectors for current weather elements
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const weatherDataContainer = document.querySelector('#weather-data');

// API key and coordinates for San Miguel, El Salvador
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
// Weather Forecast
async function fetchWeather() {
    try {
        const response = await fetch(myURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        displayWeather(data); // Display current weather
        displayForecast(data); // Display the 3-day forecast
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayForecast(data) {
    let forecastHTML = '<h4>3-Day Forecast</h4>';

    // Loop through the first three days (0: Today, 1: Tomorrow, 2: Day after tomorrow)
    for (let i = 0; i < 3; i++) {
        const forecastDay = data.daily[i]; // Access the daily weather data
        
        // Get the correct day label: 'Today' for day 0, then dynamic for other days
        const dayName = i === 0 
            ? 'Today' 
            : new Date(forecastDay.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });

        // Add the forecast details for the current day
        forecastHTML += `
            <p><strong>${dayName}:</strong> ${Math.round(forecastDay.temp.day)}&deg;F</p>
        `;
    }

    // Inject the forecast HTML into the weather-data container
    document.getElementById('weather-data').innerHTML = forecastHTML;
}

// Function to display the results
function displayResults(data) {
    myDescription.innerHTML = capitalizeWords(data.weather[0].description);
    myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Rounded temperature
    
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
