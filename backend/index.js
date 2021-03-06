import app from "./server.js"
import mongodb from "mongodb";
import dotenv from "dotenv"

dotenv.config();
const MongoClient = mongodb.MongoClient;
const port = process.env.port || 8000;

MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
  }
).catch(err => {
  console.error(err);
  process.exit(1);
}).then(async client => {
  app.listen(port, () => {
    console.log(`;istening on port ${port}`);
  })
})