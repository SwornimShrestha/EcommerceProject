import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_CATEGORY}`);
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <div>
      <FeatureCard cards={category} />
    </div>
  );
};

export default Category;
