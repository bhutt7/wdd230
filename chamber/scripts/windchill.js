const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/star%2C%20idaho?unitGroup=us&key=5PMNC57TGL47T4GSPTA8L9HBF&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    let temp = data.currentConditions.temp;
    document.querySelector('#temp').textContent = temp;
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    let speed = data.currentConditions.windspeed;
    document.querySelector('#speed').textContent = speed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather-icon').src = image;
    document.querySelector('#weather-icon').alt = data.currentConditions.conditions + ' icon';
    
    let chill;
    if (temp <= 50) {
        if (speed > 3) {
            chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
        } else {
            chill = 'N/A';
        }
    }

    document.getElementById('chill').textContent = chill;
};

getWeather();