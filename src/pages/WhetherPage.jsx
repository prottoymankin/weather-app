import { useLocation, useNavigate } from "react-router";
import { getWeatherByCoordinates } from "../services/weather.service";
import { useEffect, useState } from "react";

import CurrentWeatherCard from "../components/weatherPage/CurrentWeatherCard";
import WeatherPageHeader from "../components/weatherPage/WeatherPageHeader";
import WeatherConditionCard from "../components/weatherPage/WeatherConditionCard";
import Loader from "../components/Loader";
import WeatherAdviceCard from "../components/weatherPage/WeatherAdviceCard";

const WhetherPage = () => {

  const { state } = useLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const latitude = state?.latitude;
  const longitude = state?.longitude;
  const name = state?.name;

  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
      return;
    }

    const getWeather = async () => {
      try {
        setIsLoading(true);
        const data = await getWeatherByCoordinates(latitude, longitude);
        data.name = name;
        setWeatherData(data);
      } catch (error) {
        navigate("/error", {
          state: { errorMessage: error.message, latitude, longitude, name }
        })
      } finally {
        setIsLoading(false);
      }
    }

    getWeather();
  }, [latitude, longitude, name, navigate, state]);

  if (isLoading) {
    return <Loader />
  };

  return (

    <div className="bg-blue-50 flex flex-col items-center justify-center min-h-dvh p-5 space-y-10">
      
      <WeatherPageHeader />

      <div className="gap-5 grid lg:grid-cols-2 items-start max-w-5xl w-full">
        {
          weatherData && (
            <>
              <div>
                <CurrentWeatherCard 
                  weatherData={weatherData}
                />

                <WeatherAdviceCard
                  weatherData={weatherData}
                />
              </div>

              <WeatherConditionCard
                weatherData={weatherData}
              />
            </>
          )
        }
      </div>

    </div>

  )

};

export default WhetherPage;