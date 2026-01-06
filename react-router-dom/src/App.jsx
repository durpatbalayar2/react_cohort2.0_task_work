import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";


import PageNotFound from"../pages/PageNotFound";

import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className=" w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
