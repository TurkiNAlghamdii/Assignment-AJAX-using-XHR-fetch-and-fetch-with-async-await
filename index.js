document.getElementById('search-btn').addEventListener('click', fetchWeather);

async function fetchWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'b9bfa12a088343f3a7a221710241910';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeatherInfo(data) {
  const highTemp = data.current.temp_c;
  const lowTemp = data.current.temp_c - 5;
  const windSpeed = data.current.wind_kph;

  document.getElementById('high-temp').textContent = highTemp + "°C";
  document.getElementById('low-temp').textContent = lowTemp + "°C";
  document.getElementById('wind-speed').textContent = windSpeed + " kph";
}
