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
    const navigation = document.querySelector('.navigation ul');

        hamburgerButton.addEventListener('click', function() {
            if (navigation.style.display === 'none' || navigation.style.display === '') {
                navigation.style.display = 'block';
            } else {
                navigation.style.display = 'none';
                hamburgerButton.innerHTML = '&#8801;'; // Hamburger symbol
            }    
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle("dark-mode");
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

// Display banner on Mondays, Tuesdays, and Wednesdays
const bannerElement = document.createElement('div');
bannerElement.classList.add('banner');
const closeButton = document.createElement('button');
closeButton.textContent = '❌';
closeButton.style.float = 'right'; // Position the close button on the right

// Append closeButton directly to bannerElement
bannerElement.appendChild(closeButton);

const currentDay = new Date().getDay();
if (currentDay >= 1 && currentDay <= 3) {
  // Set the message separately from the closeButton
  const message = document.createTextNode('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.');
  bannerElement.insertBefore(message, closeButton);
} else {
  bannerElement.style.display = 'none';
}

document.body.prepend(bannerElement);

// Close the banner when the close button is clicked
closeButton.addEventListener('click', function() {
  bannerElement.style.display = 'none';
});

document.getElementById('submissionDate').value = Date.now();