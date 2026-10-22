import { useLocation } from "react-router";
import { getWeatherByCoordinates } from "../services/weather.service";
import { useEffect, useState } from "react";

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
    <div>
      Weather Page
    </div>
  )

};

export default WhetherPage;