# Weather App Project

## Project Overview
The Weather App is a web application that provides **real-time, location-based weather information**. Users can search for any city or select a location on an interactive map to get accurate weather data, including temperature, humidity, wind speed, and a brief description of weather conditions. The application is built with modern web technologies and integrates APIs for dynamic data fetching and display.

---

## Features
- Real-time weather updates for any city or selected location.
- Interactive map integration using **Leaflet.js**.
- Responsive design for mobile, tablet, and desktop screens.
- Display of temperature, humidity, wind speed, and weather conditions.
- Error handling for invalid city names or API/network failures.
- Dynamic interface updates without page reloads.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Mapping:** Leaflet.js (interactive maps)  
- **API:** OpenWeatherMap API  
- **Tools:** VS Code, GitHub, Browser DevTools  

---

## How It Works
1. The user enters a city name in the input field or selects a location on the map.  
2. JavaScript sends a request to the **OpenWeatherMap API** with the city name or geographic coordinates.  
3. The API returns JSON data with weather information.  
4. The application parses the JSON data to extract temperature, humidity, wind speed, and weather description.  
5. Weather information is dynamically displayed on the UI and map, including markers and popups for locations.  
6. Error messages are displayed for invalid inputs or API failures.

---

## Installation & Deployment
1. Clone the repository:
   ```bash
   git clone https://github.com/AMULYA200307/weather-app.git
