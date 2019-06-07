"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_middleware_1 = require("./common.middleware");
exports.default = [common_middleware_1.handleBodyRequestParsing, common_middleware_1.allowCors, common_middleware_1.reqConsoleLogger, common_middleware_1.handleCompression, common_middleware_1.requestLimiter];
//# sourceMappingURL=index.js.map