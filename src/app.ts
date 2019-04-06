import express from "express";

/* Custom imports */
import { applyMiddleware } from "./lib/utils";
import middleware from "./lib/middleware";

/* Error Handlers */
// These error handlers will caught any unhandled exceptions or rejections
// and do not stop the process with zero.
process.on("uncaughtException", e => {
  console.log(e.message, "uncoutght");
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e, "unhandled");
  process.exit(1);
});

// Initialize express app
const app: express.Application = express();

// Initialize middleware
applyMiddleware(middleware, app);


// Exporting app
export {app};
