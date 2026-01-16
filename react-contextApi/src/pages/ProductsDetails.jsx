import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {

  const {productId} =useParams()

 

  const [productData] =useContext(ProductDataContext)

  const selectedProduct = productData.find((elem)=>elem.id===Number(productId))

  if(!selectedProduct){
    return(
      <div className="text-3xl flex items-center justify-center text-gray-500">Loading....</div>
    )
  }

 

  return (
    <div className="  flex   items-center justify-center  w-full min-h-screen  bg-linear-to-r from-emerald-50 to-white px-4   ">
      <div className=" lg:w-[80%] w-full lg:h-full flex flex-col lg:flex-row  gap-5 lg:shadow-[0px_2px_8px_2px_rgba(0,0,0,0.8)] p-5">
        <div className="lg:w-120 lg:h-100">
          <img
            className="w-full h-full object-cover overflow-hidden  border border-gray-500 p-2 rounded-lg"
            src={selectedProduct.image}
            alt=""
          />
        </div>

        <div className=" px-3 w-[95%] ">
          <h1 className="lg:text-4xl text-2xl uppercase font-semibold">
            {selectedProduct.title}
          </h1>
          <h5 className="text-xl text-gray-600 mt-1 ">
            {selectedProduct.category}
          </h5>

          <div className="flex items-center gap-2 mb-4">
            <h2 className="lg:text-3xl text-2xl font-semibold mt-4 text-emerald-500 ">
              ${selectedProduct.price}
            </h2>
            <h3 className="mt-4  bg-gray-200 px-2 py-1 text-base rounded-lg">
              {selectedProduct.rating.rate}⭐|
              <span>{selectedProduct.rating.count}</span>
            </h3>
          </div>

          <hr className="border border-gray-400" />

          <p className="lg:text-xl mt-4">{selectedProduct.description}</p>

          <button className="text-white bg-black rounded-lg outline-none px-5 py-2 mt-8 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
