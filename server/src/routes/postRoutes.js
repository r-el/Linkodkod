/**
 * Post Routes
 * Handles all /posts API endpoints
 */
import express from "express";
import {
  addPostController,
  getAllPostsController,
  getPostController,
  updatePostController,
  deletePostController,
} from "../controllers/postController.js";

const router = express.Router();

// POST /posts
router.post("/", addPostController);

// GET /posts
router.get("/", getAllPostsController);

// GET /posts:id
router.get("/:id", getPostController);

// PUT /posts/:id
router.put("/:id", updatePostController);

// DELETE /posts/:id
router.delete("/:id", deletePostController);

export default router;
