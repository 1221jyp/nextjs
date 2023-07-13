//필요 모듈 불러오기
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Write from "./Write";

//글작성 페이지
export default async function Wirtepage() {
  let session = await getServerSession(authOptions);
  return <Write session={session}></Write>;
}
