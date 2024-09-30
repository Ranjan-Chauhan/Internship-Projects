// import React, { createContext, useState } from "react";

// // Create the Cart Context
// export const CartContext = createContext();

// // Cart Provider to wrap the app and provide cart state to all components
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add item to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // CartContext.js
// import { createContext, useState } from "react";

// // Create CartContext
// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add item to cart
//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   // Function to remove item from cart
//   const removeFromCart = (itemToRemove) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== itemToRemove.id)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

// Create CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Function to add an item to the cart
  const addToCart = (item) => {
    if (!cartItems.find((cartItem) => cartItem.id === item.id)) {
      setCartItems((prevItems) => [...prevItems, item]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: 1, // Set default quantity as 1 when adding new item
      }));
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[item.id];
      return newQuantities;
    });
  };

  // Function to update the quantity for a cart item
  const updateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantities,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
