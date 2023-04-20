import { connectDB } from "@/util/db";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result[0].id);

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>{result[0].title}</h4>
        <p>{result[0].content}</p>
      </div>
      <div className="list-item">
        <h4>{result[1].title}</h4>
        <p>{result[1].content}</p>
      </div>
      <div className="list-item">
        <h4>{result[2].title}</h4>
        <p>{result[2].content}</p>
      </div>
    </div>
  );
}
