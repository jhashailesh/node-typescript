"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const inversify_1 = require("inversify");
let UserModel = class UserModel {
    async fetchAll() {
        return user_schema_1.User.find({}, 'name email age createdAt');
    }
    async fetch(id) {
        return user_schema_1.User.findById(id, 'name email age');
    }
    async add(body) {
        const q = new user_schema_1.User(body);
        return q.addNewUser();
    }
    async update(id, body) {
        return user_schema_1.User.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    }
    async remove(id) {
        const q = new user_schema_1.User({ _id: id });
        return q.remove();
    }
};
UserModel = __decorate([
    inversify_1.injectable()
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map