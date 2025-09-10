/**
 * Users Data Access Layer (DAL)
 * Handles reading and writing userss using json-file-crud
 */
import JsonFileCRUD from "json-file-crud"; // An npm package that I wrote in the past
import { databaseConfig } from "../config/database.js";

const db = new JsonFileCRUD(databaseConfig.usersFilePath, databaseConfig.options);

/**
 * Add a new user to the database (async/Promise)
 * @param {Object} user - The user object to add (should have user fields)
 * @returns {Promise<Object>} The created user (with id)
 */
export function addUser(user) {
  return new Promise((resolve, reject) => {
    db.create(user, (err, created) => {
      if (err) return reject(err);
      resolve(created);
    });
  });
}

/**
 * Get all users from the database (async/Promise)
 * @returns {Promise<Array>} Array of users
 */
export function getAllUsers() {
  return new Promise((resolve, reject) => {
    db.readAll((err, items) => {
      if (err) return reject(err);
      resolve(items);
    });
  });
}

/**
 * Get a user by id (async/Promise)
 * @param {number} id - The id of the user to retrieve
 * @returns {Promise<Object>} The retrieved user
 */
export function getUserById(id) {
  return new Promise((resolve, reject) => {
    db.findById(id, (err, item) => {
      if (err) return reject(err);
      resolve(item);
    });
  });
}

/**
 * Update an existing user by id (async/Promise)
 * @param {number} id - The id of the user to update
 * @param {Object} updatedFields - The fields to update (all fields)
 * @returns {Promise<Object>} The updated user
 */
export function updateUser(id, updatedFields) {
  return new Promise((resolve, reject) => {
    db.update(id, updatedFields, (err, updated) => {
      if (err) return reject(err);
      resolve(updated);
    });
  });
}

/**
 * Delete a user by id (async/Promise)
 * @param {number} id - The id of the user to delete
 * @returns {Promise<Object>} The deleted user (or info)
 */
export function deleteUser(id) {
  return new Promise((resolve, reject) => {
    db.delete(id, (err, deleted) => {
      if (err) return reject(err);
      resolve(deleted);
    });
  });
}
