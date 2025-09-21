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

  return (
    <div>
      <div>
        {messages.map((msg, i) => <div key={i}>{msg}</div>)}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={sendComment}>送信</button>
    </div>
  );
}

export default CommentBox;
