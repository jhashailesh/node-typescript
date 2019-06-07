"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{
        path: "/",
        method: "get",
        handler: async (req, res, next) => {
            try {
                res.status(200).json({ message: "You are on version 2 Api  123" });
            }
            catch (e) {
                next(e);
            }
        }
    }];
//# sourceMappingURL=v2.js.map