import './App.css'
import { useEffect, useRef, useState } from 'react'
function App() {
const inputBox=useRef()
const [socket,setSocket]=useState()

useEffect(()=>
  {
    const ws=new WebSocket("ws://localhost:8080")
    setSocket(ws)
 
  },[])
function sendMessage()
{
  if(!socket) return
  const message=inputBox.current.value
    socket.send(message)
}

  return (
    <>
      <div>
        <div>
          <h2>Broadcast Chat App</h2>
        </div>
        <div>
        <p></p>
        </div>
        <div>
          <input ref={inputBox} type="text" />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
