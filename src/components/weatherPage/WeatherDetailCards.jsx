import WeatherDetailCard from "./WeatherDetailCard";
import { FiDroplet, FiThermometer } from "react-icons/fi";
import { MdAir } from "react-icons/md";

const WeatherDetailCards = ({ apparentTemperature, humidity, windSpeed }) => {

  return (

    <div className="flex gap-2">
      <WeatherDetailCard
        icon={<FiThermometer />}
        title={"Feels Like"}
        value={`${Math.round(apparentTemperature)}°C`}
      />

      <WeatherDetailCard
        icon={<FiDroplet />}
        title={"Humidity"}
        value={`${humidity}%`}
      />

      <WeatherDetailCard
        icon={<MdAir />}
        title={"Wind Speed"}
        value={`${Math.round(windSpeed)} km/h`}
      />
    </div>

  );

};

export default WeatherDetailCards;