//필요 모듈 불러오기
import { connectDB } from "@/util/db";
import ListItem from "./listitem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

//글목록 페이지
export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  let session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {/* client component 사용 위해 listitem.js로 코드 이전 */}
      <ListItem result={result} session={session}></ListItem>
    </div>
  );
}
