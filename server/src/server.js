/**
 * Express Application Setup
 */
import express from "express";

// Create Express application
const app = express();

// Basic middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
import rootRoutes from "./routes/rootRoutes.js";

app.use("/", rootRoutes);

export default app;
