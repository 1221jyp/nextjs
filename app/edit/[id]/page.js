//필요 모듈 불러오기
import { ObjectId } from "mongodb";
import { connectDB } from "@/util/db.js";
import PostForm from "./postform";

//글 수정 페이지
export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div>
      <h4>수정페이지</h4>
      <PostForm result={result}></PostForm>
      {/* 자바스크립트의 html제어는 server컴포넌트에서 사용할수 없기때문에 postform.js라는 파일을
      새로 생성하고, 그 코드를 client컴포넌트로 변경하여 자바스크립트의 html제어기능을 사용합니다.
      database의 자료들을 주고받을때는 server컴포넌트여야하므로, client컴포넌트가 요구되는 코드만
      옮겨줍니다. */}
    </div>
  );
}
