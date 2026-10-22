export const getCoordinatesByCity = async (city) => {

  if (!city) throw new Error ("Please enter a city name.");

  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);

  if (!response.ok) throw new Error ("Failed to fetch location data.");

  const data = await response.json();
  
  const location = data.results?.[0];

  if (!location) throw new Error ("City not found. Please try another city.");

  const { name, latitude, longitude } = data.results[0];

  return ({ name, latitude, longitude });

};