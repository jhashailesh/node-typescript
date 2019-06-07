"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHandler {
    constructor() {
        this.status = 1;
        this.statusCode = 200;
        this.message = "Success";
    }
    setData(message, payload, description) {
        this.message = message;
        this.description = description;
        this.payload = payload;
    }
    setErrorData(error, message, description) {
        this.message = message;
        this.description = description;
        this.error = error;
    }
    reqRes(req, res) {
        this.req = req;
        this.res = res;
        return this;
    }
    onCreate(message, payload, description) {
        this.statusCode = 201;
        this.setData(message, payload, description);
        return this;
    }
    onFetch(message, payload, description) {
        this.statusCode = 200;
        this.setData(message, payload, description);
        return this;
    }
    onClientError(statusCode, error, message, description) {
        this.statusCode = statusCode || 200;
        this.setErrorData(error, message, description);
        return this;
    }
    onServerError(error, message, description) {
        this.statusCode = 500;
        this.setErrorData(error, message, description);
        return this;
    }
    send() {
        if (!this.req || !this.res) {
            throw new Error("please set reqRes function to get start");
        }
        const response = {
            status: this.status,
            error: this.error,
            statusCode: this.statusCode,
            message: this.message,
            description: this.description,
            payload: this.payload
        };
        this.res.status(this.statusCode).json(response);
    }
}
exports.default = new ResponseHandler();
//# sourceMappingURL=responseHandler.js.map