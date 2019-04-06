import express from "express";

/* Custom imports */
import { applyMiddleware, applyRoutes} from "./lib/utils";
import middleware from "./lib/middleware";
import {v1, v2} from "./routes";
import errorHandlersMiddleware from "./lib/middleware/errorHandlers.middleware";

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

/*---------------------------------------
| API VERSIONS CONFIGURATION [START]
|---------------------------------------*/

// Different router required to initialize different apis call.
const r1 = express.Router();
const r2 = express.Router();

app.use("/", applyRoutes(v1, r1)); // default api
app.use("/api/v1", applyRoutes(v1, r1)); 
app.use("/api/v2", applyRoutes(v2, r2));

/*---------------------------------------
| API VERSIONS CONFIGURATION [END]
|---------------------------------------*/

applyMiddleware(errorHandlersMiddleware, app);


// Exporting app
export {app};