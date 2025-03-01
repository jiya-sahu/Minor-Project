import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
   
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold">Ace Your Next Interview with AI!</h1>
        <p className="mt-4 text-lg">Get real-time feedback and improve your skills.</p>
        <Link to="/dashboard" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded">
          Start Practicing
        </Link>
      </div>
   
  );
};

export default Home;
