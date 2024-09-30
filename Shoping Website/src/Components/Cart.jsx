// import React, { useContext, useState } from "react";
// import { CartContext } from "../Context/CartContext";

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext); // Get cart items and removeFromCart function from context
//   const [quantity, setQuantity] = useState();

//   // Calculate Total MRP as sum of both price and compare_at_price (if it exists)
//   const totalMRP = cartItems.reduce((total, item) => {
//     return Number(total) + Number(item.compare_at_price || item.price);
//   }, 0);

//   // Calculate discount as the sum of the difference between compare_at_price and price
//   const discount = cartItems.reduce((totalDiscount, item) => {
//     if (item.compare_at_price) {
//       return totalDiscount + (item.compare_at_price - item.price);
//     }
//     return totalDiscount;
//   }, 0);

//   // Calculate the total amount as the sum of the actual prices
//   const totalAmount = cartItems.reduce(
//     (total, item) => Number(total) + Number(item.price),
//     0
//   );

//   const shippingFee = "FREE";

//   return (
//     <div className="flex justify-center items-start p-6 space-x-10">
//       {/* Cart Items */}
//       <div className="bg-white rounded-lg shadow-md flex flex-col p-4 my-12 w-3/5">
//         {cartItems.length === 0 ? (
//           <p className="flex items-center justify-center">
//             No items in the cart.
//           </p>
//         ) : (
//           <div>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between mb-4 shadow-md p-4 rounded "
//               >
//                 <div className="flex-shrink-0">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-32 h-40 object-cover rounded-md"
//                   />
//                 </div>
//                 <div className="ml-4 my-1.5 space-y-1 flex-grow">
//                   <h3 className="font-semibold">{item.title}</h3>
//                   <div className="flex space-x-4 mt-2">
//                     <select className="border px-2 py-1 rounded-md">
//                       <option value="38">Size: 38</option>
//                       <option value="40">Size: 40</option>
//                       <option value="42">Size: 42</option>
//                       <option value="44">Size: 44</option>
//                     </select>
//                     <select
//                       value={quantity}
//                       onChange={(e) => setQuantity(e.target.value)}
//                       className="border px-2 py-1 rounded-md"
//                     >
//                       <option value="1">Qty: 1</option>
//                       <option value="2">Qty: 2</option>
//                       <option value="3">Qty: 3</option>
//                       <option value="4">Qty: 4</option>
//                       <option value="5">Qty: 5</option>
//                     </select>
//                   </div>
//                   <p className="font-semibold text-base text-black">
//                     ₹{item.price}
//                   </p>
//                   {item.compare_at_price && (
//                     <p className="text-red-500 line-through">
//                       ₹{item.compare_at_price}
//                     </p>
//                   )}
//                   <p className="font-semibold text-base text-pink-600">
//                     <span className="text-black font-semibold text-sm">
//                       Vendor:
//                     </span>{" "}
//                     {item.vendor}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item)}
//                   className="text-sm rounded bg-pink-600  hover:bg-pink-700  py-1 px-4 text-white  my-auto"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Price Details */}
//       <div className="bg-white rounded-lg shadow-md p-6 my-12 w-64">
//         <h2 className="font-semibold text-lg mb-4">
//           PRICE DETAILS ({cartItems.length} Items)
//         </h2>
//         <div className="flex justify-between py-1">
//           <p>Total MRP</p>
//           <p>₹{totalMRP}</p>
//         </div>
//         <div className="flex justify-between py-1 text-green-600">
//           <p>Discount on MRP</p>
//           <p>-₹{discount}</p>
//         </div>
//         <div className="flex justify-between py-1">
//           <p>Shipping Fee</p>
//           <p className="text-green-600">{shippingFee}</p>
//         </div>
//         <hr className="my-2" />
//         <div className="flex justify-between font-semibold text-lg">
//           <p>Total Amount</p>
//           <p>₹{totalAmount}</p>
//         </div>
//         <button className="mt-4 bg-pink-600 text-white w-full py-1.5 rounded-md">
//           PLACE ORDER
//         </button>
//       </div>
//     </div>
//   );
// };

/*...............................................................*/

// export default Cart;
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, quantities, updateQuantity } =
    useContext(CartContext); // Get quantities and updateQuantity from context

  // Calculate Total MRP based on quantities
  const totalMRP = cartItems.reduce((total, item) => {
    return total + (item.compare_at_price || item.price) * quantities[item.id];
  }, 0);

  // Calculate discount as the sum of the difference between compare_at_price and price
  const discount = cartItems.reduce((totalDiscount, item) => {
    if (item.compare_at_price) {
      return (
        totalDiscount +
        (item.compare_at_price - item.price) * quantities[item.id]
      );
    }
    return totalDiscount;
  }, 0);

  // Calculate the total amount based on actual prices and quantities
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  const shippingFee = "FREE";

  return (
    <div className="flex justify-center items-start p-6 space-x-10">
      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow-md flex flex-col p-4 my-12 w-3/5">
        {cartItems.length === 0 ? (
          <p className="flex items-center justify-center">
            No items in the cart.
          </p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between mb-4 shadow-md p-4 rounded "
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-40 object-cover rounded-md"
                  />
                </div>
                <div className="ml-4 my-1.5 space-y-1 flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex space-x-4 mt-2">
                    <select className="border px-2 py-1 rounded-md">
                      <option value="38">Size: 38</option>
                      <option value="40">Size: 40</option>
                      <option value="42">Size: 42</option>
                      <option value="44">Size: 44</option>
                    </select>
                    <select
                      value={quantities[item.id]} // Use quantity from context
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="border px-2 py-1 rounded-md"
                    >
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                      <option value="4">Qty: 4</option>
                      <option value="5">Qty: 5</option>
                    </select>
                  </div>
                  <p className="font-semibold text-base text-black">
                    ₹{item.price}
                  </p>
                  {item.compare_at_price && (
                    <p className="text-red-500 line-through">
                      ₹{item.compare_at_price}
                    </p>
                  )}
                  <p className="font-semibold text-base text-pink-600">
                    <span className="text-black font-semibold text-sm">
                      Vendor:
                    </span>{" "}
                    {item.vendor}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-sm rounded bg-pink-600 hover:bg-pink-700 py-1 px-4 text-white my-auto"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Details */}
      <div className="bg-white rounded-lg shadow-md p-6 my-12 w-64">
        <h2 className="font-semibold text-lg mb-4">
          PRICE DETAILS ({cartItems.length} Items)
        </h2>
        <div className="flex justify-between py-1">
          <p>Total MRP</p>
          <p>₹{totalMRP}</p>
        </div>
        <div className="flex justify-between py-1 text-green-600">
          <p>Discount on MRP</p>
          <p>-₹{discount}</p>
        </div>
        <div className="flex justify-between py-1">
          <p>Shipping Fee</p>
          <p className="text-green-600">{shippingFee}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
        <button className="mt-4 bg-pink-600 text-white w-full py-1.5 rounded-md">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Cart;
