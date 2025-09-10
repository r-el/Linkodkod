/**
 * Database Configuration
 * Configuration settings for the posts database
 */

import path from "path";
import { fileURLToPath } from "url";

// Get current directory (ES modules equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Database configuration
 */
export const databaseConfig = {
  // Path to the JSON files
  postsFilePath: path.join(__dirname, "../../data/posts.json"),
  usersFilePath: path.join(__dirname, "../../data/users.json"),

  // json-file-crud options
  options: {
    idField: "id",
    uniqueFields: [],
    autoId: true,
  },
};
