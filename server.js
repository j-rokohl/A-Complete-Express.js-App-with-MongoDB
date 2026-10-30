// INSTRUCTIONS
// server.js only starts the server. The server runs on port 3000 or an environment variable.

import app from "./app.js";
import { connectDatabase } from "./data/mongoClient.js";

const PORT = process.env.PORT ?? 3000;

async function startServer() {
  try {
    await connectDatabase();
    // Start server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("could not start the application:", error.message);
    process.exit(1);
  }
}

startServer();