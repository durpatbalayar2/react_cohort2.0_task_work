import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between px-10   ">
      <div className="w-35 h-35 overflow-hidden">
        <img className="w-full h-full object-cover" src={logo} alt="logo" />
      </div>
      <div className=" flex gap-20 text-2xl   shadow-[0px_2px_6px_rgba(0,0,0,0.4)] px-15 py-3 rounded-4xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-black"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-black"
          }
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-black"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-black"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="bg-black text-white font-semibold text-2xl rounded-4xl px-8 py-3">
        <button onClick={()=> navigate('/')}>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
