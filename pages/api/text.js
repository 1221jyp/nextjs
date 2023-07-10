import { connectDB } from "@/util/db";

export default async function handler(request, response) {
  if (request.method == "POST") {
    console.log(request.body);
    if (request.body.title == "") {
      response.status(500).json("제목써라");
    } else if (request.body.content == "") {
      response.status(500).json("내용써라");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne(request.body);
      response.redirect(302, "/knowledgeai");
    } catch (error) {
      return response.status(500).json("서버 오류");
    }
  }
}
