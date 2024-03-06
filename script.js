// 39b8e369946afcb56ac82ee0e075f85e
const apiKey = "39b8e369946afcb56ac82ee0e075f85e";

const main = document.querySelector(".main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeather(city) {
  const response = await fetch(url(city));
  const data = await response.json();

  console.log(data);
  addWeather(data);
}

function addWeather(info) {
  const temp = KtoC(info.main.temp);
  const humidity = info.main.humidity;

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `<h2><img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" /></h2>
        <small>${info.weather[0].main}</small>
        <div class="more-info">
         <p>Humidity : <span>${humidity}%</span></p>`;

  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter the correct location");
  }
});
