import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate =useNavigate()
  return (
    <div className="bg-linear-to-br from-emerald-50 via-white to-emerald-100 min-h-screen">
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
          Building <span className="text-emerald-500">Better Products</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          We create products that combine design, quality, and innovation to
          deliver the best experience for our customers.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
        {[
          { value: "50K+", label: "Happy Customers" },
          { value: "1K+", label: "Premium Products" },
          { value: "99%", label: "Customer Satisfaction" },
        ].map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/70 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-4xl font-bold text-emerald-500">
              {item.value}
            </h2>
            <p className="mt-2 text-gray-600">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            We started with a simple mission - to make high-quality products
            accessible to everyone. Today, we serve thousands of customers who
            trust us for reliability, innovation, and value.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Every product we offer is carefully crafted and tested to meet
            modern standards.
          </p>
        </div>

        <div className="h-72 rounded-3xl overflow-hidden ">
          <img className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_vector-1717082060641-5d649cb834aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {[
          {
            title: "Innovation",
            desc: "We constantly evolve with technology.",
          },
          {
            title: "Quality",
            desc: "Only premium products reach our customers.",
          },
          { title: "Trust", desc: "Built through transparency and service." },
        ].map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl p-8 bg-white shadow-lg hover:bg-emerald-500 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-emerald-100">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      
      <section className="mt-32 pb-24 text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Ready to explore our products?
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-8 px-10 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-full hover:bg-emerald-600 active:scale-95 transition shadow-lg"
        >
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;
