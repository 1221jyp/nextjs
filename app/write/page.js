export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <h6>제목</h6>
        <input name="title"></input>
        <h6>내용</h6>
        <input name="content"></input>
        <br></br>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
