import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  flex justify-between items-center p-4  lg:p-8 ">
      <div className="lg:text-3xl text-xl font-bold uppercase">Outfit</div>

      <div className=" flex gap-5 lg:gap-20 lg:shadow-lg px-10 py-5 rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "lg:text-xl text-orange-500 font-semibold border-b-2 border-orange-500"
              : "text-gray-600 lg:text-xl font-semibold "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "lg:text-xl text-orange-500 font-semibold border-b-2 border-orange-500"
              : "text-gray-600 lg:text-xl font-semibold "
          }
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "lg:text-xl text-orange-500 font-semibold border-b-2 border-orange-500"
              : "text-gray-600 lg:text-xl font-semibold "
          }
        >
          Products
        </NavLink>
      </div>

      <button
        onClick={() => navigate("/about")}
        className=" hidden md:block  bg-black outline-none px-5 py-3 text-xl text-white rounded-3xl active:scale-90 transition-all ease-linear   "
      >
        Get Started
      </button>
    </div>
  );
}

export default Navbar