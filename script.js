/* 
get access to input field 
get access to the button
create function to fetch api data when button is clicked
*/

var inputField = document.querySelector("#city");
var button = document.querySelector("#get-weather");


function fetchData() {
    var cityName = inputField.value;
    var apiKey = "c3e754a93a4f13ded8f976731dbbdfc4";
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (weatherData) {
        console.log(weatherData)
    })
}

button.addEventListener("click", fetchData) 