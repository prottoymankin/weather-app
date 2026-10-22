export const getWeatherByCoordinates = async (latitude, longitude) => {

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m`
  );

  if (!response.ok) {
    throw new Error ("Failed to fetch weather data.");
  }

  const data = await response.json();

  const currentWeatherData = data?.current;

  if (!currentWeatherData) {
    throw new Error ("Current weather data not found.");
  }

  return currentWeatherData;

};