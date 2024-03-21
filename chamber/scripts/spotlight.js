async function getBusinessesData() {
    try {
      const response = await fetch("data/businesses.json");
      // Directly parse the JSON file which is expected to be an array
      const businesses = await response.json();
      displayBusinesses(businesses); // Pass the array directly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function displayBusinesses(businesses) {
    // Assuming the card elements have classes card2, card3, card4 as mentioned
    const cardElements = [
      document.querySelector(".card2"),
      document.querySelector(".card3"),
      document.querySelector(".card4")
    ];
    
    const filteredBusinesses = businesses.filter(business =>
      business.membershipLevel === "Silver Membership" || 
      business.membershipLevel === "Gold Membership"
    );
  
    // Considering you might not always have 3 businesses after filtering,
    // ensure the code handles any number of businesses up to 3.
    const selectedBusinesses = getRandomBusinesses(filteredBusinesses, 2, 3);
    
    selectedBusinesses.forEach((business, index) => {
      if (index < cardElements.length) { // To safely handle index out of bounds
        const card = cardElements[index];
        card.querySelector("h2").textContent = business.name;
        card.querySelector("p").textContent = business.address; // Assuming you want to display the address
  
        // Adding a phone number and a link to the website, if not already part of your HTML template
        const phoneParagraph = document.createElement("p");
        phoneParagraph.textContent = `Phone: ${business.phone}`;
        card.appendChild(phoneParagraph);
  
        const link = document.createElement("a");
        link.href = business.website;
        link.textContent = "Visit Website";
        link.setAttribute('target', '_blank'); // Open in new tab
        card.appendChild(link);
      }
    });
  }
  
  function getRandomBusinesses(businesses, minCount, maxCount) {
    const shuffled = businesses.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    return shuffled.slice(0, count);
  }
  
  getBusinessesData();
  