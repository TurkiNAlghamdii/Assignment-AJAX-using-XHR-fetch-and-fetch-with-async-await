let btn = document.getElementById('search-btn');
let input = document.getElementById('city');


btn.addEventListener('click', fetchWeather);

input.onkeydown = function(event) {
  if (event.keyCode == 13) {
      fetchWeather();
  }
}

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
  
  let high = document.getElementById('high-temp');
  let low = document.getElementById('low-temp');
  let wind = document.getElementById('wind-speed');

  high.textContent = highTemp + "°C";
  low.textContent = lowTemp + "°C";
  wind.textContent = windSpeed + " kph";
}
