const API_KEY = 'f2ba086ccb452f243f9b65fb42315320'; // Replace with your OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchBtn').addEventListener('click', getWeather);
document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            document.getElementById('errorMsg').classList.add('hidden');
            document.getElementById('weatherInfo').classList.remove('hidden');
        })
        .catch(error => {
            showError('Error fetching weather. Please check the city name or API key.');
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

// Show map with city coordinates
showMap(data.coord.lat, data.coord.lon, data.name, Math.round(data.main.temp), data.weather[0].description);


}

function showError(message) {
    const errorEl = document.getElementById('errorMsg');
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    document.getElementById('weatherInfo').classList.add('hidden');
}
let map; // global map variable

function showMap(lat, lon, city, temp, description) {
    // Remove old map if it exists
    if (map) {
        map.remove();
    }

    // Initialize map
    map = L.map('map').setView([lat, lon], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add marker for the city
    L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${city}</b><br>${temp}°C, ${description}`)
        .openPopup();
}


