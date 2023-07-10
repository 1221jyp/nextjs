"use client";

export default function Write() {
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 제출 동작 방지

    const titleInput = event.target.elements.title;
    const contentInput = event.target.elements.content;

    if (!titleInput.value || !contentInput.value) {
      // 제목 또는 내용이 비어있는 경우
      alert("제목과 내용을 입력해주세요!");
    } else {
      // 제출 가능한 경우
      event.target.submit(); // 제출
    }
  };

  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/text" method="POST" onSubmit={handleSubmit}>
        <h6>제목</h6>
        <input name="title" />
        <h6>내용</h6>
        <input name="content" />
        <br />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
