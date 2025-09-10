import { describe, expect, it, vi } from "vitest";
import * as authService from "../../../../src/services/authService.js";
import bcrypt from "bcrypt";

// const demoPassword = "testpassword123";

// authService.hashPassword(demoPassword).then((hash) => {
//   authService.comparePassword(demoPassword, hash).then((res) => console.log(res));
//   console.log(hash);
// });
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
