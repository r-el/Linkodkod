/**
 * Authentication Service Unit Tests
 * Tests the core authentication functionality without database dependencies
 */
import { describe, expect, beforeEach, it, vi } from "vitest";
import bcrypt from "bcrypt";
import * as authService from "../../../src/services/authService.js";

// Mock dependencies
vi.mock("bcrypt");
vi.mock("jsonwebtoken");

describe("Authentication Service", () => {
  beforeEach(() => {
    // Set required environment variables for tests
    process.env.JWT_SECRET = "test-jwt-secret-key-for-testing-only";
    process.env.JWT_EXPIRES_IN = "1h";
  });

  describe("hashPassword", () => {
    it("should hash password successfully", async () => {
      // Arrange
      const password = "testpassword123";
      const hashedPassword = "$2b$10$hashedversion1234567890123456789012345678901234567890";
      bcrypt.hash.mockResolvedValue(hashedPassword);

      // Act
      const result = await authService.hashPassword(password);

      // Assert
      expect(bcrypt.hash).toHaveBeenCalledWith(password, 10);
      expect(result).toBe(hashedPassword);
    });

    it("should throw error for empty password", async () => {
      await expect(authService.hashPassword("")).rejects.toThrow("The password cannot be empty");
    });

    it("should throw error for non-string password", async () => {
      // Act & Assert
      await expect(authService.hashPassword(123)).rejects.toThrow("The password must be type of string");
    });

    it("should handle bcrypt errors", async () => {
      // Arrange
      bcrypt.hash.mockRejectedValue(new Error("Bcrypt error"));

      // Act & Assert
      await expect(authService.hashPassword("password")).rejects.toThrow(
        "Failed to hash password: Bcrypt error"
      );
    });
  });
});
