import { FaArrowRight } from "react-icons/fa6";
import FeatureCards from "../components/homepage/FeatureCards";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import rain from "../assets/rain.png";
import lightning from "../assets/lightning.png";
import LocationInputModal from "../components/LocationInputModal";
import { useState } from "react";

const Homepage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (

    <div 
      className="bg-blue-50 flex flex-col gap-10 items-center justify-center min-h-dvh p-5 relative"
    >
      <img 
        className="absolute animate-spin h-20 hidden lg:block top-10 left-30 [animation-duration:3s]" 
        src={sun} 
      />

      <img 
        className="absolute animate-bounce h-20 hidden lg:block top-10 right-30 [animation-duration:3s]" 
        src={cloud} 
      />

      <img 
        className="absolute animate-bounce h-20 hidden lg:block bottom-10 left-30 [animation-duration:3s]" 
        src={rain} 
      />

      <img 
        className="absolute animate-bounce h-20 hidden lg:block bottom-10 right-30 [animation-duration:3s]" 
        src={lightning} 
      />

      <div className="flex flex-col gap-5 items-center justify-center">
        <div 
          className="bg-white flex font-medium gap-2 items-center py-1 px-4 rounded-full shadow-xl text-blue-600 text-xs w-fit"
        >
          <span class="relative flex size-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex size-2 rounded-full bg-blue-500"></span>
          </span>

          Free weather advice, no signup
        </div>

        <h1 className="font-extrabold text-slate-900 text-6xl md:text-7xl">
          Next

          <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Level
          </span>
        </h1>

        <p className="font-medium text-slate-900 text-center text-xl sm:text-2xl">
          Know the weather, know what to carry.
        </p>

        <p className="font-medium max-w-105 text-center text-sm text-slate-500">
          Check the weather in your city and get a simple, smart suggestion for your day - whether it's an umbrella, a water bottle or warm cloths.
        </p>

        <button
          className="bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer duration-300 flex font-bold gap-1 items-center px-6 py-3 rounded-full active:scale-95 text-white transition"
          onClick={() => setIsModalOpen(true)}
        >
          Check My Weather
          <FaArrowRight />
        </button>
      </div>

      <FeatureCards />

      {
        isModalOpen && <LocationInputModal setIsModalOpen={setIsModalOpen} />
      }
      

    </div>

  );

};

export default Homepage;