const socket = new WebSocket("ws://localhost:3000")

// Listen for messages from the server
socket.addEventListener("message", (event) => {
  console.log(`Server says: ${event.data}`)
})

// Send a message to the server
socket.send("Hello, server!")
