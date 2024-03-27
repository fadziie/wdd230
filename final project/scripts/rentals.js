document.addEventListener('DOMContentLoaded', function() {
    fetch('data/pricing.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('rentalsTable').getElementsByTagName('tbody')[0];
            data.rentals.forEach(rental => {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = rental.type;
                row.insertCell(1).textContent = rental.maxPersons;
                row.insertCell(2).textContent = `$${rental.halfDayReservation}`;
                row.insertCell(3).textContent = `$${rental.fullDayReservation}`;
                row.insertCell(4).textContent = `$${rental.halfDayWalkIn}`;
                row.insertCell(5).textContent = `$${rental.fullDayWalkIn}`;
            });
        })
        .catch(error => console.error('Error fetching rental data:', error));
});
