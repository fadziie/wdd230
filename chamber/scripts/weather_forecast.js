// Retrieve the temperature, wind speed, and wind chill elements
const temperatureElement = document.querySelector("#temperature");
const weatherDescriptionElement = document.querySelector("#weather-description");
const weatherIconElement = document.querySelector("#weather-icon");
const captionElement = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#forecast-container");

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
  const apiKey = "e9ad653b9e064757388ed45595c70f41";
  const city = "Mutare";
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    // Fetch current weather
    const currentWeatherResponse = await fetch(currentWeatherUrl);
    const currentWeatherData = await currentWeatherResponse.json();
    const temperature = currentWeatherData.main.temp.toFixed(0);
    const weatherEvent = currentWeatherData.weather[0];
    const iconSrc = `https://openweathermap.org/img/w/${weatherEvent.icon}.png`;
    const desc = capitalizeWords(weatherEvent.description);

    // Update the current weather section
    temperatureElement.textContent = `${temperature}°F`;
    weatherDescriptionElement.textContent = desc;
    weatherIconElement.setAttribute("src", iconSrc);
    weatherIconElement.setAttribute("alt", desc);
    captionElement.textContent = desc;

    // Fetch 3-day forecast
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    updateForecast(forecastData.list);
  } catch (error) {
    console.log(error);
  }
}

// Update the 3-day forecast section
function updateForecast(forecastData) {
  const dailyData = forecastData.filter((reading) => reading.dt_txt.includes("12:00:00"));
  dailyData.forEach((day, index) => {
    if (index < 3) { // Limit to 3 days
      const temp = day.main.temp.toFixed(0);
      const iconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
      const desc = capitalizeWords(day.weather[0].description);

      // Create forecast card
      const forecastCard = document.createElement("div");
      forecastCard.className = "forecast-card";
      forecastCard.innerHTML = `
        <img src="${iconSrc}" alt="${desc}">
        <p>${temp}°F</p>
        <p>${desc}</p>
      `;
      forecastContainer.appendChild(forecastCard);
    }
  });
}

// Capitalize each word of the weather description
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Call the fetchWeatherData function to display the weather information
fetchWeatherData();
