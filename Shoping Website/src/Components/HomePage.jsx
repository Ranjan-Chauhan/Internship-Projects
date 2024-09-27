import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, cartItems } = useContext(CartContext); // Get addToCart and cartItems from context
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState({}); // Track which products are added to the cart

  useEffect(() => {
    axios
      .get(
        "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
      )
      .then((response) => {
        console.log(response.data);
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Mark products already in the cart as added
    const cartProductIds = cartItems.map((item) => item.id);
    const initialAddedToCart = {};
    cartProductIds.forEach((id) => {
      initialAddedToCart[id] = true;
    });
    setAddedToCart(initialAddedToCart);
  }, [cartItems]);

  const filterProducts = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      addToCart(product); // Add the product to the cart if not already present
      setAddedToCart((prevState) => ({
        ...prevState,
        [product.id]: true, // Mark the product as added to cart
      }));
    } else {
      alert("This product is already in your cart.");
    }
  };

  return (
    <div className="bg-gray-300">
      <Navbar onSearch={setSearchQuery} />
      <Header />
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-bold text-center mt-10 mb-4">
            {category.category_name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 px-12 w-auto justify-center items-center h-auto">
            {filterProducts(category.category_products).map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md p-4 rounded-md text-center h-[440px] my-auto"
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
                <p className="text-gray-600 pb-1">Vendor: {product.vendor}</p>
                {product.badge_text && (
                  <span className="inline-block bg-yellow-300 px-2 py-1 rounded-lg text-sm text-gray-800">
                    {product.badge_text}
                  </span>
                )}

                {/* Conditional Button Rendering */}
                {addedToCart[product.id] ? (
                  // If product is added, show Go to Cart button
                  <button
                    onClick={() => navigate("/cart")}
                    className="ml-3 border bg-blue-300 hover:bg-blue-400 rounded-md px-2 py-1 text-sm"
                  >
                    Go to Cart
                  </button>
                ) : (
                  // If not added, show Add to Bag button
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="ml-3 border bg-green-300 hover:bg-green-400 rounded-md px-2 py-1 text-sm"
                  >
                    Add to Bag
                  </button>
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
