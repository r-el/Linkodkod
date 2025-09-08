/**
 * Posts Data Access Layer (DAL)
 * Handles reading and writing posts using json-file-crud
 */
import JsonFileCRUD from "json-file-crud"; // An npm package that I wrote in the past
import { databaseConfig } from "../config/database.js";

const db = new JsonFileCRUD(databaseConfig.postsFilePath, databaseConfig.options);

/**
 * Add a new post to the database (async/Promise)
 * @param {Object} post - The post object to add (should have post fields)
 * @returns {Promise<Object>} The created post (with id)
 */
export function addPost(post) {
  return new Promise((resolve, reject) => {
    db.create(post, (err, created) => {
      if (err) return reject(err);
      resolve(created);
    });
  });
}

/**
 * Get all posts from the database (async/Promise)
 * @returns {Promise<Array>} Array of posts
 */
export function getAllPosts() {
  return new Promise((resolve, reject) => {
    db.readAll((err, items) => {
      if (err) return reject(err);
      resolve(items);
    });
  });
}

/**
 * Get a post by id (async/Promise)
 * @param {number} id - The id of the post to retrieve
 * @returns {Promise<Object>} The retrieved post
 */
export function getPostById(id) {
  return new Promise((resolve, reject) => {
    db.findById(id, (err, item) => {
      if (err) return reject(err);
      resolve(item);
    });
  });
}

/**
 * Update an existing post by id (async/Promise)
 * @param {number} id - The id of the post to update
 * @param {Object} updatedFields - The fields to update (all fields)
 * @returns {Promise<Object>} The updated post
 */
export function updatePost(id, updatedFields) {
  return new Promise((resolve, reject) => {
    db.update(id, updatedFields, (err, updated) => {
      if (err) return reject(err);
      resolve(updated);
    });
  });
}

/**
 * Delete a post by id (async/Promise)
 * @param {number} id - The id of the post to delete
 * @returns {Promise<Object>} The deleted post (or info)
 */
export function deletePost(id) {
  return new Promise((resolve, reject) => {
    db.delete(id, (err, deleted) => {
      if (err) return reject(err);
      resolve(deleted);
    });
  });
}
