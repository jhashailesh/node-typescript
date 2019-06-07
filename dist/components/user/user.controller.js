"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customMessage_1 = require("../../lib/helpers/customMessage");
const responseHandler_1 = __importDefault(require("../../lib/helpers/responseHandler"));
const services_1 = require("../../services");
const userModel = {};
class UserController {
    constructor(model) {
        this.fetchAll = async (req, res, next) => {
            try {
                responseHandler_1.default.
                    reqRes(req, res).
                    onFetch(customMessage_1.user.FETCH_ALL, await this.coll.fetchAll(), customMessage_1.user.CREATED_DEC).
                    send();
            }
            catch (e) {
                next(e);
            }
        };
        this.create = async (req, res, next) => {
            try {
                responseHandler_1.default.
                    reqRes(req, res).
                    onCreate(customMessage_1.user.CREATED, await userModel.add(req.body), customMessage_1.user.CREATED_DEC).
                    send();
            }
            catch (e) {
                next(e);
            }
        };
        this.fetch = async (req, res, next) => {
            try {
                responseHandler_1.default.
                    reqRes(req, res).
                    onCreate(customMessage_1.user.CREATED, await userModel.fetch(req.params.id), customMessage_1.user.CREATED_DEC).
                    send();
            }
            catch (e) {
                next(e);
            }
        };
        this.update = async (req, res, next) => {
            try {
                responseHandler_1.default.
                    reqRes(req, res).
                    onCreate(customMessage_1.user.CREATED, await userModel.update(req.params.id, req.body), customMessage_1.user.CREATED_DEC).
                    send();
            }
            catch (e) {
                next(e);
            }
        };
        this.coll = model;
    }
}
exports.UserController = UserController;
exports.default = new UserController(services_1.DIUserModel);
//# sourceMappingURL=user.controller.js.map