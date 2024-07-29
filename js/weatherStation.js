const apiKey = '85ceea610b0c42cc85b222937242807';
const city = 'Madrid';
const country = 'Spain';

async function getWeather() {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`);//Realizo una solicitud a la API para obtener los datos del pronóstico del tiempo
    const data = await response.json(); //con esto convierto la respuesta en formato json
    displayCurrentWeather(data); //muestro los datos actuales del clima
    displayHourlyForecast(data); //aqui muestro la prevision horaria
}

function displayCurrentWeather(data) { 
    const cityCountry = document.getElementById('city-country');
    const currentIcon = document.getElementById('current-icon'); 
    const currentTemp = document.getElementById('current-temp');
    const currentCondition = document.getElementById('current-condition');
    const currentPrecip = document.getElementById('current-precip');
    const currentHumidity = document.getElementById('current-humidity');
    const currentWind = document.getElementById('current-wind');

    cityCountry.textContent = `${data.location.name}/ ${country}`;
    currentIcon.src = data.current.condition.icon;     //obtenemos el icono correspondiente con el estado del clima
    currentTemp.textContent = `${data.current.temp_c} °C`; //actualizamos la tempreratura
    currentCondition.textContent = data.current.condition.text; //describios y actualizamos el estado actual del clima
    currentPrecip.textContent = `Precipitaciones: ${data.current.precip_mm} %`;
    currentHumidity.textContent = `Humedad: ${data.current.humidity}%`;
    currentWind.textContent = `Viento: ${data.current.wind_kph} km/h`;
}

function displayHourlyForecast(data) {
    const hourlyForecast = document.getElementById('hourly-forecast');
    hourlyForecast.innerHTML = ''; 


    const hoursToShow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]; //filtro las horas que deseo se muestren
    const filteredHours = data.forecast.forecastday[0].hour.filter(hour =>   //filtramos la horas del pronostio e incluimos solo aquellas que declaramos en la constante hoursToShow
        hoursToShow.includes(new Date(hour.time).getHours())
    );

    filteredHours.forEach(hour => {  // iteramos , recorremos cada objeto de hora y para cada hora creamos un nuevo div donde mostramos la hora, el icono del clima y la 
        const hourDiv = document.createElement('div');
        hourDiv.classList.add('hour');
        hourDiv.innerHTML = `
            <div>${new Date(hour.time).getHours()}:00</div>
            <img src="${hour.condition.icon}" alt="Clima">
            <div>${hour.temp_c} °C</div>    `;
        hourlyForecast.appendChild(hourDiv);
    });
}

window.onload = getWeather;
