export const weatherConditions = {
  0: { category: "Clear", description: "Clear sky" },
  1: { category: "Clear", description: "Mainly clear" },
  2: { category: "Cloudy", description: "Partly cloudy" },
  3: { category: "Cloudy", description: "Overcast" },
  45: { category: "Fog", description: "Fog" },
  48: { category: "Fog", description: "Depositing rime fog" },

  51: { category: "Drizzle", description: "Light drizzle" },
  53: { category: "Drizzle", description: "Moderate drizzle" },
  55: { category: "Drizzle", description: "Dense drizzle" },
  56: { category: "Drizzle", description: "Light freezing drizzle" },
  57: { category: "Drizzle", description: "Dense freezing drizzle" },

  61: { category: "Rain", description: "Slight rain" },
  63: { category: "Rain", description: "Moderate rain" },
  65: { category: "Rain", description: "Heavy rain" },
  66: { category: "Rain", description: "Light freezing rain" },
  67: { category: "Rain", description: "Heavy freezing rain" },

  71: { category: "Snow", description: "Slight snowfall" },
  73: { category: "Snow", description: "Moderate snowfall" },
  75: { category: "Snow", description: "Heavy snowfall" },
  77: { category: "Snow", description: "Snow grains" },

  80: { category: "Rain Showers", description: "Slight rain showers" },
  81: { category: "Rain Showers", description: "Moderate rain showers" },
  82: { category: "Rain Showers", description: "Violent rain showers" },

  85: { category: "Snow Showers", description: "Slight snow showers" },
  86: { category: "Snow Showers", description: "Heavy snow showers" },

  95: { category: "Thunderstorm", description: "Thunderstorm" },
  96: { category: "Thunderstorm", description: "Thunderstorm with slight hail" },
  97: { category: "Thunderstorm", description: "Heavy thunderstorm" },
  99: { category: "Thunderstorm", description: "Thunderstorm with heavy hail" },
};

export const getWeatherCondition = (weatherCode) => {
  return weatherConditions[weatherCode] ?? {
    category: "Unknown",
    description: "Unknown weather"
  };
};