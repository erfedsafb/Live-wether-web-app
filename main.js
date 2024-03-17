document.addEventListener("DOMContentLoaded", function() {
    var apiKey = '9920008360e6212a01a59fd9eb579f46';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    var apiKeyParam = '&appid=' + '9920008360e6212a01a59fd9eb579f46';
    var unitParam = '&units=metric';
  

    var btn=document.getElementById('add');
    btn.addEventListener('click', function() {
        var input = document.getElementById('cityinput').value;
        if (input !== '') {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', apiUrl + input + apiKeyParam + unitParam, true);
            xhr.onload = function() {
                if (xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    displayWeather(data);
                } else {
                    alert('Error: ' + xhr.status);
                }
            }
            xhr.send();
        } else {
            alert('Please enter a city name');
        }
    });
    

    function displayWeather(data) {
        var cityOutput = document.getElementById('cityoutput');
        var description = document.getElementById('description');
        var temp = document.getElementById('temp');
        var wind = document.getElementById('wind');
    
        cityOutput.textContent = data.name + ', ' + data.sys.country;
        description.textContent = 'Description: ' + data.weather[0].description;
        temp.textContent = 'Temperature: ' + data.main.temp + '°C';
        wind.textContent = 'Wind Speed: ' + data.wind.speed + ' m/s';
    }
    
});