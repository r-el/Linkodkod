/**
 * Entry Point
 * Starts the Express server
 */
import app from "./src/server.js";

const PORT = 3000;
const HOST = "http://localhost";

/**
 * Start server after initializing databases
 */
async function startServer() {
  try {
    // Start Express server
    app.listen(PORT, () => {
      console.log(`✔ Riddles server running on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("✘ Failed to start server:", error);
    process.exit(1);
  }
}

// Start the application
startServer();
