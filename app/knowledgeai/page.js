import { connectDB } from "@/util/db";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <div className="navbar">
        <Link href="/" className="logo">
          Appleforum
        </Link>
        <Link href="/knowledgeai">List</Link>
      </div>
      <div className="list-bg">
        {result.map((a, i) => {
          return (
            <div>
              <div className="list-item" key={i}>
                <Link
                  prefetch={false}
                  className="title"
                  href={"/detail/" + result[i]._id}
                >
                  {result[i].title}
                </Link>
                <p>{result[i].content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
