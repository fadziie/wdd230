async function getBusinessesData() {
    try {
      const response = await fetch("data/businesses.json");
      const data = await response.json();
      displayBusinesses(data.businesses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function displayBusinesses(businesses) {
    // Since there's no common class, select each card individually.
    const card2 = document.querySelector(".card2");
    const card3 = document.querySelector(".card3");
    const card4 = document.querySelector(".card4");
    
    // Put the card elements in an array for easier manipulation.
    const spotlightSections = [card2, card3, card4];
    
    const filteredBusinesses = businesses.filter(business => 
      business.membershipLevel === "Silver Membership" || 
      business.membershipLevel === "Gold Membership"
    );
  
    // Ensure we do not select more businesses than we have card sections for.
    const selectedBusinesses = getRandomBusinesses(filteredBusinesses, 2, spotlightSections.length);
    
    selectedBusinesses.forEach((business, index) => {
      if (index < spotlightSections.length) { // Prevent exceeding the available card sections
        const section = spotlightSections[index];
        section.querySelector("h2").textContent = business.companyName;
        section.querySelector("p").textContent = business.description;
        
        // Assuming you want to add a phone number and a link to the website.
        const phoneParagraph = document.createElement("p");
        phoneParagraph.textContent = `Phone: ${business.number}`;
        section.appendChild(phoneParagraph);
  
        const link = document.createElement("a");
        link.href = business.siteURL;
        link.textContent = "Visit Website";
        section.appendChild(link);
      }
    });
  }
  
  getBusinessesData();
  
  function getRandomBusinesses(businesses, minCount, maxCount) {
    const shuffled = businesses.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    return shuffled.slice(0, count);
  }
  