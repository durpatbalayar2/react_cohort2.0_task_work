import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-10   ">
      <div className="w-35 h-35 overflow-hidden">
        <img className="w-full h-full object-cover"  src={logo} alt="logo"  />
      </div>
      <div className=" flex gap-20 text-2xl font-semibold  shadow-[0px_2px_6px_rgba(0,0,0,0.4)] px-15 py-3 rounded-4xl">
        <Link to="/">Home</Link>
        <Link to='/products'>Products</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="bg-black text-white font-semibold text-2xl rounded-xl px-5 py-3">
        <Link to="/contact">Contact US</Link>
      </div>
    </div>
  );
};

export default Navbar;
