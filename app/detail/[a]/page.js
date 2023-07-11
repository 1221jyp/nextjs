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
      <h1>안녕하세요</h1>
      <h4>{result.title}</h4>
      <h4>{result.content }</h4>
    </div>
  );
}
