import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-emerald-50 to-white px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-extrabold text-emerald-500">
        404
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page not found
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 bg-emerald-500 text-white text-lg font-semibold rounded-xl 
                   hover:bg-emerald-600 transition active:scale-95 shadow-lg"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default PageNotFound;
