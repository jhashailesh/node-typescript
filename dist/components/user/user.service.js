"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const user_model_1 = require("./user.model");
const user_controller_1 = require("./user.controller");
const DIContainer = new inversify_1.Container();
DIContainer.bind(user_model_1.UserModel).toSelf();
exports.userModel = DIContainer.get(user_model_1.UserModel);
exports.userController = DIContainer.resolve(user_controller_1.UserController);
//# sourceMappingURL=user.service.js.map