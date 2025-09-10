import { describe, expect, it, vi } from "vitest";
import * as authService from "../../../../src/services/authService.js";
import bcrypt from "bcrypt";

describe("Hash Password", () => {
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
