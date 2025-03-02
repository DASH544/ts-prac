import { useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [socket, setSocket] = useState();
  const msg = useRef();

  function sendMessage() {
    if (!socket) return;
    const message = msg.current.value;
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <>
      <div>
        <input ref={msg} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

export default App;
