import weather from "../assets/weather.png";

const Loader = () => {

  return (

    <div className="flex items-center justify-center h-dvh">
      
      <div>
        <img 
          alt="" 
          className="animate-bounce h-20"
          src={weather} 
        />

        <p className="animate-pulse text-slate-900 text-2xl">
          Loading...
        </p>
      </div>

    </div>

  );

};

export default Loader;