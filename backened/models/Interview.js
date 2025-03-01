import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  questions: [{ question: String, answer: String, feedback: String }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Interview", InterviewSchema);
