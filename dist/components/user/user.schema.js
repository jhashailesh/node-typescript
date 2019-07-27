"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: String,
    name: String,
    age: Number
}, {
    timestamps: true
});
exports.UserSchema.pre("save", async (next) => {
    next();
});
exports.UserSchema.methods.fullName = function () {
    return (this.name.trim() + " " + this.age.trim());
};
exports.UserSchema.methods.isEmailExist = async function () {
    return 0 < await exports.User.findOne({ email: this.email }).countDocuments();
};
exports.UserSchema.methods.addNewUser = async function () {
    return this.save();
};
exports.User = mongoose_1.model("User", exports.UserSchema);
//# sourceMappingURL=user.schema.js.map