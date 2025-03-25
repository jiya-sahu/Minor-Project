import React from "react";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Mock Interview Feedback</h2>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Overall Feedback</h3>
        <p className="text-gray-700">
          Great effort! Your responses were well-structured and demonstrated a good understanding of the topics.  
          Here are some general improvement tips:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Ensure your answers are concise and to the point.</li>
          <li>Provide specific examples to support your responses.</li>
          <li>Maintain a confident and clear tone while answering.</li>
          <li>Improve technical explanations with deeper insights.</li>
          <li>Practice time management to answer within given limits.</li>
        </ul>
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Feedback;
