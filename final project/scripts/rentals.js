document.addEventListener('DOMContentLoaded', function() {
    fetch('data/pricing.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('rentalsTable').getElementsByTagName('tbody')[0];
            data.rentals.forEach(rental => {
                let row = tableBody.insertRow();
                
                // Image cell with default image (red)
                let imgCell = row.insertCell(0);
                let img = document.createElement('img');
                img.src = rental.images.red; // Default image
                img.alt = rental.type;
                img.style.width = '200px'; // Adjust as necessary
                imgCell.appendChild(img);
                
                // Color selection
                let colorCell = imgCell; // Reusing the image cell for simplicity
                ['red', 'black', 'blue'].forEach(color => {
                    let colorDiv = document.createElement('div');
                    colorDiv.className = 'color-swatch';
                    colorDiv.style.backgroundColor = color;
                    colorDiv.onclick = () => img.src = rental.images[color];
                    colorCell.appendChild(colorDiv);
                });

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
