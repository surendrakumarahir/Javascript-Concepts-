const socket = new WebSocket("ws://localhost:4000")

// Listen for messages from the server
socket.addEventListener("message", (event) => {
  console.log(`Server says: ${event.data}`)
})

console.log("working")
// Send a message to the server
socket.send("Hello, server!")
