import { useState } from "react";

function CommentBox() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const sendComment = async () => {
    const res = await fetch("http://localhost:3000/check-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await res.json();

    if (data.allowed) {
      setMessages([...messages, text]);
    } else {
      alert("そのコメントは禁止です！");
    }

    setText("");
  };
  
function Comment({ text, commentId }) {
  const reportComment = async () => {
    await fetch("http://localhost:3000/report-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId, reason: "悪口" })
    });
    alert("通報しました");
  };

  return (
    <div>
      {text} <button onClick={reportComment}>通報</button>
    </div>
  );
}

export default CommentBox;
