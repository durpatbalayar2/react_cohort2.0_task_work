import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Footer from "./components/Footer";
import PageNotFound from "../pages/PageNotFound";
function App() {
  return (
    <div className="w-full  bg-gray-900 text-white">
      <Navbar />

      <div className="w-full h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}>
            <Route path="women" element={<Product />} />
            <Route path="men" element={<Product />} />
          </Route>

          <Route path="/product" element={<Product />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
