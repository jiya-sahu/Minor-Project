import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "./QuestionCard"; // Import the new component

const Interview = () => {
  const [questions, setQuestions] = useState([]);
  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

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

  return (
    <div className="container mx-auto p-4">
      <h2 className="font-semibold text-center text-3xl mb-4">Mock Interview</h2>
      {questions.length === 0 ? (
        <p className="text-center">Loading questions...</p>
      ) : (
        questions.map((question, index) => (
          question && <div key={index} >
          <QuestionCard question={question} index={index} userId={userId} />
          </div>
          
        ))
      )}
    </div>
  );
};

export default Interview;
