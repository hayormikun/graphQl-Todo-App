import express from "express";
import {
  ApolloServer
} from "apollo-server-express";

import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

async function startServer() {
  const app = express();
  app.use(cors())
  dotenv.config()
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.end("server started...");
    console.log('graphql server running')
  });

    mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db conncted");
    }).catch((err) => {
      console.log(err);
    });

  const PORT = process.env.PORT || 5000;


  app.listen(PORT, () => {
    console.log(`express server is running on port ${PORT}`);
  });
}

startServer();
