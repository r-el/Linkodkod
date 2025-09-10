import { describe, expect, it, vi } from "vitest";
import * as authService from "../../../src/services/authService.js";
import bcrypt from "bcrypt";

describe("Authentication Service", () => {
  describe("hashPassword", () => {
    it("should throw error for empty password", async () => {
      await expect(authService.hashPassword("")).rejects.toThrow("Password cannot be empty");
    });

    it("should throw error for non-string password", async () => {
      // Act & Assert
      await expect(authService.hashPassword(123)).rejects.toThrow("Password must be type of string");
    });

    it("should return hash as a string", async () => {
      // Arrange
      const plainPassword = "testpassword123";

      // Act
      const hashedPassword = await authService.hashPassword(plainPassword);

      // Assert
      expect(hashedPassword).toBeTypeOf("string");
    });

    it("should return hash string with 60 characters length", async () => {
      // Arrange
      const plainPassword = "testpassword123";

      // Act
      const hashedPassword = await authService.hashPassword(plainPassword);

      // Assert
      expect(hashedPassword.length).toBe(60);
    });

    it("should hash password successfully", async () => {
      // Arrange
      const plainPassword = "testpassword123";

      // Act
      const hashedPassword = await authService.hashPassword(plainPassword);

      // Assert
      const result = await bcrypt.compare(plainPassword, hashedPassword);
      expect(result).toBe(true);
    });
  });

  describe("comparePassword", () => {
    it("should throw error for empty password", async () => {
      // Arrange
      const exampleHash = "$2b$10$OOsKjsaHL7kJi7gHmsRX4.clf4VutWLQRo/N32fwYGNToCgyJrGlS";
      // Act & Assert
      await expect(authService.comparePassword("", exampleHash)).rejects.toThrow("Password cannot be empty");
    });

    it("should throw error for non-string password", async () => {
      // Arrange
      const exampleHash = "$2b$10$OOsKjsaHL7kJi7gHmsRX4.clf4VutWLQRo/N32fwYGNToCgyJrGlS";
      // Act & Assert
      await expect(authService.comparePassword(123, exampleHash)).rejects.toThrow(
        "Password must be type of string"
      );
    });

    it("should throw error for empty hash", async () => {
      // Act & Assert
      await expect(authService.comparePassword("Pass", "")).rejects.toThrow("Hash cannot be empty");
    });

    it("should throw error for non-string hash", async () => {
      // Act & Assert
      await expect(authService.comparePassword("Pass", 123)).rejects.toThrow("Hash must be type of string");
    });

    it("should throw error if hash.length is not 60", async () => {
      // Act & Assert
      await expect(authService.comparePassword("Pass", "hash.lengthNot60")).rejects.toThrow(
        "hash.length must be 60 characters"
      );
    });
  });
});
