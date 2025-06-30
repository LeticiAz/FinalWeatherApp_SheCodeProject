function updateWeatherInfo (response) {
    let temp = Math.round(response.data.temperature.current);
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = temp;

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
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

searchCity ("Aveiro");