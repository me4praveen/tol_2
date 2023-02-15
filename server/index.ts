import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectToDB } from "./pgConnection";


dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hi There!!!!')
  });

  app.get('/api/test', (req, res) => {
    res.json({test: 123}).status(200);
  });

app.listen(PORT, () => {
    console.log(`App is lestening on ${PORT}`);
    connectToDB();
 })
