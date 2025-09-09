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
import { validateBody } from "../middlewares/validations.js";
import { createPostSchema } from "../schemas/postSchemas.js";

const router = express.Router();

// POST /posts
router.post("/", validateBody(createPostSchema), addPostController);

// GET /posts
router.get("/", getAllPostsController);

// GET /posts:id
router.get("/:id", getPostController);

// PUT /posts/:id
router.put("/:id", updatePostController);

// DELETE /posts/:id
router.delete("/:id", deletePostController);

export default router;
