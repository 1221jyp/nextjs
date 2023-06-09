//소셜 로그인 진행시 필요한 라이브러리 (본인작성 코드 아님)
import { connectDB } from "@/util/db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
require("dotenv").config();

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.githubid,
      clientSecret: process.env.githubkey,
    }),
  ],
  secret: process.env.mypassword,
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
