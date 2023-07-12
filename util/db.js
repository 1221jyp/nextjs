//database에 입출력을 하기 위한 라이브러리 (본인작성 코드 아님)
import { MongoClient } from "mongodb";

require("dotenv").config();
const url = process.env.mongodb;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
