"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
class UserModel {
    async fetchAll() {
        return user_schema_1.User.find({});
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
}
exports.default = new UserModel;
//# sourceMappingURL=user.model.js.map