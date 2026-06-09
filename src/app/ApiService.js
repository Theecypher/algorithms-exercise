const weatherApiiKey = import.meta.env.VITE_VISUAL_API_KEY;
const FORECAST_DAYS = 5;

export async function fetchWeather() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london/?key=${weatherApiiKey}`,
    );

    const res = await response.json();

    const location = res.address;
    const condition = res.currentConditions;
    const days = res.days;
    const fiveDaysForecast = res.days.slice(1, FORECAST_DAYS + 1);

    return {
      location,
      condition,
      days,
      fiveDaysForecast,
    };
  } catch (error) {
    throw new Error(error);
  }
}

export const weatherData = await fetchWeather();

// export const ApiService = { fetchWeather };
