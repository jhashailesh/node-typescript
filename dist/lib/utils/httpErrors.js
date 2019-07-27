"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPClientError extends Error {
    constructor(message, description) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        }
        else {
            super(message);
        }
        this.name = this.constructor.name;
        this.description = description;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HTTPClientError = HTTPClientError;
class HTTP400Error extends HTTPClientError {
    constructor(message = "Bad Request", description) {
        super(message, description);
        this.statusCode = 400;
    }
}
exports.HTTP400Error = HTTP400Error;
class HTTP401Error extends HTTPClientError {
    constructor(message = "Unauthorized", description) {
        super(message, description);
        this.statusCode = 401;
    }
}
exports.HTTP401Error = HTTP401Error;
class HTTP403Error extends HTTPClientError {
    constructor(message = "Forbidden", description) {
        super(message, description);
        this.statusCode = 403;
    }
}
exports.HTTP403Error = HTTP403Error;
class HTTP404Error extends HTTPClientError {
    constructor(message = "Not found", description) {
        super(message, description);
        this.statusCode = 404;
    }
}
exports.HTTP404Error = HTTP404Error;
//# sourceMappingURL=httpErrors.js.map