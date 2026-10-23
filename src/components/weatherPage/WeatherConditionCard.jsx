import { FiThermometer } from "react-icons/fi";
import { getWeatherCondition } from "../../constants/weatherConditions";
import { formatTime } from "../../utils/formateTime";
import { IoMdTime } from "react-icons/io";
import LiveBadge from "../shared/LiveBadge";

const WeatherConditionCard = ({ weatherData }) => {

  const { 
    apparent_temperature,
    time,
    weather_code
  } = weatherData;

  const { category, description, image } = getWeatherCondition(weather_code);

  return (

    <div className="bg-linear-to-br from-white to-blue-300 flex-1 p-5 rounded-2xl shadow-xl/10">
      
      <LiveBadge label={"Live in your location"} />

      <div className="mt-10 space-y-5">
        <img 
          alt="" 
          className="h-30 mx-auto"
          src={image} 
        />

        <div className="text-center">
          <h3 className="font-bold text-blue-600 text-3xl">
            {category}
          </h3>

          <p className="font-semibold text-slate-500 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <div
            className="bg-white flex font-medium gap-1 items-center justify-center py-1 px-4 rounded-full shadow-xl text-blue-600 text-xs w-33"
          >
            <FiThermometer />
            <p>Feels like {Math.round(apparent_temperature)}&deg; C</p>
          </div>

          <div
            className="bg-white flex font-medium gap-1 items-center justify-center py-1 px-4 rounded-full shadow-xl text-blue-600 text-xs w-33"
          >
            <IoMdTime />
            <p>Updated {formatTime(time)}</p>
          </div>
        </div>
      </div>

    </div>

  );

};

export default WeatherConditionCard;