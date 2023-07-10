"use client";
import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {
        <div className="list-bg">
          {props.result.map((a, i) => {
            return (
              <div>
                <div className="list-item" key={i}>
                  <Link
                    prefetch={false}
                    className="title"
                    href={"/detail/" + props.result[i]._id}
                  >
                    {props.result[i].title}
                  </Link>
                  <Link href={"/edit/" + props.result[i]._id}>수정</Link>
                  <button
                    onClick={(e) => {
                      fetch("/api/delete", {
                        method: "POST",
                        body: props.result[i]._id,
                      }).then(() => {
                        e.target.parentElement.style.opacity = 0;
                        setTimeout(() => {
                          e.target.parentElement.style.display = "none";
                        }, 1000);
                      });
                    }}
                  >
                    삭제
                  </button>
                  <p>{props.result[i].content}</p>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}
