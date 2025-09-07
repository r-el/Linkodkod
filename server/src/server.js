/**
 * Express Application Setup
 */
import express from "express";

// Create Express application
const app = express();

// Basic middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
