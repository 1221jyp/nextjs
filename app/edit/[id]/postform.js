"use client"; //client 컴포넌트로 전환

export default async function PostForm({ result, session }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 제출 동작 방지

    const titleInput = event.target.elements.title;

    if (!titleInput.value) {
      // 제목 또는 내용이 비어있는 경우
      alert("내용을 입력해주세요!");
    } else if (!session) {
      //로그아웃 상태일 경우
      alert("로그아웃 상태입니다!");
    } else if (session.user.email == result.author) {
      // 제출 가능한 경우
      event.target.submit(); // 제출
    } else {
      alert("작성자가 아닙니다.");
    }
  };
  return (
    // form제출시 /api/edit 주소로 api post 요청
    <form action="/api/edit" method="POST" onSubmit={handleSubmit}>
      <h6>제목</h6>
      <input name="title" className="inputtitle" defaultValue={result.title} />
      <br />
      <input
        style={{ display: "none" }}
        name="_id"
        defaultValue={result._id.toString()}
      ></input>
      <button type="submit">버튼</button>
    </form>
  );
}
