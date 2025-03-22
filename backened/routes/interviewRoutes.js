import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


router.post("/start", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const prompt = "Generate 5 interview questions for a software developer.";

    const result = await model.generateContent({ contents: [{ parts: [{ text: prompt }] }] });
    const response = result.response;
    
    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No questions received from AI");
    }

    const questions = response.candidates[0].content.parts[0].text.split("\n");

    res.json({ userId, questions });
  } catch (error) {
    console.error("Error starting interview:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/submit", async (req, res) => {
  try {
    const { userId, question, answer } = req.body;


    if (!userId || !question || !answer) {
      return res.status(400).json({ error: "User ID, question, and answer are required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

   
    const feedbackPrompt = `Evaluate the following interview answer and provide concise feedback (within 2-3 sentences). Keep it constructive and to the point.\n\nQuestion: ${question}\nAnswer: ${answer}\n\nGive a short response.`;

    const result = await model.generateContent({ contents: [{ parts: [{ text: feedbackPrompt }] }] });
    const response = result.response;

    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No feedback received from AI");
    }

    const feedback = response.candidates[0].content.parts[0].text;

 
    res.json({ success: true, feedback });

  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;

