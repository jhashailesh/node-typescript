"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("../middleware/auth.middleware");
exports.applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, escapeAuth } = route;
        let handler = route.handler;
        if (!Array.isArray(handler)) {
            handler = [handler];
        }
        if (!escapeAuth) {
            router[method](path, [auth_middleware_1.Authorization, ...handler]);
        }
        router[method](path, handler);
    }
    return router;
};
//# sourceMappingURL=index.js.map