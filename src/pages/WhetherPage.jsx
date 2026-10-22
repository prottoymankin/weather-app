import { useLocation } from "react-router";
import { getWeatherByCoordinates } from "../services/weather.service";
import { useEffect, useState } from "react";

import CurrentWeatherCard from "../components/weatherPage/CurrentWeatherCard";
import WeatherPageHeader from "../components/weatherPage/WeatherPageHeader";

const WhetherPage = () => {

  const { state } = useLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { latitude, longitude } = state;

  useEffect(() => {
    const getWeather = async () => {
      try {
        setError("");
        setIsLoading(true);
        const data = await getWeatherByCoordinates(latitude, longitude);
        setWeatherData(data);
      } catch (error) {
        setError(error.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    getWeather();
  }, [latitude, longitude]);

  return (

    <div className="bg-blue-50 flex flex-col items-center justify-center min-h-dvh p-5 space-y-10">
      
      <WeatherPageHeader />

      <div className="grid grid-cols-2 max-w-4xl w-full">
        {
          weatherData && (
            <CurrentWeatherCard 
              weatherData={weatherData}
            />
          )
        }
      </div>

    </div>

  )

};

export default WhetherPage;