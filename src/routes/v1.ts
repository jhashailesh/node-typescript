import graphQlHttp  from 'express-graphql';
import user from "../components/user";
import { IRoute } from "../lib/utils";
import resolver from '../graphql/resolver';
import schema from '../graphql/schema';


const gQl: IRoute = {
  path: "/graphql",
  method: "all",
  escapeAuth: true,
  handler: graphQlHttp({
    schema,
    rootValue: resolver,
    graphiql: true

  })
}


export default [...user, gQl];
