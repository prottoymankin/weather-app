import { FiRefreshCcw } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import warning from "../assets/warning.png";
import { useEffect } from "react";

const SomethingWentWrong = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const errorMessage = state?.errorMessage;
  const latitude = state?.latitude;
  const longitude = state?.longitude;
  const name = state?.name;

  const handleTryAgain = () => {
    navigate("/weather", {
      state: { latitude, longitude, name }
    });
  };

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate])

  return (

    <div className="bg-blue-50 flex h-dvh items-center justify-center">

      <div 
        className="bg-white flex flex-col items-center justify-center max-w-xl p-10 rounded-2xl shadow-xl/10 w-full"
      >
        <img 
          alt=""
          className="h-40"
          src={warning} 
        />

        <div className="text-center mb-8">
          <h2 className="font-semibold text-slate-900 text-2xl">
            Something Went Wrong
          </h2>

          <p className="font-medium text-slate-600">
            {errorMessage || "We couldn't load the weather data. Please check your connection and try again."}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="active:scale-95 bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer duration-200 flex font-medium gap-1 items-center px-4 py-2 rounded-full text-white transition"
            onClick={handleTryAgain}
          >
            <FiRefreshCcw />
            Try Again
          </button>

          <Link
            className="flex font-medium gap-1 hover:bg-blue-100 items-center px-4 py-2 rounded-full text-blue-600"
            to={"/"}
          >
            <IoHomeOutline />
            Go Home
          </Link>
        </div>
      </div>
      
    </div>

  );

};

export default SomethingWentWrong;