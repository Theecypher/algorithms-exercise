import { fetchWeather, weatherData } from "./ApiService";

import sunSvg from "../assets/sun-svgrepo-com.svg";
import sunBehindCloud from "../assets/sun-behind-small-cloud-svgrepo-com.svg";
import sunBehindRainCloud from "../assets/sun-behind-rain-cloud-svgrepo-com.svg";
import cloud1 from "../assets/cloud-svgrepo-com.svg";
import overcast from "../assets/cloudy-cloud-svgrepo-com.svg";
import cloudyDay from "../assets/cloudy-day-weather-svgrepo-com.svg";
import rain from "../assets/rain-svgrepo-com.svg";
import humidityIcon from "../assets/humidity.svg";

const left = document.querySelector(".left");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemember",
  "December",
];

const getDate = () => {
  const currentDate = new Date().getDate();
  const currentMonth = months[new Date().getMonth()];
  const currentDay = daysOfWeek[new Date().getDay()];
  const currentYear = new Date().getFullYear();

  const currentFullDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  return currentFullDate;
};

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

const img = document.createElement("img");
const sun = document.querySelector(".sun");
const cloud = document.querySelector(".cloud");

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

const forecastCon = document.querySelector(".forecast");
const displayFiveDaysForecast = () => {
  weatherData.fiveDaysForecast.map((item) => {
    let img;
    const content = document.createElement("div");
    content.classList.add("forecast-content");
    const dates = item.datetime;
    const temp = item.temp;
    const condition = item.conditions.toLowerCase();
    const celciusTemp = fahrenheitToCelsius(temp);

    if (condition.includes("rain")) {
      img = cloud1;
    } else if (condition.includes("sun")) {
      img = sunBehindCloud;
    } else if (condition.includes("overcast")) {
      img = overcast;
    } else if (condition.includes("clear")) {
      img = sunSvg;
    } else {
      img = cloudyDay;
    }

    const date = daysOfWeek[new Date(dates).getDay()];

    content.innerHTML = `<div class="forecast-card">
            <h5>${date}</h5>
            <img class="fore-img" src=${img} alt="" />
            <p>${celciusTemp}&deg;C</p>
          </div>`;

    forecastCon.append(content);
  });
};

const getBackground = (condition) => {
  let background;
  if (condition.includes("clear")) {
    background = "#87CEEB";
  } else if (condition.includes("partially cloudy")) {
    background = "#A7C7E7";
  } else if (condition.includes("overcast")) {
    background = "#B0BEC5";
  } else if (condition.includes("rain")) {
    background = "#607D8B";
  } else {
    background = "#8ab2db";
  }

  return background;
};

const getWeatherIcon = (condition) => {
  let background;
  if (condition.toLowerCase() === "rain") {
    background = rain;
  } else if (condition.includes("clear-day")) {
    background = sunSvg;
  } else {
    background = sunSvg;
  }

  return background;
};

const todaysWeather = () => {
  const condition = weatherData.condition.conditions;
  const temp = weatherData.condition.temp;
  const icon = weatherData.condition.icon;
  const location = weatherData.location;
  const time = weatherData.condition.datetime;
  const convertedTemp = fahrenheitToCelsius(temp);

  const date = getDate();

  const todayWeatherContainer = document.createElement("div");
  const todaysWeathercard = document.createElement("div");
  todaysWeathercard.classList.add("todaysWeatherCard");
  const backgroundCode = getBackground(condition);
  const weatherIcon = getWeatherIcon(icon);
  todayWeatherContainer.style.background = backgroundCode;

  todaysWeathercard.innerHTML = `
    <div class="weather-card">
      <div class="location-datetime">
        <div class="location-date">
          <p class="location">${location}</p>
          <p class="date">${date}</p>
        </div>
        <p class="time">${time}</p>
      </div>

      <div class="temp-icon">
        <div class="temp-rain">
          <p class="temp">${convertedTemp}&deg;C</p>
          <div class="rain-data">
            <p></p>
            <p>${condition}</p>
          </div>
        </div>

        <div>
          <img src=${weatherIcon} alt="" class="weather-icon" />
        </div>
      </div>
    </div>
  `;

  todayWeatherContainer.appendChild(todaysWeathercard);
  left.appendChild(todayWeatherContainer);
};

const weatherDetails = () => {
  const weatherDetailCard = document.createElement("div");
  weatherDetailCard.classList.add("weather-detail-card");

  console.log(weatherData);

  const humidity = weatherData.condition.humidity;
  const windspeed = weatherData.condition.windspeed;
  const uvindex = weatherData.condition.uvindex;
  const solarradiation = weatherData.condition.solarradiation;
  const pressure = weatherData.condition.pressure;

  weatherDetailCard.innerHTML = `
  <div>
    <ul class="weather-list">
      <li class="weather-item">
       <div class="name-icon"> 
        <img class="detail-icon" src=${humidityIcon} alt="" />
        <p class="detail-name">Humidity</p>
      </div>
      <p>${humidity}</p>
      </li>

      <li class="weather-item">
       <div> 
        <img class="detail-icon" src="" alt="" />
        <p class="detail-name">Pressure</p>
      </div>
      <p>${pressure}</p>
      </li>
    </ul>
  </div>
  `;

  left.appendChild(weatherDetailCard);
};

todaysWeather();
weatherDetails();

displayFiveDaysForecast();
