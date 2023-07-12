import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
//웹페이지 전 주소에 적용되는 레이아웃
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/knowledgeai" className="logo">
            지식 AI IN
          </Link>
          <Link href="/write" prefetch={false}>
            글작성
          </Link>
          <button>로그인</button>
        </div>
        {children}
      </body>
    </html>
  );
}
