let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;
// Get current year
var currentYear = new Date().getFullYear();
  
// Set current year in HTML
document.getElementById("currentYear").textContent = currentYear;

// Add this to your existing JavaScript file or create a new one
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger');
    const closeIcon = document.getElementById('closeIcon');
    const navigation = document.querySelector('.navigation ul');

        hamburgerButton.addEventListener('click', function() {
            if (navigation.style.display === 'none' || navigation.style.display === '') {
                navigation.style.display = 'block';
                hamburgerButton.innerHTML = '&#10005;'; // 'X' symbol
            } else {
                navigation.style.display = 'none';
                hamburgerButton.innerHTML = '&#8801;'; // Hamburger symbol
            }    
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const daysBetweenVisits = document.getElementById('daysBetweenVisits');
  if (!daysBetweenVisits) {
    console.log("Element with ID 'daysBetweenVisits' does not exist in the document.");
    return; // Exit if the element does not exist
  }

  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();
  const oneDayMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

  if (lastVisit) {
    const lastVisitTimestamp = parseInt(lastVisit);
    const days = Math.round((currentTimestamp - lastVisitTimestamp) / oneDayMilliseconds);
    daysBetweenVisits.textContent = days === 1 ? `You last visited 1 day ago.` : `You last visited ${days} days ago.`;
  } else {
    daysBetweenVisits.textContent = "Welcome! Let us know if you have any questions.";
  }

  // Store the current visit timestamp in local storage
  localStorage.setItem('lastVisit', currentTimestamp.toString());
});


  document.addEventListener("DOMContentLoaded", function() {
    const rangeInput = document.getElementById("page-rating");
    const rangeValue = document.getElementById("rangeValue");

    rangeInput.addEventListener("input", function() {
        rangeValue.textContent = this.value;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  // Example: Extracting the 'username' parameter
  const username = params.get('username'); // Assuming 'username' is one of the form fields
  if(username) {
      const main = document.querySelector('main');
      const p = document.createElement('p');
      p.textContent = `Username: ${username}`;
      main.appendChild(p);
  }
});

async function fetchWeatherData() {
  const apiKey = "e9ad653b9e064757388ed45595c70f41";
  const city = "Mutare";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  // Use 'url' instead of 'apiURL'
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = Math.round((data.main.temp - 32) * 5/9); // Convert to Celsius
      const weatherDescription = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      document.getElementById('weather-temp').textContent = `Temperature: ${temperature} °C`;
      document.getElementById('weather-desc').textContent = `Condition: ${weatherDescription}`;
      document.getElementById('weather-icon').setAttribute('src', iconUrl);
      document.getElementById('weather-icon').setAttribute('alt', weatherDescription);git

    })
    .catch(error => console.error('Error fetching weather data:', error));
}
document.addEventListener('DOMContentLoaded', fetchWeatherData);
