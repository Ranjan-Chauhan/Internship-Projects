// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "./Header";
// import Footer from "./Footer";

// const HomePage = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios
//       .get(
//         "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setCategories(response.data.categories);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-300">
//       <Header />

//       {/* Categories and Products */}
//       {categories.map((category, categoryIndex) => (
//         <div key={categoryIndex}>
//           <h2 className="text-2xl font-bold text-center mt-10 mb-4">
//             {category.category_name}
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 px-12 w-auto justify-center items-center h-auto">
//             {category.category_products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white shadow-md p-4 rounded-lg text-center h-[435px] my-au"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="h-60 mx-auto object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-lg font-bold">{product.title}</h3>
//                 <p className="text-gray-600">Price: ₹{product.price}</p>
//                 {product.compare_at_price && (
//                   <p className="text-red-500 line-through">
//                     ₹{product.compare_at_price}
//                   </p>
//                 )}
//                 <p className="text-gray-600">Vendor: {product.vendor}</p>
//                 {product.badge_text && (
//                   <span className="inline-block bg-yellow-300 px-2 py-1 rounded-lg text-sm text-gray-800">
//                     {product.badge_text}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

/*...............................................................................*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

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

  // Search filtering function
  const filterProducts = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-300">
      <Navbar onSearch={setSearchQuery} />
      <Header />
      {/* Categories and Products */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-bold text-center mt-10 mb-4">
            {category.category_name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 px-12 w-auto justify-center items-center h-auto">
            {/* Filter products based on the search query */}
            {filterProducts(category.category_products).map((product) => (
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
