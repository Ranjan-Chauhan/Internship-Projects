// import React from "react";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import SearchIcon from "@mui/icons-material/Search";

// const Navbar = () => {
//   return (
//     <header className="bg-white shadow-md py-2">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-6 px-4">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_PFMIWuIauPEhoMr2cFiYMRATZULlMN3ig&s"
//             alt="Logo"
//             className="h-12 rounded-full"
//           />
//           {/* Nav Links */}
//           <nav className="flex space-x-6 text-gray-800 font-medium">
//             <a href="#" className="hover:text-pink-600">
//               MEN
//             </a>
//             <a href="#" className="hover:text-pink-600">
//               WOMEN
//             </a>
//             <a href="#" className="hover:text-pink-600">
//               KIDS
//             </a>
//             {/* <a href="#" className="hover:text-pink-600">
//               HOME & LIVING
//             </a> */}
//             {/* <a href="#" className="hover:text-pink-600">
//               BEAUTY
//             </a> */}
//             {/* <a href="#" className="relative hover:text-pink-600 studio-link">
//               STUDIO <span className="text-xs text-pink-500 ml-1">NEW</span>
//             </a> */}
//           </nav>
//         </div>

//         <div className="flex items-center space-x-6 mr-6">
//           {/* Search Bar */}
//           <div className="flex items-center border rounded-md bg-gray-100 px-3 py-1.5 w-auto">
//             <SearchIcon />
//             <input
//               type="text"
//               placeholder="Search for products, brands and more"
//               className="bg-transparent outline-none text-sm placeholder-gray-500 w-60 px-2"
//             />
//           </div>

//           {/* Profile Icons */}
//           <div className="flex items-center space-x-4 font-semibold text-sm px-1">
//             <div className="text-gray-700 hover:text-pink-600">
//               <PersonOutlineIcon className="" />
//               Profile
//             </div>
//             <div className="text-gray-700 hover:text-pink-600">
//               <FavoriteBorderIcon className="" />
//               Wishlist
//             </div>
//             <div className="text-gray-700 hover:text-pink-600">
//               <LocalMallIcon className="" />
//               Bag
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

/*...............................................................................*/
import React from "react";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ onSearch, onCategorySelect }) => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-6 px-4">
          <Link to="/" onClick={() => onCategorySelect(null)}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_PFMIWuIauPEhoMr2cFiYMRATZULlMN3ig&s"
              alt="Logo"
              className="h-14 rounded-full"
            />
          </Link>
          {/* Nav Links */}
          <nav className="flex space-x-6 text-gray-800 font-medium">
            <Link
              to="/"
              className="hover:text-pink-600"
              onClick={() => onCategorySelect("MEN")}
            >
              MEN
            </Link>
            <Link
              to="/"
              className="hover:text-pink-600"
              onClick={() => onCategorySelect("WOMEN")}
            >
              WOMEN
            </Link>
            <Link
              to="/"
              className="hover:text-pink-600"
              onClick={() => onCategorySelect("KIDS")}
            >
              KIDS
            </Link>
            <Link
              to=""
              className="hover:text-pink-600"
              //   onClick={() => onCategorySelect("KIDS")}
            >
              HOME & LIVING
            </Link>
            <Link
              to=""
              className="hover:text-pink-600"
              //   onClick={() => onCategorySelect("KIDS")}
            >
              BEAUTY
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6 mr-6">
          {/* Search Bar */}
          <div className="flex items-center border rounded-md bg-gray-100 px-3 py-1.5 w-auto">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="bg-transparent outline-none text-sm placeholder-gray-500 w-60 px-2"
              onChange={(e) => onSearch(e.target.value)} // Handle search input
            />
          </div>

          {/* Profile Icons */}
          <div className="flex items-center space-x-4 font-semibold text-sm px-1">
            <div className="text-gray-700 hover:text-pink-600">
              <PersonOutlineIcon className="mx-1" />
              Profile
            </div>
            <div className="text-gray-700 hover:text-pink-600">
              <FavoriteBorderIcon className="mx-1" />
              Wishlist
            </div>
            <div className="text-gray-700 hover:text-pink-600">
              <LocalMallIcon className="mx-1" />
              Bag
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
