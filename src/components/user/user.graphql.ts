import { userModel } from './user.service';
// Schema
export const gQUserSchema = `

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


// ------------------ Resolver ---------------------------

export const gQUserResolver = {
  users: async () => {
    return  userModel.fetchAll();
  },

  createUser: async (args: any) => {
    return  userModel.add(args.user);
  }
}
