document.addEventListener('DOMContentLoaded', function() {
    fetch('data/pricing.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('rentalsTable').getElementsByTagName('tbody')[0];
            data.rentals.forEach(rental => {
                let row = tableBody.insertRow();
                
                // Cell for image and color swatches
                let imgCell = row.insertCell(0);
                imgCell.className = 'image-cell'; // Add this line
                let img = document.createElement('img');
                img.src = rental.images.red; // Default image
                img.alt = rental.type;
                img.style.width = '200px';
                img.style.display = 'block'; // Ensure the image is block-level to allow swatches to appear below
                imgCell.appendChild(img);
                
                // Container for color swatches to ensure they appear below the image
                let swatchesContainer = document.createElement('div');
                swatchesContainer.style.textAlign = 'center'; // Center-align swatches if desired
                ['red', 'black', 'blue'].forEach(color => {
                    let colorDiv = document.createElement('div');
                    colorDiv.className = 'color-swatch';
                    colorDiv.style.backgroundColor = color;
                    colorDiv.onclick = () => img.src = rental.images[color];
                    swatchesContainer.appendChild(colorDiv);
                });
                imgCell.appendChild(swatchesContainer); // Add the swatches container to the same cell as the image

                // Additional cells for rental details
                row.insertCell(1).textContent = rental.type;
                row.insertCell(2).textContent = rental.maxPersons;
                row.insertCell(3).textContent = `$${rental.halfDayReservation}`;
                row.insertCell(4).textContent = `$${rental.fullDayReservation}`;
                row.insertCell(5).textContent = `$${rental.halfDayWalkIn}`;
                row.insertCell(6).textContent = `$${rental.fullDayWalkIn}`;
            });
        })
        .catch(error => console.error('Error fetching rental data:', error));
});
