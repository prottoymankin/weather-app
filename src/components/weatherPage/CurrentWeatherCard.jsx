import { IoLocationOutline } from "react-icons/io5";

import WeatherDetailCards from "./WeatherDetailCards";
import { getWeatherCondition } from "../../constants/weatherConditions";
import LiveBadge from "../shared/LiveBadge";

const CurrentWeatherCard = ({ weatherData }) => {

  const { 
    apparent_temperature,
    name, 
    relative_humidity_2m, 
    temperature_2m,
    weather_code, 
    wind_speed_10m
  } = weatherData;

  const { category, description } = getWeatherCondition(weather_code);

  return (

    <div className="bg-linear-to-tr from-white to-blue-100 flex-1 p-5 rounded-2xl shadow-xl/10 space-y-5">
      
      <LiveBadge label={"Today's Weather"} />

      <div className="flex font-semibold gap-2 items-center text-2xl text-slate-900">
        <IoLocationOutline className="size-5 text-blue-600" />
        <p>{name}</p>
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="font-extrabold leading-none text-blue-600 text-7xl">
          {Math.round(temperature_2m)}&#176;
        </h2>

        <div>
          <p className="font-semibold text-slate-900">{category}</p>
          <p className="font-semibold text-slate-600 text-xs">{description}</p>
        </div>
      </div>

      <WeatherDetailCards
        apparentTemperature={apparent_temperature}
        humidity={relative_humidity_2m}
        windSpeed={wind_speed_10m}
      />

    </div>

  );

};

export default CurrentWeatherCard;