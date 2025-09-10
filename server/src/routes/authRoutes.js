/**
 * Authentication Routes
 * Defines all routes related to user authentication and authorization
 */
import express from "express";
import * as authController from "../controllers/userController";

const router = express.Router();

// User registration
router.post("/register", authController.register);

// User login
router.post("/login", authController.login);

export default router;
