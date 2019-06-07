"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUrl = () => {
    const configs = {
        dbAccess: process.env.DB_ACCESS || "local",
        user: process.env.DB_USER || "shailesh",
        pass: process.env.DB_PASS || "",
        cluster: process.env.DB_CLUSTER || "",
        db: process.env.DB || "nodeType"
    };
    if (configs.dbAccess === "local") {
        return `mongodb://localhost:27017/${configs.db}`;
    }
    return `mongodb+srv://${configs.user}:${configs.pass}@${configs.cluster}.mongodb.net/${configs.db}?retryWrites=true`;
};
exports.configCors = {
    allowOrigin: [
        'http://localhost:3000',
        'http://yourapp.com'
    ],
    exposedHeaders: ["X-Token"]
};
exports.rateLimitConfig = {
    inTime: process.env.REQUEST_TIME || 1 * 60 * 1000,
    maxRequest: process.env.MAX_REQUEST || 12
};
//# sourceMappingURL=index.js.map