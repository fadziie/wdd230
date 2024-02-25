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

document.addEventListener('DOMContentLoaded', function() {
  // Assuming 'YOUR_API_KEY_HERE' is your actual API key
  const API_KEY = 'eqmeniv1bdgbjrfsjji00obvh8ej0cfykd0cyx1d'; // Replace this with your real API key
  const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://www.herald.co.zw/feed/')}&api_key=${API_KEY}`;

  fetch(RSS_URL)
    .then(response => response.json())
    .then(data => {
      const feedContainer = document.querySelector('.news-feed');
      data.items.forEach(item => {
        const article = document.createElement('article');
        article.innerHTML = `
          <h4><a href="${item.link}" target="_blank">${item.title}</a></h4>
          <p>${item.pubDate}</p>
          <p>${item.description}</p>
        `;
        feedContainer.appendChild(article);
      });
    })
    .catch(error => console.error('Error loading the news feed:', error));
});
