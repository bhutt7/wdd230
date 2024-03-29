const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%2C%20california?unitGroup=us&key=5PMNC57TGL47T4GSPTA8L9HBF&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    let temp = Math.round(data.currentConditions.temp);
    document.querySelector('#temp').textContent = temp;
    document.querySelector('#humid').textContent = data.currentConditions.humidity;
    document.querySelector('#desc').textContent =  data.currentConditions.conditions;

    document.querySelector('#day1').textContent = data.days[0].temp;
    document.querySelector('#day2').textContent = data.days[1].temp;
    document.querySelector('#day3').textContent = data.days[2].temp;

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let today = weekdays[date.getDay()];
    let tomorrow = weekdays[date.getDay() + 1];
    let thirdDay = weekdays[date.getDay() + 2];
    console.log(today);

    document.querySelector('#today').textContent = today + ': ';
    document.querySelector('#tomorrow').textContent = tomorrow + ': ';
    document.querySelector('#thirdDay').textContent = thirdDay + ': ';
};

getWeather();