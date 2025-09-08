/**
 * Express Application Setup
 */
import express from "express";
import cors from "cors";
import { corsConfig } from "./config/cors.js";

// Get current directory (ES modules equivalent of __dirname)
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express application
const app = express();

// CORS configuration
app.use(cors(corsConfig));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
import rootRoutes from "./routes/rootRoutes.js";
import postsRouter from "./routes/postRoutes.js";

app.use("/", rootRoutes);
app.use("/posts", postsRouter);

export default app;
