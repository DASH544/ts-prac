import { WebSocketServer,WebSocket } from "ws";

const wss=new WebSocketServer({port:8080})
let userCount=0
let allSocket:WebSocket[]=[]
wss.on("connection",(socket)=>
    {
        allSocket.push(socket)
        userCount++
        console.log(
            "user connected"+userCount
        )
        socket.on("message",(message)=>
            {
                console.log("message recieved "+message.toString()) 
                allSocket.forEach((e)=>
                    {
                        const s=e
                        s.send(message.toString())
                    })
            })
    })