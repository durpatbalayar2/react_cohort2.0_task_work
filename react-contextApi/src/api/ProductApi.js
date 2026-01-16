import axios, {} from "axios";

export const getAllProductData = async () => {
  try {
    let res = await axios.get("https://fakestoreapi.com/products");

    return res.data
   
  } catch (error) {
    console.log(error);
  }
};
