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
export async function getAllPostsController(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, err: "Failed to fetch posts: " + err.message });
  }
}

/**
 * Controller: Get post By id
 * @route GET /posts/:id
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export async function getPostController(req, res) {
  // TODO: Add validations
  const postId = req.params.id;
  try {
    const id = parseInt(postId);
    const post = await getPostById(id);
    res.status(200).json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ success: false, err: "Failed to fetch post: " + err.message });
  }
}

/**
 * Controller: Update an existing post
 * @route PUT /posts/:id
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export async function updatePostController(req, res) {
  // TODO: Add validations
  const postId = req.params.id;
  const { imgSrc, description, likes, author, createdAt } = req.body || {};

  try {
    const id = parseInt(postId);
    const post = new Post({ id, imgSrc, description, likes, author, createdAt });
    const updated = await updatePost(id, post);
    res.status(201).json({ success: true, data: updated, message: "Post updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, err: "Failed to update post. " + err.message });
  }
}

/**
 * Controller: Delete a post by id
 * @route DELETE /posts/:id
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export async function deletePostController(req, res) {
  // TODO: Add validations
  const postId = req.params.id;

  try {
    const id = parseInt(postId);
    const deleted = await deletePost(id);
    res.status(200).json({ success: true, data: deleted, message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, err: "Failed to delete post. " + err.message });
  }
}
