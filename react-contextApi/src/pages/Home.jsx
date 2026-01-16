
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-emerald-50 to-white px-6">
      
      <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-800">
        Explore Our <span className="text-emerald-500">Products</span>
      </h1>

     
      <p className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl">
        Discover high-quality products designed to make your life easier,
        smarter, and better.
      </p>

      <button
        onClick={() => navigate("/products")}
        className="mt-8 px-8 py-4 text-lg md:text-xl font-semibold 
                   bg-emerald-500 text-white rounded-xl
                   hover:bg-emerald-600 transition-all duration-300
                   active:scale-95 shadow-lg"
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
