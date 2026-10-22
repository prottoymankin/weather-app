import { FaArrowLeft } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

const WeatherPageHeader = () => {

  return (

    <div className="flex items-center justify-between max-w-4xl w-full">
      <Link
        className="active:scale-95 bg-white duration-300 flex font-medium gap-1 items-center px-4 py-2 rounded-full shadow-2xl text-blue-600 text-sm transition" 
        to={"/"}
      >
        <FaArrowLeft />
        Back
      </Link>

      <button
        className="active:scale-95 bg-white cursor-pointer duration-300 flex font-medium gap-1 items-center px-4 py-2 rounded-full shadow-2xl text-blue-600 text-sm transition" 
      >
        <CiSearch className="size-5" />
        Change City
      </button>
    </div>

  );

};

export default WeatherPageHeader;