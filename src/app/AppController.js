import { fetchWeather } from "./ApiService";

import sunSvg from "../assets/sun-svgrepo-com.svg";
import sunBehindCloud from "../assets/sun-behind-small-cloud-svgrepo-com.svg";
import sunBehindRainCloud from "../assets/sun-behind-rain-cloud-svgrepo-com.svg";
import cloud1 from "../assets/cloud-svgrepo-com.svg";
import overcast from "../assets/cloudy-cloud-svgrepo-com.svg";
import cloudyDay from "../assets/cloudy-day-weather-svgrepo-com.svg";
import rain from "../assets/rain-svgrepo-com.svg";
import humidityIcon from "../assets/humidity.svg";

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const form = document.querySelector("form");

const input = document.querySelector(".search-input");

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
  } else if (condition.includes("sun")) {
    background = sunBehindCloud;
  } else if (condition.includes("overcast")) {
    background = overcast;
  } else {
    background = sunSvg;
  }

  return background;
};

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

const forecastCon = document.querySelector(".forecast");

const todaysWeather = (weatherData) => {
  const condition = weatherData.condition.conditions;
  const temp = weatherData.condition.temp;
  const icon = weatherData.condition.icon;
  const location = weatherData.location;
  const time = weatherData.condition.datetime;
  const convertedTemp = fahrenheitToCelsius(temp);

  const date = getDate();

  const todaysWeathercard = document.querySelector(".todaysWeatherCard");
  const backgroundCode = getBackground(condition);
  const weatherIcon = getWeatherIcon(icon);

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
};

const weatherDetails = (weatherData) => {
  const weatherDetailCard = document.querySelector(".weather-detail-card");

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
};

const displayFiveDaysForecast = (data) => {
  const forecastCaintainer = document.querySelector(".forecast-container");

  forecastCaintainer.innerHTML = " ";

  data.map((item) => {
    const content = document.createElement("div");
    content.classList.add("forecast-content");

    const dates = item.datetime;
    const temp = item.temp;
    const condition = item.conditions.toLowerCase();
    const icon = item.conditions.icon;
    const celciusTemp = fahrenheitToCelsius(temp);
    const img = getWeatherIcon(condition);

    const date = daysOfWeek[new Date(dates).getDay()];

    content.innerHTML = `<div class="forecast-card">
            <h5>${date}</h5>
            <img class="fore-img" src=${img} alt="" />
            <p>${celciusTemp}&deg;C</p>
          </div>`;

    forecastCaintainer.appendChild(content);
  });
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const value = input.value.toLowerCase().trim();

  if (!value) {
    return;
  }

  const weatherData = await fetchWeather(value);

  if (!weatherData) return;

  const days = weatherData?.fiveDaysForecast;

  weatherDetails(weatherData);
  todaysWeather(weatherData);
  displayFiveDaysForecast(days);

  input.value = "";
  // input.style.display = "none";
});
