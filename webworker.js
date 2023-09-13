// main.js code for main file like html file etc
const worker = new Worker("worker.js")

worker.onmessage = function (event) {
  // get result after worker done
  console.log("Received message from worker:", event.data)
}

worker.postMessage("Hello from the main thread!") // here start working task on self.onmessage function

// worker.js  worker files

self.onmessage = function (event) {
  console.log("Received message in worker:", event.data)

  // Perform some time-consuming task
  const result = event.data + " Worker is done!"

  // Send the result back to the main thread
  self.postMessage(result)
}
