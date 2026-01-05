import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact"
import Navbar from "./components/Navbar";
import PageNotFound from"../pages/PageNotFound";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*"element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
