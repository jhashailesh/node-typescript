"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("./user.controller"));
exports.default = [
    {
        path: "/",
        method: "get",
        escapeAuth: true,
        handler: [user_controller_1.default.fetchAll]
    },
    {
        path: "/",
        method: "post",
        handler: [user_controller_1.default.create]
    },
    {
        path: "/:id",
        method: "get",
        handler: [user_controller_1.default.fetch]
    },
    {
        path: "/:id",
        method: "put",
        handler: [user_controller_1.default.update]
    },
    {
        path: "/:id",
        method: "delete",
        handler: [user_controller_1.default.fetchAll]
    }
];
//# sourceMappingURL=index.js.map