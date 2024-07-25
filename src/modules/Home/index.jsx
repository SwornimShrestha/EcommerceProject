import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/ProductCard";
import Footer from "../../components/Footer";
import FeatureCard from "../../components/FeatureCard";
import StatCard from "../../components/StatCard";
import Category from "../../components/Category";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <p>Loading....</p>
      )}
      <StatCard />
    </div>
  );
};

export default Home;
