import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className=" w-full h-full text-5xl text-center ">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex justify-center gap-2">
          <div className="relative w-1/2 h-100  m-5 rounded-2xl overflow-hidden hover:shadow-[0px_4px_8px_#fff]  transition-all ease-linear duration-400 hover:scale-95 ">
            <Link to="/product" className="text-7xl uppercase absolute top-[50%] left-1.5">
              Women's <br />
              Fashion
            </Link>

            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1753162658420-ecb3f9e36b86?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className=" relative w-1/2 h-100  m-5 rounded-2xl overflow-hidden hover:shadow-[0px_4px_8px_#fff]  transition-all ease-linear duration-400 hover:scale-95 ">
            <Link to='/product' className="text-7xl uppercase absolute top-[50%] left-2">
              Men's <br />
              Fashion
            </Link>
            <img
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1643970815116-0d0341f91f34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="h-full bg-gray-800 mx-5 my-2 rounded-2xl shadow-[0px_1px_8px_3px_#fff]">
          <h1 className="text-6xl ">About Wearify</h1>
          <p className="text-xl  p-10">
            Wearify is a modern fashion collection brand designed for
            individuals who value style, comfort, and confidence. We bring
            together premium men's and women's collections that blend
            contemporary trends with timeless designs. Every piece is carefully
            curated to match everyday wear as well as standout moments. At
            Wearify, quality fabrics and thoughtful craftsmanship come first.
            Our goal is to help you express your personality through fashion
            that feels as good as it looks.
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default About;
