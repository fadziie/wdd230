// Example to fetch and display weather information
// Note: You'll need to insert your own API key and adjust URLs for production

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel,mx&units=metric&appid=e9ad653b9e064757388ed45595c70f41')
        .then(response => response.json())
        .then(data => {
            console.log(data); // For development use
            // Example: Display weather info in an element with id="weather"
            // document.getElementById('weather').textContent = `Current temperature: ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather:', error));
});
