import { useState } from "react";

const PostProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);
    data.append("category", formData.category);

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert("Product successfully added!");
      setFormData({
        title: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col mt-12 md:px-48">
      <div className="text-center ">
        <h1 className="text-2xl text-black font-bold">
          Welcome to Ecommerce Website
        </h1>
      </div>

      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row flex-wrap gap-6">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-gray-700 font-medium">
              Title:
            </label>
            <input
              required
              className="border-2 border-gray-300 rounded-lg p-2 mt-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              id="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700 font-medium">
              Description:
            </label>
            <textarea
              required
              className="border-2 border-gray-300 rounded-lg p-2 mt-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700 font-medium">
              Price:
            </label>
            <input
              required
              className="border-2 border-gray-300 rounded-lg p-2 mt-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter product price"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-gray-700 font-medium">
              Category:
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-lg p-2 mt-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              <option value="jewelery">Jewelry</option>
              <option value="electronic">Electronics</option>
              <option value="women's clothing">Women wear</option>
              <option value="men's clothing">Men wear</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-gray-700 font-medium">
              Choose an Image:
            </label>
            <input
              className="mt-1"
              id="image"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default PostProduct;
