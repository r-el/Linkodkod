/**
 * Entry Point
 *
 * 1. Connecting to databases
 * 2. Starts the Express server
 */
import app from "./src/server.js";
import { serverConfig } from "./src/config/server.js";

const HOST = serverConfig.host;
const PORT = serverConfig.port;

/**
 * Start server after initializing databases
 */
async function startServer() {
  try {
    // In the future, init databases...

    // Start Express server
    app.listen(PORT, () => {
      console.log(`✔ LinKodkod server running on http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("✘ Failed to start server:", error);
    process.exit(1);
  }
}

// Start the application
startServer();
