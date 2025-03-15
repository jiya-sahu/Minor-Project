import { Link } from "react-router-dom";
import React from 'react'
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold">AI Mock Interview</Link>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register" className="bg-white text-blue-600 px-3 py-1 rounded">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;