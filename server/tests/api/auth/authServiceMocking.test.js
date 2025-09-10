/**
 * Authentication Service Unit Tests
 * Tests the core authentication functionality without database dependencies
 */
import { describe, expect, beforeEach, it, vi } from "vitest";
import bcrypt from "bcrypt";
import * as authService from "../../../src/services/authService.js";
import authConfig from "../../../src/config/auth.js";

// Mock dependencies
vi.mock("bcrypt");

describe("Authentication Service [Mock]", () => {
  beforeEach(() => {
    // Set required environment variables for tests
    process.env.JWT_SECRET = "test-jwt-secret-key-for-testing-only";
    process.env.JWT_EXPIRES_IN = "1h";
    process.env.BCRYPT_SALT_ROUNDS = 10;
  });

  describe("hashPassword", () => {
    it("should hash password successfully [mock]", async () => {
      // Arrange
      const password = "testpassword123";
      const hashedPassword = "$2b$10$hashedversion1234567890123456789012345678901234567890";
      bcrypt.hash.mockResolvedValue(hashedPassword);

      // Act
      const result = await authService.hashPassword(password);

      // Assert
      expect(bcrypt.hash).toHaveBeenCalledWith(password, authConfig.bcryptSaltRounds);
      expect(result).toBe(hashedPassword);
    });

    it("should handle bcrypt errors", async () => {
      // Arrange
      bcrypt.hash.mockRejectedValue(new Error("Testing Bcrypt error"));

      // Act & Assert
      await expect(authService.hashPassword("password")).rejects.toThrow(
        "Failed to hash password: Testing Bcrypt error"
      );
    });
  });
});
