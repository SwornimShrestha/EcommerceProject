import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/ProductCard/ProductCard";
import StatCard from "../../components/StatCard/StatCard";
import Category from "../../components/Category/Category";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PRODUCTS}`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Hero />
      <Category />
      <div className="flex flex-col text-center w-full mt-20 bg-[#f9f9f9]">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Most Popular Products
        </h1>
        {products.length > 0 ? (
          <Products products={products} />
        ) : (
          <p>Loading....</p>
        )}
      </div>

      <StatCard />
    </div>
  );
};

export default Home;
