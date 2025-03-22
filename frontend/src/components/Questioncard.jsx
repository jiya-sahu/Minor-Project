import React, { useState } from "react";
import axios from "axios";

const QuestionCard = ({ question, index, userId }) => {
  const [answer, setAnswer] = useState(""); 
  const [feedback, setFeedback] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const submitAnswer = async () => {
    if (!answer.trim()) {
      alert("Please provide an answer before submitting.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:18000/api/interview/submit", {
        userId,
        question,
        answer,
      });

      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Error submitting answer:", error.response?.data || error.message);
    }
  };

  return (
    <div className="mb-6 p-4  shadow">
      <h4 className="text-lg font-semibold mb-2">{question}</h4>
      <input
        type="text"
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Type your answer..."
        className="w-full p-2 "
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={submitAnswer}
      >
        Submit
      </button>
      {feedback && <p className="mt-2 text-green-600 font-medium">Feedback: {feedback}</p>}
    </div>
  );
};

export default QuestionCard;


