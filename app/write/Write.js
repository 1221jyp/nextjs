"use client";

//질문 입력 상세페이지

//질문 내용이 비어있는지 아닌지 검사하는 함수
export default async function Write(props) {
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 제출 동작 방지

    const titleInput = event.target.elements.title;

    if (!titleInput.value) {
      // 제목 또는 내용이 비어있는 경우
      alert("내용을 입력해주세요!");
    } else if (!props.session) {
      alert("로그인을 해야 작성가능합니다.");
    } else {
      // 제출 가능한 경우
      event.target.submit(); // 제출
    }
  };

  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/text" method="POST" onSubmit={handleSubmit}>
        <h6>질문</h6>
        <input name="title" />
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
