document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city){
    var key = 'f5e0f93e845ecb2d75c6f0c2189d3537';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
    return resp.json()
    }) // Convert data to JSON
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch( 'Tallinn' );
}