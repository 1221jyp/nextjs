import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    const db = (await connectDB).db("forum");
    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(request.body._id) },
        { $set: { title: request.body.title, content: request.body.content } }
      );
    response.redirect(302, "/knowledgeai");
  }
}
