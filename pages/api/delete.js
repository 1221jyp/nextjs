//필요 모듈 불러오기
import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

//사용자가 삭제 버튼을 눌렀을때 실행되는 함수
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
