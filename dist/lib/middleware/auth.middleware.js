"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = (route, router) => {
    router.use((req, res, next) => {
        if (req.header("Authorization")) {
            console.log(req.header(`Authorization`));
            next();
        }
        else {
            console.log(route);
            next(new Error("not authorised"));
        }
    });
};
//# sourceMappingURL=auth.middleware.js.map