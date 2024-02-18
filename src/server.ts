import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs } from './graphql.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
});
