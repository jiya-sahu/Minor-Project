import express from "express";
import dotenv from "dotenv";
import connectDB from "./config.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
const PORT = process.env.PORT||10000;

app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/interview/feedback",interviewRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));