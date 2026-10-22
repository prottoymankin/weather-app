import { getWeatherCondition } from "../../constants/weatherConditions";

const WeatherAdviceCard = ({ weatherData }) => {

  const { weather_code } = weatherData;

  const weatherAdvice = getWeatherCondition(weather_code);

  return (

    <div 
      className="bg-linear-to-r from-blue-50 to-blue-100 border-l-4 border-l-blue-600 mt-5 p-5 rounded-2xl shadow-xl/10 space-y-5"
    >

      <div 
        className="bg-white flex font-medium gap-2 items-center py-1 px-4 rounded-full shadow-xl text-blue-600 text-xs uppercase w-fit"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-blue-500"></span>
        </span>

        Smart Suggestion
      </div>

      <p className="font-semibold text-slate-900">
        {weatherAdvice.advice}
      </p>
      
    </div>

  );

};

export default WeatherAdviceCard;