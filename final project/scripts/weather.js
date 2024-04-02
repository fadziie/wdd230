const apiKey ="e9ad653b9e064757388ed45595c70f41" ;
const cityName = 'Cozumel'; // Use the city name

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const temperature = data.main.temp.toFixed(0);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const tempMax = data.main.temp_max.toFixed(0);

    document.getElementById('temperature').textContent = `${temperature}°F`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Displaying temp-max in a closable message
    const tempMaxMessage = document.createElement('div');
    tempMaxMessage.textContent = `High Temperature for Today: ${tempMax}°F`;
    tempMaxMessage.style.padding = '10px';
    tempMaxMessage.style.backgroundColor = '#007BFF';
    tempMaxMessage.style.color = 'white';
    tempMaxMessage.style.position = 'fixed';
    tempMaxMessage.style.top = '0';
    tempMaxMessage.style.width = '100%';
    tempMaxMessage.style.textAlign = 'center';
    tempMaxMessage.onclick = () => tempMaxMessage.style.display = 'none';

    document.body.prepend(tempMaxMessage);
  })
  .catch(error => {
    console.error('Failed to fetch weather data:', error);
  });


