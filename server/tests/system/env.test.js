import { test, expect } from "vitest";

import { config } from "dotenv";
config();
import { serverConfig } from "../../src/config/server.js";
import { corsConfig } from "../../src/config/cors.js";
import { databaseConfig } from "../../src/config/database.js";
import { authConfig } from "../../src/config/auth.js";

// check only if the environment variables are defined or not
test(".env | Server configuration", async () => {
  const HOST = serverConfig.host;
  const PORT = serverConfig.port;
  const ENVIRONMENT = serverConfig.environment;

  expect(!!HOST).toBeTruthy();
  expect(!!PORT).toBeTruthy();
  expect(!!ENVIRONMENT).toBeTruthy();
});

test(".env | CORS configuration", async () => {
  const ORIGIN = corsConfig.origin;

  expect(!!ORIGIN).toBeTruthy();
});

test(".env | Database configuration", async () => {
  const POST_FILE_PATH = databaseConfig.postsFilePath;
  const OPTION = databaseConfig.options;
  const AUTO_ID = databaseConfig.options.autoId;
  const ID_FILED = databaseConfig.options.idField;
  const UINQUE_FIELDS = databaseConfig.options.uniqueFields;

  expect(!!POST_FILE_PATH).toBeTruthy();
  expect(!!OPTION).toBeTruthy();
  expect(!!AUTO_ID).toBeTruthy();
  expect(!!ID_FILED).toBeTruthy();
  expect(!!UINQUE_FIELDS).toBeTruthy();
});

test(".env | Authentication configuration", async () => {
  const JWT_SECRET = authConfig.jwtSecret;
  const JWT_EXPIRES_IN = authConfig.jwtExpiresIn;
  const BCRYPT_SALT_ROUNDS = authConfig.bcryptSaltRounds;

  expect(!!JWT_SECRET).toBeTruthy();
  expect(!!JWT_EXPIRES_IN).toBeTruthy();
  expect(!!BCRYPT_SALT_ROUNDS).toBeTruthy();

  // expect BCRYPT_SALT_ROUNDS to be number
  expect(BCRYPT_SALT_ROUNDS).toBeTypeOf("number");
});
