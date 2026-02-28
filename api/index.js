// api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import connectDB from "./backend/config/database.js";

// Import routes
import authRoutes from "./backend/routes/authRoutes.js";
import emergencyRoutes from "./backend/routes/emergencyRoutes.js";
import chatRoutes from "./backend/routes/chat.js";
import communityRoutes from "./backend/routes/community.js";
import panicRoutes from "./backend/routes/panic.js";

dotenv.config();

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors()); // You can restrict origins if needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug: log incoming requests in dev
if (process.env.NODE_ENV !== "production") {
  app.use("/api", (req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
  });
}

// API Routes
app.use("/api", authRoutes);
app.use("/api/emergency", emergencyRoutes);
app.use("/api", chatRoutes);
app.use("/api", communityRoutes);
app.use("/api/community", communityRoutes); // backward compatibility
app.use("/api", panicRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : "Something went wrong",
  });
});

// Export as serverless function
export default serverless(app);