"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./lib/utils");
const middleware_1 = __importDefault(require("./lib/middleware"));
const routes_1 = require("./routes");
const errorHandlers_middleware_1 = __importDefault(require("./lib/middleware/errorHandlers.middleware"));
const dbConnection_1 = __importDefault(require("./lib/helpers/dbConnection"));
process.on("uncaughtException", e => {
    console.log(e.message, "uncoutght");
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e, "unhandled");
    process.exit(1);
});
const app = express_1.default();
exports.app = app;
utils_1.applyMiddleware(middleware_1.default, app);
dbConnection_1.default.mongoConnection();
const r1 = express_1.default.Router();
const r2 = express_1.default.Router();
app.use("/", utils_1.applyRoutes(routes_1.v1, r1));
app.use("/api/v1", utils_1.applyRoutes(routes_1.v1, r1));
app.use("/api/v2", utils_1.applyRoutes(routes_1.v2, r2));
utils_1.applyMiddleware(errorHandlers_middleware_1.default, app);
//# sourceMappingURL=app.js.map