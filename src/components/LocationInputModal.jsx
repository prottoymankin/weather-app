import { useState } from "react";
import { IoMdWarning } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { getCoordinatesByCity } from "../services/geocoding.service";
import { useNavigate } from "react-router";

const LocationInputModal = ({ onClose }) => {

  const [city, setCity] = useState("");
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setIsWeatherLoading(true);
    setError("");

    try {
      const location = await getCoordinatesByCity(city.trim());

      navigate(
        "/weather",
        { state: location }
      );

      setCity("");
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setIsWeatherLoading(false);
    }
  };

  const handleGeoLocation = () => {
    setIsLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => { 
        setError("");

        const { latitude, longitude } = position.coords;
        
        navigate(
          "/weather",
          { state: { latitude, longitude, name: "Your Location" } }
        );

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
      className="bg-black/20 fixed flex h-full inset-0 items-center justify-center p-5"
      onClick={onClose}
    >

      <div 
        className="bg-white max-w-sm p-5 relative rounded-3xl space-y-4 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute border border-gray-300 cursor-pointer flex h-8 items-center justify-center right-6 rounded-full top-3 w-8"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        <div 
          className="bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center h-10 text-white rounded-lg text-xl w-10"
        >
          <IoLocationOutline />
        </div>

        <div>
          <h2 className="font-semibold text-xl">
            Where are you today?
          </h2>

          <p className="font-medium text-slate-500 text-sm">
            Pick a location and we'll check the weather for you.
          </p>
        </div>

        <form onSubmit={handleForm}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm">Enter you city</label>
            <input
              className="border border-slate-500 focus:outline-0 p-2 rounded-xl text-sm"
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
          <div className="bg-slate-500 flex-1 h-px "></div>
          <span className="font-semibold text-sm leading-none">or</span>
          <div className="bg-slate-500 flex-1 h-px"></div>
        </div>

        <button 
          className="border border-blue-600 cursor-pointer duration-300 flex font-semibold gap-1 items-center justify-center py-2 rounded-full active:scale-95 text-blue-600 text-sm transition w-full"
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