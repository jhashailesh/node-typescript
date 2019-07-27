"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
exports.default = [
    {
        path: "user/",
        method: "get",
        escapeAuth: true,
        handler: [user_service_1.userController.fetchAll]
    },
    {
        path: "user/",
        method: "post",
        escapeAuth: true,
        handler: [user_service_1.userController.create]
    },
    {
        path: "user/:id",
        method: "get",
        handler: [user_service_1.userController.fetch]
    },
    {
        path: "user/:id",
        method: "put",
        handler: [user_service_1.userController.update]
    },
    {
        path: "user/:id",
        method: "delete",
        handler: [user_service_1.userController.fetchAll]
    }
];
//# sourceMappingURL=index.js.map