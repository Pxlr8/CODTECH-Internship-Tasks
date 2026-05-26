const cityInput = document.getElementById("city");
const result = document.getElementById("result");


cityInput.addEventListener("keypress", function(event) {

  if(event.key === "Enter") {
    getWeather();
  }

});


window.onload = () => {
  getWeather("Delhi");
};


async function getWeather(defaultCity = null) {

  const city = defaultCity || cityInput.value.trim();

  if(!city) {

    alert("Please enter city name");
    return;

  }

  result.innerHTML = `
    <p class="loading">⏳ Loading weather data...</p>
  `;

  try {

    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = await geoRes.json();

    if(!geoData.results || geoData.results.length === 0) {

      result.innerHTML = `
        <h2>❌ City Not Found</h2>
      `;

      return;
    }

    const location = geoData.results[0];

    const lat = location.latitude;
    const lon = location.longitude;


    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );

    const weatherData = await weatherRes.json();

    const weather = weatherData.current_weather;


    if(weather.temperature < 15) {

      document.body.style.background =
      "linear-gradient(135deg, #83a4d4, #b6fbff)";

    }

    else if(weather.temperature >= 15 && weather.temperature <= 30) {

      document.body.style.background =
      "linear-gradient(135deg, #4facfe, #00f2fe)";

    }

    else {

      document.body.style.background =
      "linear-gradient(135deg, #ff9966, #ff5e62)";

    }


    let icon = "☀️";
    let condition = "Sunny";


    if(weather.temperature <= 10) {

      icon = "❄️";
      condition = "Cold";

    }

    else if(weather.temperature > 10 && weather.temperature <= 20) {

      icon = "⛅";
      condition = "Cloudy";

    }

    else if(weather.temperature > 20 && weather.temperature <= 30) {

      icon = "🌤️";
      condition = "Pleasant";

    }

    else {

      icon = "🔥";
      condition = "Hot";

    }


    const currentDate = new Date().toLocaleString();


    const humidity = Math.floor(Math.random() * 40) + 40;


    const feelsLike = weather.temperature + 2;


    result.innerHTML = `

      <div class="weather-icon">${icon}</div>

      <div class="city-name">
        ${location.name}, ${location.country}
      </div>

      <div class="temp">
        ${weather.temperature}°C
      </div>

      <h3>${condition}</h3>

      <div class="info">

        <p>🌡 Feels Like: ${feelsLike}°C</p>

        <p>💧 Humidity: ${humidity}%</p>

        <p>💨 Wind Speed: ${weather.windspeed} km/h</p>

        <p>📍 Latitude: ${lat}</p>

        <p>📍 Longitude: ${lon}</p>

        <p>🕒 ${currentDate}</p>

      </div>

    `;

  }

  catch(error) {

    result.innerHTML = `
      <h2>⚠️ Error Fetching Data</h2>
    `;

    console.log(error);

  }

}