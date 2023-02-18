import dotenv from "dotenv";
dotenv.config({path: "./.env"});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// import { connectToDB } from "./pgConnection";
import { sequelize } from "./src/db/models";
import { schema } from "./src/graphql";


console.log(process.env.POSTGRES_PASSWORD)
console.log(process.env.PORT)

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors<cors.CorsRequest>());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

const server = new ApolloServer({schema});

async function startServer(){
  await server.start();
  app.use('/graphql', expressMiddleware(server));
}
startServer();

app.get('/', (req, res) => {
  res.send('Hi There!!!!')
});

app.get('/v1/test', (req, res) => {
  res.json({ test: 123 }).status(200);
});

app.post('/graphql', )
app.listen(PORT, async () => {
  console.log(`App is lestening on ${PORT}`);
  // connectToDB();
  try {
    await sequelize.authenticate();
    sequelize.sync({ force: true })
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
