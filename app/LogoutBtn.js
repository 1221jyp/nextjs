"use client"; //client comeponent 선언

import { signOut } from "next-auth/react"; //필요 모듈 불러오기

//layout.js의 로그아웃버튼
export default function LogOutBtn() {
  return (
    <button
      onClick={() => {
        signOut(); //눌렀을시 로그아웃 함수 실행
      }}
    >
      로그아웃
    </button>
  );
}
