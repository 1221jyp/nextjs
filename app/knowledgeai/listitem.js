//글목록 페이지

"use client"; //client component 사용

import Link from "next/link"; // 필ㅛ 모ㄹ

export default function ListItem(props) {
  console.log(props.session);
  return (
    <div>
      {
        <div className="list-bg">
          {/* database에 있는 데이터의 개수만큼 리스트 글상자 생성 */}
          {props.result.map((a, i) => {
            return (
              <div key={i}>
                <div className="list-item" key={i}>
                  <Link
                    prefetch={false}
                    className="title"
                    href={"/detail/" + props.result[i]._id}
                  >
                    {props.result[i].title}
                  </Link>
                  <br></br>
                  <Link href={"/edit/" + props.result[i]._id}>수정</Link>
                  <br></br>
                  {/* 글 삭제 버튼, 현재 로그인한 사람의 이메일과 글 작성자의 이메일이 일치하여야만 작동 */}
                  <button
                    onClick={(e) => {
                      //로그아웃 상태라면
                      if (!props.session) {
                        alert("로그아웃 상태입니다.");
                      }
                      //로그인 상태라면
                      else {
                        //로그인한 사람의 이메일과 글 작성자의 이메일이 일치라면
                        if (
                          props.session.user.email == props.result[i].author
                        ) {
                          fetch("/api/delete", {
                            //조건을 만족한 상태에서 삭제 버튼을 눌렀을때, /api/delete로 api POST 요청
                            //원래 method를 DELETE로 전송하는것이 원칙이지만, 버그로 인해 POST로 요청
                            method: "POST",
                            body: props.result[i]._id,
                          }).then(() => {
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(() => {
                              e.target.parentElement.style.display = "none";
                            }, 1000);
                          });
                        }
                        //로그인한 사람의 이메일과 글 작성자의 이메일이 불일치라면
                        else {
                          alert("작성자가 아닙니다.");
                        }
                      }
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}
