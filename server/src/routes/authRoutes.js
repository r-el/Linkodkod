/**
 * Authentication Routes
 * Defines all routes related to user authentication and authorization
 */
import express from "express";
import { register, login } from "../controllers/userController.js";

const router = express.Router();

// User registration
router.post("/register", register);

// User login
router.post("/login", login);

export default router;
