// TODO: fix the ES6 problem with jest
require("dotenv").config();

require("../../src/config/server.js").serverConfig;
require("../../src/config/cors.js:corsConfig");
require("../../src/config/database.js:databaseConfig");

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

  expect(!!OPTION).toBeTruthy();
  expect(!!AUTO_ID).toBeTruthy();
  expect(!!ID_FILED).toBeTruthy();
  expect(!!UINQUE_FIELDS).toBeTruthy();
});
// ....so on [basically i am just checking if they are defined or not]
