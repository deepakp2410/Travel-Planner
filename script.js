let map = L.map('map').setView([51.505, -0.09], 2); // Initial map view

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addToItinerary() {
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;

    if (destination && date && activity) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = `${destination} - ${activity} on ${date}`;
        document.getElementById('itinerary-list').appendChild(listItem);

        // Add marker to the map
        const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(destination)}&format=json`;

        fetch(geocodeUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data[0]) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    L.marker([lat, lon]).addTo(map)
                        .bindPopup(`${destination}<br>${activity}<br>${date}`)
                        .openPopup();

                    // Adjust the map view to fit all markers
                    const bounds = L.latLngBounds([lat, lon]);
                    map.fitBounds(bounds);
                }
            })
            .catch(error => {
                console.error('Error fetching geocode data:', error);
            });
    } else {
        alert('Please fill in all fields.');
    }
}
