"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
exports.gQUserSchema = `

type User {
  _id: ID!,
  name: String!,
  age: Int,
  email: String,
  createdAt: String
}

input userInput{
  name: String!,
  age: Int!,
  email: String!
}

type RootQuery{
  users: [User!]!
}

type RootMutation{
  createUser(user: userInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;
exports.gQUserResolver = {
    users: async () => {
        return user_service_1.userModel.fetchAll();
    },
    createUser: async (args) => {
        return user_service_1.userModel.add(args.user);
    }
};
//# sourceMappingURL=user.graphql.js.map