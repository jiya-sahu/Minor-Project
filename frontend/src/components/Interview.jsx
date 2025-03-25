import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./Questioncard.jsx"; 

const Interview = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({}); // Store user responses
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const startInterview = async () => {
      try {
        const response = await axios.post("http://localhost:18000/api/interview/start", { userId });
        setQuestions(response.data.questions || []);
      } catch (error) {
        console.error("Error starting interview:", error.response?.data || error.message);
      }
    };
    startInterview();
  }, []);

  const navigate = useNavigate();

  const handleFinishInterview = () => {
    navigate("/feedback", { state: { userId, responses } });
  };

  const updateResponses = (index, answer) => {
    setResponses((prev) => ({ ...prev, [index]: answer }));
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="font-semibold text-center text-3xl mb-4">Mock Interview</h2>
        {questions.length === 0 ? (
          <p className="text-center">Loading questions...</p>
        ) : (
          questions.map((question, index) => (
            question && (
              <div key={index}>
                <QuestionCard 
                  question={question} 
                  index={index} 
                  userId={userId} 
                  updateResponses={updateResponses} // Pass function to update responses
                />
              </div>
            )
          ))
        )}
      </div>
      <div className="flex items-center justify-center">
        <button onClick={handleFinishInterview} className="bg-green-600 text-white px-6 py-3 rounded-lg mt-6">
          Get Final Feedback
        </button>
      </div>
    </>
  );
};

export default Interview;
