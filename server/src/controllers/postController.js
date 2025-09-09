import { Post } from "../models/Post.js";
import { addPost, getAllPosts, getPostById, updatePost, deletePost } from "../dal/postsDAL.js";
import { catchAsync } from "../middlewares/errorHandler.js";
/**
 * Controller: Add a new post
 * @route POST /posts
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export const addPostController = catchAsync(async (req, res) => {
  // TODO: Add validations
  const post = new Post(req.body);
  const created = await addPost(post);

  res.status(201).json({ success: true, data: created, message: "Post added successfully" });
});

/**
 * Controller: Get all posts
 * @route GET /posts
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export const getAllPostsController = catchAsync(async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json({ success: true, data: posts });
});

/**
 * Controller: Get post By id
 * @route GET /posts/:id
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export const getPostController = catchAsync(async (req, res) => {
  // TODO: Add validations
  const postId = req.params.id;
  const id = parseInt(postId);
  const post = await getPostById(id);
  res.status(200).json({ success: true, data: post });
});

/**
 * Controller: Update an existing post
 * @route PUT /posts/:id
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export const updatePostController = catchAsync(async (req, res) => {
  // TODO: Add validations
  const postId = req.params.id;
  const { imgSrc, description, likes, author, createdAt } = req.body || {};

  const id = parseInt(postId);
  const post = new Post({ id, imgSrc, description, likes, author, createdAt });
  const updated = await updatePost(id, post);
  res.status(201).json({ success: true, data: updated, message: "Post updated successfully" });
});

/**
 * Controller: Delete a post by id
 * @route DELETE /posts/:id
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export const deletePostController = catchAsync(async (req, res) => {
  // TODO: Add validations
  const postId = req.params.id;

  const id = parseInt(postId);
  const deleted = await deletePost(id);
  res.status(200).json({ success: true, data: deleted, message: "Post deleted successfully" });
});
