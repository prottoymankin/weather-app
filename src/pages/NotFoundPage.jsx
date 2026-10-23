import { Link } from "react-router";
import notFound from "../assets/404-error.png";
import { IoHomeOutline } from "react-icons/io5";

const NotFoundPage = () => {

  return (

    <div className="bg-blue-50 flex h-dvh items-center justify-center p-5">
      
      <div className="bg-white flex flex-col items-center max-w-xl p-5 rounded-2xl w-full">
        <img 
          alt=""
          className="h-60"
          src={notFound} 
        />

        <div className="mb-5 space-y-2 text-center">
          <h2 className="text-3xl">
            Page Not Found
          </h2>

          <p className="max-w-sm sm:text-lg text-slate-500">
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <Link
          className="bg-blue-600 flex font-medium gap-1 items-center px-4 py-2 rounded-full text-white"
          to={"/"}
        >
          <IoHomeOutline />
          Go Home
        </Link>
      </div>

    </div>

  );

};

export default NotFoundPage;