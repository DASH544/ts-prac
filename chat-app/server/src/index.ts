import { WebSocketServer,WebSocket } from "ws";

const wss=new WebSocketServer({port:8080})

const arena=new Map<string,Set<WebSocket>>()
// const user=new Map<WebSocket,string>()
wss.on("connection",(socket)=>
    {
      socket.on("error",console.error)
      socket.on('message',function message(data)
      {
        const parsedMessage=JSON.parse(data.toString())
        if(parsedMessage.type==="join")
            {
                const roomName=parsedMessage.roomId
                arena.set(roomName,new Set())
            }
      })
    })