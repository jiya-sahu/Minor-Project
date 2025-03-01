import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white">
      <Link to="/" className="text-xl font-bold">AI Mock Interview</Link>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup" className="bg-white text-blue-600 px-3 py-1 rounded">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;