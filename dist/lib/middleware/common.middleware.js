"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const config_1 = require("../../config");
const requestLogger_1 = require("./requestLogger");
exports.allowCors = (router) => {
    router.use(cors_1.default({
        origin(origin, callback) {
            if (!origin) {
                return callback(null, true);
            }
            if (config_1.configCors.allowOrigin.indexOf(origin) === -1) {
                const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        exposedHeaders: config_1.configCors.exposedHeaders,
    }));
};
exports.handleBodyRequestParsing = (router) => {
    router.use(express_1.urlencoded({ extended: true }));
    router.use(express_1.json());
};
exports.reqConsoleLogger = (router) => {
    router.use(requestLogger_1.requestLogger);
};
exports.handleCompression = (router) => {
    router.use(compression_1.default());
};
exports.requestLimiter = (router) => {
    const limiter = new express_rate_limit_1.default({
        windowMs: +config_1.rateLimitConfig.inTime || 1 * 60 * 1000,
        max: +config_1.rateLimitConfig.maxRequest || 12,
        message: {
            status: 0,
            error: "Too Many Requests",
            statusCode: 429,
            message: "Oh boy! You look in hurry, take it easy",
            description: "You have crossed maximum number of requests. please wait and try again."
        }
    });
    router.use(limiter);
};
exports.graphQl = (router) => {
    return "";
};
//# sourceMappingURL=common.middleware.js.map