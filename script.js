async function getWeather() {
    const apiKey = 'ef7a0d61b5cf884a27c9a0074e9ae786'; // Replace with your API key
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>🌧️ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.log("Error fetching data:", error);
        document.getElementById("weatherResult").innerHTML = "Error fetching weather data!";
    }
}
