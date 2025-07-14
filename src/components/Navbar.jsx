import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          BLOGIFY
        </Link>

        <div className="flex gap-3">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/service" className="hover:underline">Service</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
