const apiKey = '4aa066ee7a1440e52c00115bd5df7a4d';
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const errorMessage = document.getElementById('errorMessage');
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = cityInput.value;
        if (city) {
            getWeatherData(city);
        }
    });
});

async function getWeatherData(city) {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayWeatherData(data);
            errorMessage.classList.add('hidden');
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('An error occurred while fetching the data');
    }
}
function displayWeatherData(data){
    cityName.textContent = data.name || 'N/A';
    temperature.textContent = data.main && typeof data.main.temp !== 'undefined'
        ? `Temperature:${data.main.temp} °C`
        : 'Temperature: N/A';
    description.textContent = data.weather && data.weather[0] && data.weather[0].description
        ? `Description:${data.weather[0].description}`
        : 'Description: N/A';
    humidity.textContent = data.main && typeof data.main.humidity !== 'undefined'
        ? `Humidity:${data.main.humidity}%`
        : 'Humidity: N/A';
    weatherResult.classList.remove('hidden');
}

function showError(message) {
    weatherResult.classList.add('hidden');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}