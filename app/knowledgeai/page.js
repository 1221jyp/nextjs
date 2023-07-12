//필요 모듈 불러오기
import { connectDB } from "@/util/db";
import ListItem from "./listitem";

//글목록 페이지
export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      {/* client component 사용 위해 listitem.js로 코드 이전 */}
      <ListItem result={result}></ListItem>
    </div>
  );
}
