function handleSearchSubmit (event) {
    event.preventDefault();
    let city = document.querySelector("#search-form-input").value;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = city;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);