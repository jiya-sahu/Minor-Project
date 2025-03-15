import React, { useState, useEffect } from "react";
import axios from "axios";

const Interview = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

  useEffect(() => {
    const startInterview = async () => {
      try {
        const response = await axios.post("http://localhost:18000/api/interview/start", { userId });
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error starting interview:", error.response?.data || error.message);
      }
    };
    startInterview();
  }, []);

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const submitAnswer = async (index) => {
    try {
      const response = await axios.post("http://localhost:18000/api/interview/submit", {
        userId,
        question: questions[index],
        answer: answers[index],
      });
      setFeedback({ ...feedback, [index]: response.data.feedback });
    } catch (error) {
      console.error("Error submitting answer:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-center">Mock Interview</h2>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        questions.map((question, index) => (
          <div key={index}>
            <h4>{question}</h4>
            <input
              type="text"
              value={answers[index] || ""}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder="Type your answer..."
            className="w-3xl mt-2"/>
            <button  className = "btn btn-primary mt-4 bg-blue-600 text-white px-6 py-3 rounded"onClick={() => submitAnswer(index)}>Submit</button>
            {feedback[index] && <p>Feedback: {feedback[index]}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default Interview;
