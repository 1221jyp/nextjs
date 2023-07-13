"use client"; //client component 선언

import { signIn } from "next-auth/react"; //필요 모듈 불러오기

//layout.js의 로그인버튼
export default function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn(); //눌렀을시 로그인 함수 실행
      }}
    >
      로그인
    </button>
  );
}
