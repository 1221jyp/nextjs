import { ObjectId } from "mongodb";
import { connectDB } from "@/util/db.js";

export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.a) });
  console.log(result);

  return (
    <div>
      <h1>컴퓨터공학</h1>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <P>흠 그 <b class="term">정도</b>인가ㅊㅌㅍㅌㅊㅍ?</P>
    </div>
  );
}
