const WeatherDetailCard = ({ icon, title, value }) => {

  return (
    <div className="bg-blue-100 flex gap-2 items-center p-4 rounded-2xl">
      <div 
        className="bg-blue-200 flex h-8 items-center justify-center rounded-lg text-blue-600 w-8"
      >
        {icon}
      </div>

      <div>
        <p className="font-medium text-slate-600 text-xs">{title}</p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );

};

export default WeatherDetailCard;