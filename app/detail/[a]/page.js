//필요 모듈 불러오기
import { ObjectId } from "mongodb";
import { connectDB } from "@/util/db.js";

//글 상세페이지 (dynamic route로 글의 id에 따라 페이지가 자동 생성됩니다.)
export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post") //post collection에 있는 data 가져오기
    .findOne({ _id: new ObjectId(props.params.a) }); // 그중에 페이지의 주소와 아이디가 일치하는 데이터
  console.log(result.title + " (요청됨)");

  return (
    <div>
      <h4>질문 : {result.title}</h4>
      <h4>AI 답변 : {result.content}</h4>
    </div>
  );
}
