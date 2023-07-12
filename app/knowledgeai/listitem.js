"use client";
import Link from "next/link";

export default function ListItem(props) {
  console.log(props.session);
  return (
    <div>
      {
        <div className="list-bg">
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
                  <button
                    onClick={(e) => {
                      if (!props.session) {
                        alert("로그아웃 상태입니다.");
                      } else {
                        if (
                          props.session.user.email == props.result[i].author
                        ) {
                          fetch("/api/delete", {
                            method: "POST",
                            body: props.result[i]._id,
                          }).then(() => {
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(() => {
                              e.target.parentElement.style.display = "none";
                            }, 1000);
                          });
                        }
                        //.
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
