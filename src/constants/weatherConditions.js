import sun from "../assets/sun.png";
import cloudy from "../assets/cloud.png";
import drizzle from "../assets/Drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import rainShower from "../assets/rain-shower.png";
import thunderstorm from "../assets/lightning.png";
import fog from "../assets/fog.png";

export const weatherConditions = {
  0: { category: "Clear", description: "Clear sky", image: sun },
  1: { category: "Clear", description: "Mainly clear", image: sun },
  2: { category: "Cloudy", description: "Partly cloudy", image: cloudy },
  3: { category: "Cloudy", description: "Overcast", image: cloudy },
  45: { category: "Fog", description: "Fog", image: fog },
  48: { category: "Fog", description: "Depositing rime fog", image: fog },

  51: { category: "Drizzle", description: "Light drizzle", image: drizzle },
  53: { category: "Drizzle", description: "Moderate drizzle", image: drizzle },
  55: { category: "Drizzle", description: "Dense drizzle", image: drizzle },
  56: { category: "Drizzle", description: "Light freezing drizzle", image: drizzle },
  57: { category: "Drizzle", description: "Dense freezing drizzle", image: drizzle },

  61: { category: "Rain", description: "Slight rain", image: rain },
  63: { category: "Rain", description: "Moderate rain", image: rain },
  65: { category: "Rain", description: "Heavy rain", image: rain },
  66: { category: "Rain", description: "Light freezing rain", image: rain },
  67: { category: "Rain", description: "Heavy freezing rain", image: rain },

  71: { category: "Snow", description: "Slight snowfall", image: snow },
  73: { category: "Snow", description: "Moderate snowfall", image: snow },
  75: { category: "Snow", description: "Heavy snowfall", image: snow },
  77: { category: "Snow", description: "Snow grains", image: snow },

  80: { category: "Rain Showers", description: "Slight rain showers", image: rainShower },
  81: { category: "Rain Showers", description: "Moderate rain showers", image: rainShower },
  82: { category: "Rain Showers", description: "Violent rain showers", image: rainShower },

  85: { category: "Snow Showers", description: "Slight snow showers", image: snow },
  86: { category: "Snow Showers", description: "Heavy snow showers", image: snow },

  95: { category: "Thunderstorm", description: "Thunderstorm", image: thunderstorm },
  96: { category: "Thunderstorm", description: "Thunderstorm with slight hail", image: thunderstorm },
  97: { category: "Thunderstorm", description: "Heavy thunderstorm", image: thunderstorm },
  99: { category: "Thunderstorm", description: "Thunderstorm with heavy hail", image: thunderstorm },
};

export const getWeatherCondition = (weatherCode) => {
  return weatherConditions[weatherCode] ?? {
    category: "Unknown",
    description: "Unknown weather"
  };
};