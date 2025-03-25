import React, { useState } from "react";
import axios from "axios";

<<<<<<< HEAD
const QuestionCard = ({ question, index, userId, updateResponses }) => {
  const [answer, setAnswer] = useState("");
=======
const QuestionCard = ({ question, index, userId }) => {
  const [answer, setAnswer] = useState(""); 
>>>>>>> 7e430656e00ae0fd5b5725b68995895d6b52d46b
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
<<<<<<< HEAD

      // Update responses in the parent component
      updateResponses(index, answer);
=======
>>>>>>> 7e430656e00ae0fd5b5725b68995895d6b52d46b
    } catch (error) {
      console.error("Error submitting answer:", error.response?.data || error.message);
    }
  };

  return (
<<<<<<< HEAD
    <div className="mb-6 p-4 shadow">
=======
    <div className="mb-6 p-4  shadow">
>>>>>>> 7e430656e00ae0fd5b5725b68995895d6b52d46b
      <h4 className="text-lg font-semibold mb-2">{question}</h4>
      <input
        type="text"
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Type your answer..."
<<<<<<< HEAD
        className="w-full p-2"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
=======
        className="w-full p-2 "
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>>>>>>> 7e430656e00ae0fd5b5725b68995895d6b52d46b
        onClick={submitAnswer}
      >
        Submit
      </button>
      {feedback && <p className="mt-2 text-green-600 font-medium">Feedback: {feedback}</p>}
    </div>
  );
};
<<<<<<< HEAD

export default QuestionCard;
=======

export default QuestionCard;


>>>>>>> 7e430656e00ae0fd5b5725b68995895d6b52d46b
