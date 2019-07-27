"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const http = __importStar(require("http"));
const util_1 = require("util");
dotenv_1.config();
const app_1 = require("./app");
const port = process.env.PORT ? +process.env.PORT : 3000;
const server = http.createServer(app_1.app);
server.listen(port);
server.on('listening', () => {
    util_1.log(`listening on port ${port}`);
});
//# sourceMappingURL=server.js.map