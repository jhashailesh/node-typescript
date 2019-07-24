"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const user_model_1 = require("./../components/user/user.model");
const DIContainer = new inversify_1.Container();
DIContainer.bind(user_model_1.UserModel).toSelf();
exports.default = DIContainer;
//# sourceMappingURL=index.js.map