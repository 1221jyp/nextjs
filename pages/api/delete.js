//필요 모듈 불러오기
import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

//사용자가 삭제 버튼을 눌렀을때 실행되는 함수
export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db("forum");
    let finddata = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });
    if (finddata.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      res.status(200).json("삭제완료");
    } else {
      return res.status(500).json("본인이 쓴 글만 삭제할수 있습니다.");
    }
  }
}
