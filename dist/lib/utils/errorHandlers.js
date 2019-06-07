"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
const responseHandler_1 = __importDefault(require("../helpers/responseHandler"));
exports.notFoundError = () => {
    throw new httpErrors_1.HTTP404Error("Method not found.");
};
exports.clientError = (err, req, res, next) => {
    if (err instanceof httpErrors_1.HTTPClientError) {
        responseHandler_1.default.
            reqRes(req, res).
            onClientError(err.statusCode, err.name, err.message, err.description).
            send();
    }
    else {
        next(err);
    }
};
exports.serverError = (err, req, res, next) => {
    if (process.env.NODE_ENV === "production") {
        responseHandler_1.default.
            reqRes(req, res).
            onServerError(err.name, err.message).
            send();
    }
    else {
        res.status(500).send(err.stack);
    }
};
//# sourceMappingURL=errorHandlers.js.map