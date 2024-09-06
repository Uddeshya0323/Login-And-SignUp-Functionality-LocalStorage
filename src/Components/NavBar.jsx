import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-5">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link
            to="/profile"
            className="hover:text-blue-400 transition duration-300"
          >
            Profile
          </Link>
        </div>
        <div className="space-x-5">
          <Link
            to="/login"
            className="hover:text-blue-400 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Sign-Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
