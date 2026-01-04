import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-20 flex gap-2 items-center justify-between bg-gray-600 px-8">
      <div className="text-3xl font-semibold uppercase">Wearify</div>
      <div className="flex gap-10 text-xl  ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>

       
      </div>
    </div>
  );
}

export default Navbar