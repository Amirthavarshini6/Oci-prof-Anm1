const apiKey = "YOUR_API_KEY_HERE";  // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
