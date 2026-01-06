import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact"

import PageNotFound from"../pages/PageNotFound";

import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div >
      <RouterProvider router={router}/>
      

     
    </div>
  );
};

export default App;
