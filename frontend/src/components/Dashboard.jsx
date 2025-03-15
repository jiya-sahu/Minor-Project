import React from 'react'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 flex jutify-center items-center flex-col">
      <h2 className="text-2xl font-bold">Welcome to Your AI Mock Interviews</h2>
      <button className="btn btn-primary mt-4 bg-blue-600 text-white px-6 py-3 rounded" onClick={() => navigate("/interview")}>
        Start Interview
      </button>
    </div>
  );
};

export default Dashboard;
