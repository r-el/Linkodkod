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
import { validateBody, validateParams } from "../middlewares/validations.js";
import { createPostSchema, idParamsSchema } from "../schemas/postSchemas.js";

const router = express.Router();

// POST /posts
router.post("/", validateBody(createPostSchema), addPostController);

// GET /posts
router.get("/", getAllPostsController);

// GET /posts:id
router.get("/:id", validateParams(idParamsSchema), getPostController);

// PUT /posts/:id
router.put("/:id", validateParams(idParamsSchema), updatePostController);

// DELETE /posts/:id
router.delete("/:id", validateParams(idParamsSchema), deletePostController);

export default router;
