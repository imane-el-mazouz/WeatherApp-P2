/*function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=3211c23bed1c705ede916a628a62c2bd&units=metric')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C" ;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
            document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/h";
        })
        .catch(function(error) {
            console.log('error, city doesn t exist:', error);
        });
}
getWeather();
*/
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    searchBtn.addEventListener("click", function() {
        const cityName = searchBox.value;
        getWeather(cityName,weatherIcon);

    });
});

function getWeather(cityName,weatherIcon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3211c23bed1c705ede916a628a62c2bd&units=metric`)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            document.querySelectorAll('.card').forEach(card => {
                card.style.display = 'none';
            });
            document.querySelectorAll('.card')[1].style.display = 'block';

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/h";

            updateIcon(weatherIcon, data.weather[0].main);
        })
        .catch(function(error) {
            console.log('Error:', error.message);
            showErrorMessage();
        });
}
function showErrorMessage() {
    document.querySelector(".city").innerHTML = "Undefined city";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".windspeed").innerHTML = "";
}
function updateIcon(weatherIcon, weatherCondition) {
    if (weatherCondition === "Rain") {
        weatherIcon.src = "PICTURES/rainy-day.png";
    } else if (weatherCondition === "Clouds") {
        weatherIcon.src = "PICTURES/cloudy-day.png";
    } else {
        weatherIcon.src = "PICTURES/sunny-day.png";
    }
}
function redirectToSite() {
    window.location.href = 'https://www.dateaujourdhui.com/';
}

