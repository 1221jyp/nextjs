import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
    console.log(result);
    res.status(200).json("삭제완료");
  }
}
