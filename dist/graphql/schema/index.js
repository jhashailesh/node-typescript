"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_graphql_1 = require("../../components/user/user.graphql");
exports.default = graphql_1.buildSchema([user_graphql_1.gQUserSchema].join());
//# sourceMappingURL=index.js.map