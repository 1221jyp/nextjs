import { connectDB } from "@/util/db";
import Link from "next/link";
import ListItem from "./listitem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <div className="navbar">
        <Link href="/knowledgeai" className="logo" prefetch={false}>
          지식 AI IN
        </Link>
        <Link href="/write" prefetch={false}>
          글작성
        </Link>
      </div>
      <ListItem result={result}></ListItem>
    </div>
  );
}
