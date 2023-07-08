import { connectDB } from "@/util/db";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div>
      <div>안녕</div>
      안녕
    </div>
  );
}
