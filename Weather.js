function getWeather() {
    var cityName = document.getElementById("cityNameInput").value;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=461d067db44d5754ac986e927de88490';
  
    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Weather data is not available for the requested city.');
        }
      })
      .then(function(data) {
        var temperature = data.main.temp;
        var temperatureCelsius = (temperature - 273.15).toFixed(2);
  
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = "Temperature in " + cityName + ": " + temperatureCelsius + "°C";
      })
      .catch(function(error) {
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = error.message;
      })};