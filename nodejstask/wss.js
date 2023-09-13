const expess = require("express")
const WebSocket = require("ws")
const http = require("http")

const app = expess()

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

const clients = new Set()

wss.on("connection", (ws) => {
  //console.log("connected", ws)
  clients.add(ws)
  ws.on("close", () => {
    console.log("client disconnect")
    clients.delete(ws)
  })

  ws.on("message", (message) => {
    console.log(`Received: ${message}`)
    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    }
  })
})

server.listen(3200, () => {
  console.log("listing on sever")
})
