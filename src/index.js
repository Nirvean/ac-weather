//Initial layout
function showInitialLayout(response) {
  console.log(response.data);
  let initialTemp = document.querySelector("#current-temp");
  initialTemp.innerHTML = Math.round(response.data.main.temp);

  let initialLocation = document.querySelector("#current-city");
  initialLocation.innerHTML = response.data.name;

  let initialConditions = document.querySelector("#current-weather-text");
  initialConditions.innerHTML = response.data.weather[0].main;

  let initialHumidity = document.querySelector("#current-humidity");
  initialHumidity.innerHTML = response.data.main.humidity;

  let initialWind = document.querySelector("#current-wind");
  initialWind.innerHTML = Math.round(response.data.wind.speed);
  
  //Initial weather icon
  let initialWeatherIcon = document.querySelector("#current-weather-icon");

  if (initialConditions.textContent === Thunderstorm) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-bolt");
  } else if (initialConditions.textContent === Drizzle) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-cloud-rain");
  } else if (initialConditions.textContent === Rain) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-cloud-showers-heavy");
  } else if (initialConditions.textContent === Snow) {
    initialWeatherIcon.setAttribute("class", "fa-regular fa-snowflake");
  } else if (initialConditions.textContent === Mist) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Smoke) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Haze) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Dust) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Fog) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Sand) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Ash) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-smog");
  } else if (initialConditions.textContent === Squall) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-wind");
  } else if (initialConditions.textContent === Tornado) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-tornado");
  } else if (initialConditions.textContent === Clear) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-sun");
  } else if (initialConditions.textContent === Clouds) {
    initialWeatherIcon.setAttribute("class", "fa-solid fa-cloud");
  }
}

let apiKey = "b4966aaefe805e530bcf3948c7f52bbe";
let initialLocation = "Málaga";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${initialLocation}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showInitialLayout);

//Current date and hour
let currentDate = document.querySelector("#current-date");
let currentTime = document.querySelector("#current-hour");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let timeNow = new Date();
let dayNow = days[timeNow.getDay()];
let monthNow = months[timeNow.getMonth()];
let dateNow = timeNow.getDate();
let hourNow = timeNow.getHours();
hourNow = ("0" + hourNow).slice(-2); //or if (hourNow < 10) {hours = `0${hourNow}`;}
let minutesNow = timeNow.getMinutes();
minutesNow = ("0" + minutesNow).slice(-2); //or if (minutesNow < 10) {hours = `0${minutesNow}`;}

currentDate.innerHTML = `${dayNow}, ${monthNow} ${dateNow}`;
currentTime.innerHTML = `${hourNow}:${minutesNow}`;

//Search engine
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h2 = document.querySelector("#current-city");
  h2.innerHTML = `${searchInput.value}`;
  let apiKey = "b4966aaefe805e530bcf3948c7f52bbe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = `${temperature}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//Current location button
function showCurrentCity(response) {
  let currentCity = response.data.name;
  let h2 = document.querySelector("#current-city");
  h2.innerHTML = currentCity;
}

function setCurrentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "b4966aaefe805e530bcf3948c7f52bbe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showCurrentCity);
}

function readCurrentLocation() {
  navigator.geolocation.getCurrentPosition(setCurrentLocation);
}

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", readCurrentLocation);

//Fake temperature in Celsius and Fahrenheit
/*function changeTempType() {
  let replaceTempType = document.querySelector("#current-temp");
  replaceTempType.innerHTML = `${Math.round(60.8)} ºF`;
  let tempSymbol = document.querySelector(".fahrenheit-symbol");
  if (tempSymbol.innerHTML === "ºF") {
    tempSymbol.innerHTML = "ºC";
  } else if (tempSymbol.innerHTML === "ºC") {
    replaceTempType.innerHTML = `${Math.round(16)} ºC`;
    tempSymbol.innerHTML = "ºF";
  }
}

let changeTemp = document.querySelector("#fahrenheit-celsius-button");
changeTemp.addEventListener("click", changeTempType);*/
