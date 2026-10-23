import { getWeatherCondition } from "../../constants/weatherConditions";
import LiveBadge from "../shared/LiveBadge";

const WeatherAdviceCard = ({ weatherData }) => {

  const { weather_code } = weatherData;

  const weatherAdvice = getWeatherCondition(weather_code);

  return (

    <div 
      className="bg-linear-to-r from-blue-50 to-blue-100 border-l-4 border-l-blue-600 mt-5 p-5 rounded-2xl shadow-xl/10 space-y-5"
    >

      <LiveBadge label={"Smart Suggestion"} />

      <p className="font-semibold">
        {weatherAdvice.advice}
      </p>
      
    </div>

  );

};

export default WeatherAdviceCard;