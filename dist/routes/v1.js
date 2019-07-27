"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = __importDefault(require("express-graphql"));
const user_1 = __importDefault(require("../components/user"));
const resolver_1 = __importDefault(require("../graphql/resolver"));
const schema_1 = __importDefault(require("../graphql/schema"));
const gQl = {
    path: "/graphql",
    method: "all",
    escapeAuth: true,
    handler: express_graphql_1.default({
        schema: schema_1.default,
        rootValue: resolver_1.default,
        graphiql: true
    })
};
exports.default = [...user_1.default, gQl];
//# sourceMappingURL=v1.js.map