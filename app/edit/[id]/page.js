import { ObjectId } from "mongodb";
import { connectDB } from "@/util/db.js";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/edit" method="POST">
        <h6>제목</h6>
        <input name="title" defaultValue={result.title} />
        <br />
        <input style={{ display:'none' }} name="_id" defaultValue={result._id.toString()}></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
