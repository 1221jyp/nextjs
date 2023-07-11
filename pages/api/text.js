import { connectDB } from "@/util/db";
require("dotenv").config();

export default async function handler(request, response) {
  if (request.method == "POST") {
    console.log(request.body);
    if (request.body.title == "") {
      response.status(500).json("제목써라");
    } 
    //openAI 호출
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST", 
      headers: {
        Authorization: `Bearer ${process.env.openAI}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: request.body.title }],
      }),
    })
      .then((res) => res.json())
      .then(async function gogo(data) {
        console.log(JSON.stringify(data, null, 2));
        try {
          const result = Object.assign({}, request.body, data.choices[0].message);
          const db = (await connectDB).db("forum");
          db.collection("post").insertOne(result );
          response.redirect(302, "/knowledgeai");
        } catch (error) {
          return response.status(500).json("서버 오류");
        }

      })
  }
}
