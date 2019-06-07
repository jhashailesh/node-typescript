"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const di_container_1 = __importDefault(require("./di.container"));
const user_model_1 = require("../components/user/user.model");
exports.DIUserModel = di_container_1.default.get(user_model_1.UserModel);
//# sourceMappingURL=index.js.map