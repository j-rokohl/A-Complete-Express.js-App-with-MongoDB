import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import fillTemplate from "./modules/fillTemplate.js";
import itemRouter from "./routes/itemRoutes.js";
// import { items } from "./data/itemStore.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Express configuration
const app = express();

// Enable CORS
app.use(cors());

// Render temporary data for templates
const indexTemplate = fs.readFileSync(
    path.resolve("public", "index.html"),
    "utf8"
);

const cardTemplate = fs.readFileSync(
    path.resolve("public", "card.html"),
    "utf8"
);

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(morgan("dev")); // Third-party logging middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Custom Request Logger
app.use(requestLogger);

// API routes
app.get(["/"], (req, res) => {
    const page = indexTemplate;
    res.status(200).send(page);
});
app.use("/api/items", itemRouter);

// Static file configuration
app.use(express.static("public"));

// 404 handling
app.use((req, res) => { // Route not in app
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

// Global error handling
app.use(errorHandler);

export default app;