require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const PORT = 4000;

const db = require("./models");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }),
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`🚀 Server up and running on port: ${PORT}!`)
);
