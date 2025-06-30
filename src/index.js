function updateWeatherInfo (response) {
    let temp = Math.round(response.data.temperature.current);
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = temp;

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.temperature.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = response.data.wind.speed;

    let timeElement = document.querySelector("#dateHour");
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);
    
    let iconElement = document.querySelector("#weather-icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity (city){
    let apiKey = "c56dcb7t88aa43c2b2f5cfa690a8917o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(updateWeatherInfo);
}


function handleSearchSubmit (event) {
    event.preventDefault();
    let city = document.querySelector("#search-form-input").value;
    searchCity(city);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

window.onload = function () {
  searchCity("Aveiro");
};