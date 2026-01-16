import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  let [productData] = useContext(ProductDataContext);



  return (
    <div className="flex flex-wrap gap-3  justify-between  w-full   min-h-screen lg:p-8 p-4">
      {productData.map(function (elem, idx) {
        return (
          <Link
            to={`/products/${elem.id}`}
            key={idx}
            className="w-80 h-100 shadow-[0px_2px_6px_rgba(0,0,0,0.5)] rounded-lg flex flex-col items-center px-5 "
          >
            <div className="w-70 h-80 overflow-hidden p-2   ">
              <img
                className="h-full w-full object-cover hover:scale-90 transition-all ease-in-out duration-300   "
                src={elem.image}
                alt=""
              />
            </div>
            <h1 className="font-bold cursor-pointer hover:underline">
              {elem.title}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
