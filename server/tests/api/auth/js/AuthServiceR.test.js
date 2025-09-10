import { describe, expect, it, vi } from "vitest";
import * as authService from "../../../../src/services/authService.js";
import bcrypt from "bcrypt";

describe("Hash Password", () => {
  it("should throw error for empty password", async () => {
    await expect(authService.hashPassword("")).rejects.toThrow("Password cannot be empty");
  });

  it("should throw error for non-string password", async () => {
    // Act & Assert
    await expect(authService.hashPassword(123)).rejects.toThrow("Password must be type of string");
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
