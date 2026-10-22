import { useState } from "react";
import { IoMdWarning } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const LocationInputModal = ({ setIsModalOpen }) => {

  const [city, setCity] = useState("");
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setIsWeatherLoading(true);

    setIsWeatherLoading(false);
    setCity("");
  };

  const handleGeoLocation = () => {
    setIsLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => { 
        setError("");
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude)
        setIsLocationLoading(false);
      },
      (error) => { 
        setIsLocationLoading(false);
        setError(error.message); 
      }, {
        timeout: 10000
      }
    );
  };

  return (

    <div 
      className="bg-black/20 fixed flex h-full inset-0 items-center justify-center"
      onClick={() => setIsModalOpen(false)}
    >

      <div 
        className="bg-white max-w-sm p-5 relative rounded-3xl space-y-4 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute border border-gray-300 cursor-pointer flex h-8 items-center justify-center right-6 rounded-full top-3 w-8"
          onClick={() => setIsModalOpen(false)}
        >
          <RxCross2 />
        </button>

        <div 
          className="bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center h-10 text-white rounded-lg text-xl w-10"
        >
          <IoLocationOutline />
        </div>

        <div>
          <h2 className="font-semibold text-xl text-slate-900">
            Where are you today?
          </h2>

          <p className="font-medium text-slate-500 text-sm">
            Pick a location and we'll check the weather for you.
          </p>
        </div>

        <form onSubmit={handleForm}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-700 text-sm">Enter you city</label>
            <input
              className="border border-slate-400 focus:outline-0 p-2 rounded-xl text-sm"
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Dhaka" 
              type="text"
              value={city}
            />
          </div>

          <button 
            className="bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer duration-300 font-semibold mt-4 py-2 rounded-full active:scale-95 text-sm text-white transition w-full"
            disabled={isWeatherLoading}
            type="submit"
          >
            {
              isWeatherLoading ? "Loading..." : "Get Weather"
            }
          </button>
        </form>

        <div className="flex gap-2 items-center">
          <div className="bg-gray-300 flex-1 h-px "></div>
          <span className="font-semibold text-slate-900 text-sm leading-none">or</span>
          <div className="bg-gray-300 flex-1 h-px"></div>
        </div>

        <button 
          className="border border-gray-300 cursor-pointer duration-300 flex font-semibold gap-1 items-center justify-center py-2 rounded-full active:scale-95 text-blue-600 text-sm transition w-full"
          disabled={isLocationLoading}
          onClick={handleGeoLocation}
        >
          {
            isLocationLoading ? 
              "Loading..." : (
              <>
                <MdMyLocation />
                Use My Location
              </>
            )
          }
          
        </button>

        {
          error && (
            <p 
              className="bg-red-200 flex font-medium gap-1 items-center px-4 py-2 rounded-full text-red-600 text-xs"
            >
              <IoMdWarning />
              {error}
            </p>
          )
        }

      </div>

    </div>

  );

};

export default LocationInputModal;