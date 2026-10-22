import sun from "../assets/sun.png";
import cloudy from "../assets/cloud.png";
import drizzle from "../assets/Drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import rainShower from "../assets/rain-shower.png";
import thunderstorm from "../assets/lightning.png";
import fog from "../assets/fog.png";

export const weatherConditions = {
  0: {
    category: "Clear",
    description: "Clear sky",
    image: sun,
    advice: "Enjoy the clear weather outdoors.",
  },
  1: {
    category: "Clear",
    description: "Mainly clear",
    image: sun,
    advice: "A good time for outdoor activities.",
  },
  2: {
    category: "Cloudy",
    description: "Partly cloudy",
    image: cloudy,
    advice: "Enjoy outdoor activities if the weather feels comfortable.",
  },
  3: {
    category: "Cloudy",
    description: "Overcast",
    image: cloudy,
    advice: "Check the forecast before heading out.",
  },
  45: {
    category: "Fog",
    description: "Fog",
    image: fog,
    advice: "Travel carefully due to low visibility.",
  },
  48: {
    category: "Fog",
    description: "Depositing rime fog",
    image: fog,
    advice: "Travel carefully due to low visibility.",
  },

  51: {
    category: "Drizzle",
    description: "Light drizzle",
    image: drizzle,
    advice: "Carry an umbrella if you plan to go outside.",
  },
  53: {
    category: "Drizzle",
    description: "Moderate drizzle",
    image: drizzle,
    advice: "Carry an umbrella if you plan to go outside.",
  },
  55: {
    category: "Drizzle",
    description: "Dense drizzle",
    image: drizzle,
    advice: "Carry an umbrella or raincoat.",
  },
  56: {
    category: "Drizzle",
    description: "Light freezing drizzle",
    image: drizzle,
    advice: "Be careful of slippery surfaces.",
  },
  57: {
    category: "Drizzle",
    description: "Dense freezing drizzle",
    image: drizzle,
    advice: "Be careful of slippery surfaces.",
  },

  61: {
    category: "Rain",
    description: "Slight rain",
    image: rain,
    advice: "Carry an umbrella or raincoat.",
  },
  63: {
    category: "Rain",
    description: "Moderate rain",
    image: rain,
    advice: "Carry an umbrella or raincoat.",
  },
  65: {
    category: "Rain",
    description: "Heavy rain",
    image: rain,
    advice: "Take a raincoat and avoid waterlogged areas.",
  },
  66: {
    category: "Rain",
    description: "Light freezing rain",
    image: rain,
    advice: "Be careful of slippery surfaces.",
  },
  67: {
    category: "Rain",
    description: "Heavy freezing rain",
    image: rain,
    advice: "Avoid slippery routes and travel carefully.",
  },

  71: {
    category: "Snow",
    description: "Slight snowfall",
    image: snow,
    advice: "Wear warm clothing.",
  },
  73: {
    category: "Snow",
    description: "Moderate snowfall",
    image: snow,
    advice: "Wear warm clothing and suitable footwear.",
  },
  75: {
    category: "Snow",
    description: "Heavy snowfall",
    image: snow,
    advice: "Dress warmly and check travel conditions.",
  },
  77: {
    category: "Snow",
    description: "Snow grains",
    image: snow,
    advice: "Dress warmly and walk carefully.",
  },

  80: {
    category: "Rain Showers",
    description: "Slight rain showers",
    image: rainShower,
    advice: "Take an umbrella before heading out.",
  },
  81: {
    category: "Rain Showers",
    description: "Moderate rain showers",
    image: rainShower,
    advice: "Carry an umbrella or raincoat.",
  },
  82: {
    category: "Rain Showers",
    description: "Violent rain showers",
    image: rainShower,
    advice: "Avoid exposed areas and seek shelter during heavy showers.",
  },

  85: {
    category: "Snow Showers",
    description: "Slight snow showers",
    image: snow,
    advice: "Wear warm clothing and suitable footwear.",
  },
  86: {
    category: "Snow Showers",
    description: "Heavy snow showers",
    image: snow,
    advice: "Wear warm clothing and check travel conditions.",
  },

  95: {
    category: "Thunderstorm",
    description: "Thunderstorm",
    image: thunderstorm,
    advice: "Stay indoors and avoid exposed areas during the storm.",
  },
  96: {
    category: "Thunderstorm",
    description: "Thunderstorm with slight hail",
    image: thunderstorm,
    advice: "Stay indoors and protect yourself from hail.",
  },
  97: {
    category: "Thunderstorm",
    description: "Heavy thunderstorm",
    image: thunderstorm,
    advice: "Stay indoors and avoid going outside during the storm.",
  },
  99: {
    category: "Thunderstorm",
    description: "Thunderstorm with heavy hail",
    image: thunderstorm,
    advice: "Stay indoors and stay away from windows during hail.",
  },
};

export const getWeatherCondition = (weatherCode) => {
  return (
    weatherConditions[weatherCode] ?? {
      category: "Unknown",
      description: "Unknown weather",
    }
  );
};