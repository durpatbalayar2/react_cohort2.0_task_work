import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
        <p className="text-sm">
          © {new Date().getFullYear()} Outfit. All rights reserved.
        </p>


        <h1 className="text-sm">@Durpat Singh Balayar</h1>

     
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
