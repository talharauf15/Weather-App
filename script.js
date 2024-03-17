function fetchData(city) {
  if (city === "") {
    document.getElementById("weatherInfo") =
      "<h2>Please enter a city</h2>";
  }
  const apiKey = "f3d6adbb77ab708e9e948b60efce7d38";
  const apiUrl = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status == 200) {
      const data = JSON.parse(this.responseText);
      
      displayWeather(data);
      
    } else {
      console.log("Error fetching weather data");
    }
  };

  xhttp.open("GET", apiUrl, true); //asynchronous
  xhttp.send();
}

function backImage () {
    document.style.body.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
}

function displayWeather(data) {
  const weatherInfo = (document.getElementById("weatherInfo").innerHTML = `
    <h2>${data.name}</h2>
    <h2>${data.main.temp}°C</h2>
    <h2>Weather: ${data.weather[0].description}</h2>
    <p>Temperature Feels Like: ${data.main.feels_like}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed}km/h</p>
    <p>Sea Level: ${data.main.sea_level}m</p>
    
`);
}
