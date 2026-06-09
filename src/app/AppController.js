import { fetchWeather, weatherData } from "./ApiService";

import sunSvg from "../assets/sun-svgrepo-com.svg";
import sunBehindCloud from "../assets/sun-behind-small-cloud-svgrepo-com.svg";
import sunBehindRainCloud from "../assets/sun-behind-rain-cloud-svgrepo-com.svg";
import cloud1 from "../assets/cloud-svgrepo-com.svg";
import overcast from "../assets/cloudy-cloud-svgrepo-com.svg";
import cloudyDay from "../assets/cloudy-day-weather-svgrepo-com.svg";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

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

    console.log(celciusTemp);

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

const condition = weatherData
// conditions;

console.log(condition);

// partly-cloudy-day



// if (condition.includes("clear")) {
//   background = "#87CEEB";
// } else if (condition.includes("partially cloudy")) {
//   background = "#A7C7E7";
// } else if (condition.includes("overcast")) {
//   background = "#B0BEC5";
// } else if (condition.includes("rain")) {
//   background = "#607D8B";
// }

const todaysWeather = () => {
  const left = document.getElementsByClassName(".left");
  console.log(left);
};

todaysWeather();

displayFiveDaysForecast();
