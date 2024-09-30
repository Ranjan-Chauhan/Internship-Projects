import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { CartContext } from "../Context/CartContext";

const Navbar = ({ onSearch, onCategorySelect }) => {
  const { cartItems } = useContext(CartContext);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    setCounter(cartItems.length);
  }, [cartItems]);

  return (
    <header className="bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-10 px-4">
          <Link to="/" onClick={() => onCategorySelect(null)}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_PFMIWuIauPEhoMr2cFiYMRATZULlMN3ig&s"
              alt="Logo"
              className="h-14 rounded-full"
            />
          </Link>
          {/* Nav Links */}
          <nav className="flex space-x-10 text-gray-800 font-medium">
            <Link
              to="/"
              className="hover:text-pink-600"
              onClick={() => onCategorySelect(null)}
            >
              HOME
            </Link>
            <Link
              to=""
              className="hover:text-pink-600"
              onClick={() => onCategorySelect("MEN")}
            >
              MEN
            </Link>
            <Link
              to=""
              className="hover:text-pink-600"
              onClick={() => onCategorySelect("WOMEN")}
            >
              WOMEN
            </Link>
            <Link
              to=""
              className="hover:text-pink-600"
              onClick={() => onCategorySelect("KIDS")}
            >
              KIDS
            </Link>
            {/* <Link
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
            </Link> */}
          </nav>
        </div>

        <div className="flex items-center space-x-10 mr-6">
          {/* Search Bar */}
          <div className="flex justify-center items-center border rounded-md bg-gray-100 px-3 py-1.5 w-96">
            <SearchIcon className="flex text-gray-500 " />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="bg-transparent outline-none text-sm placeholder-gray-500 w-96 px-4"
              onChange={(e) => onSearch(e.target.value)} // Handle search input
            />
          </div>

          {/* Profile Icons */}
          <div className="flex items-center space-x-10 font-semibold text-xs px-1">
            <div className="relative text-gray-800 hover:text-pink-600">
              <div>
                <PersonOutlineIcon className="mx-1.5" />
              </div>
              Profile
            </div>
            <div className="relative text-gray-800 hover:text-pink-600">
              <div>
                <FavoriteBorderIcon className="mx-2 text-sm" />
              </div>
              Wishlist
            </div>

            <Link
              to="/Cart"
              className="relative text-gray-800 hover:text-pink-600 "
            >
              <div>
                <LocalMallOutlinedIcon />
                {counter > 0 && (
                  <span className="absolute -top-2 -right-7 bg-pink-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center mx-4">
                    {counter}
                  </span>
                )}
              </div>
              Bag
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
