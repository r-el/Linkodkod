/**
 * Authentication Configuration
 * Configuration settings for JWT and authentication
 */

import { config } from "dotenv";

// Load environment variables from .env file
config();

/**
 * Authentication configuration
 */

// Try convet BCRYPT_SALT_ROUNDS env variable to number
let BCRYPT_SALT_ROUNDS_INT;
try {
  BCRYPT_SALT_ROUNDS_INT = parseInt(process.env.BCRYPT_SALT_ROUNDS);
} catch {}

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  bcryptSaltRounds: BCRYPT_SALT_ROUNDS_INT || 10,
};

export default authConfig;
