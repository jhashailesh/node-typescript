"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customMessage_1 = require("../../lib/helpers/customMessage");
const responseHandler_1 = __importDefault(require("../../lib/helpers/responseHandler"));
const user_model_1 = __importDefault(require("./user.model"));
class UserController {
    constructor() {
        this.fetchAll = async (req, res, next) => {
            try {
                responseHandler_1.default.
                    reqRes(req, res).
                    onFetch(customMessage_1.user.FETCH_ALL, await user_model_1.default.fetchAll(), customMessage_1.user.CREATED_DEC).
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
                    onCreate(customMessage_1.user.CREATED, await user_model_1.default.add(req.body), customMessage_1.user.CREATED_DEC).
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
                    onCreate(customMessage_1.user.CREATED, await user_model_1.default.fetch(req.params.id), customMessage_1.user.CREATED_DEC).
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
                    onCreate(customMessage_1.user.CREATED, await user_model_1.default.update(req.params.id, req.body), customMessage_1.user.CREATED_DEC).
                    send();
            }
            catch (e) {
                next(e);
            }
        };
    }
}
exports.default = new UserController;
//# sourceMappingURL=user.controller.js.map