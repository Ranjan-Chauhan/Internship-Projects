import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
      )
      .then((response) => {
        console.log(response.data);
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-300">
      <Header />
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 bg-slate-700 p-3">
        <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 text-sm font-semibold">
          Men
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 text-sm font-semibold">
          Women
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 text-sm font-semibold">
          Kids
        </button>

        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 rounded border border-gray-300 focus:outline-none"
        />
      </div>

      {/* Categories and Products */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-bold text-center mt-10 mb-4">
            {category.category_name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 px-12 w-auto justify-center items-center h-auto">
            {category.category_products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md p-4 rounded-lg text-center h-[435px] my-au"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-60 mx-auto object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">Price: ₹{product.price}</p>
                {product.compare_at_price && (
                  <p className="text-red-500 line-through">
                    ₹{product.compare_at_price}
                  </p>
                )}
                <p className="text-gray-600">Vendor: {product.vendor}</p>
                {product.badge_text && (
                  <span className="inline-block bg-yellow-300 px-2 py-1 rounded-lg text-sm text-gray-800">
                    {product.badge_text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default HomePage;
