import { connectDB } from "@/util/db";

export default async function handler(request, response) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log("requested list");
  return response.status(200).json(result);
}
