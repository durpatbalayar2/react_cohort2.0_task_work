import React, { createContext, useState } from "react";
import { getAllProductData } from "../api/ProductApi";
import { useEffect } from "react";

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    let data = await getAllProductData();
    setProductData(data);


      
  };

 



  useEffect(() => {
    getData();
    
  }, []);

  return (
    <ProductDataContext.Provider value={[productData, setProductData]}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
