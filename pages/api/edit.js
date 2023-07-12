//필요 모듈 불러오기
import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

//수정 창에서 글 수정시 실행되는 함수
export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.title == "") {
      response.status(500).json("질문을 입력하세요.");
    } else {
      //OPENAI 호출
      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.openAI}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          //작성자가 수정한 질문을 chatgpt에게 입력
          messages: [{ role: "user", content: request.body.title }],
        }),
      })
        .then((res) => res.json())
        .then(async function ChatGpt(data) {
          try {
            //수정한 제목과 OPENAI의 답변을 database에 저장 요청
            let editcontent = {
              title: request.body.title,
              content: data.choices[0].message.content,
            };
            const db = (await connectDB).db("forum");
            db.collection("post").updateOne(
              { _id: new ObjectId(request.body._id) },
              { $set: editcontent }
            );
            //작업이 끝나면 메인 페이지로 이동
            response.redirect(302, "/knowledgeai");
            //오류발생시 실행될 함수
          } catch (error) {
            return response.status(500).json("서버 오류");
          }
        });
    }
  }
}
