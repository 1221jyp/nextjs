import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Write from "./Write";

export default async function Wirtepage() {
  let session = await getServerSession(authOptions);
  return <Write session={session}></Write>;
}
