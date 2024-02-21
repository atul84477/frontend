const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9d8cfdccedmshee67a208d468bd0p12c091jsn257f07e2a5a0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    cityName.innerHTML = city;

    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            console.log(result);

            cloud_pct.innerHTML = result.cloud_pct;
            temp.innerHTML = result.temp;
            temp1.innerHTML = result.temp;
            feels_like.innerHTML = result.feels_like;
            humidity.innerHTML = result.humidity;
            humidity1.innerHTML = result.humidity;
            min_temp.innerHTML = result.min_temp;
            max_temp.innerHTML = result.max_temp;
            wind_speed.innerHTML = result.wind_speed;
            wind_speed1.innerHTML = result.wind_speed;
            wind_degrees.innerHTML = result.wind_degrees;
            sunrise.innerHTML = result.sunrise;
            // sunset.innerHTML = result.sunset;
        })
        .catch(error => {
            console.error(error);
        });
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
});

getWeather("delhi");
