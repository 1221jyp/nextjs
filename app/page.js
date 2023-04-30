import { connectDB } from "@/util/db";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div>
      <div>응아니얔ㅋ</div>
      안녕
    </div>
  );
}
