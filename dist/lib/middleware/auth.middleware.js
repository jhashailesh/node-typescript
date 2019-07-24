"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.Authorization = (req, res, next) => {
    if (req.header("Authorization")) {
        console.log(req.header(`Authorization`));
        next();
    }
    else {
        next(new httpErrors_1.HTTP401Error("You are not authorized"));
    }
};
//# sourceMappingURL=auth.middleware.js.map