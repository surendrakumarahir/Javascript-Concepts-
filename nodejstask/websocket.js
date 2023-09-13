const express = require("express")
const http = require("http")
const WebSocket = require("ws")

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

// Listen for WebSocket connection
wss.on("connection", (ws) => {
  console.log("Client connected")

  // Listen for messages from clients
  ws.on("message", (message) => {
    console.log(`Received: ${message}`)
    // Send a response back to the client
    ws.send(`Server received: ${message}`)
  })

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!")
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
