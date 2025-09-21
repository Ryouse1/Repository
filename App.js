import React from "react";
import LiveStream from "./LiveStream";

function App() {
  return (
    <div>
      <h1>最終兵器マルチ配信サンプル</h1>
      <LiveStream roomId="room1" />
    </div>
  );
}

export default App;
