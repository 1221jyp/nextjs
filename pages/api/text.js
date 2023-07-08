import { connectDB } from "@/util/db";

export default async function handler(request, response) {
  console.log("hi");
  console.log(request.body);
  const db = (await connectDB).db("forum");
  await db.collection("post").insertOne(request.body);
  return response.status(200).json("처리완료");
}
