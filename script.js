function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=3211c23bed1c705ede916a628a62c2bd&&units==metric')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log('error,doesn t exists:', error);
        });
}

getWeather();