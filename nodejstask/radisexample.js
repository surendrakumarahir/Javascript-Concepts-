const express = require("express")
const redis = require("redis")
const rateLimit = require("express-rate-limit")

const app = express()
const client = redis.createClient({
  legacyMode: true,
  PORT: 6000,
})
client.connect().catch(console.error) // Create a Redis client

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 per min
  max: 6,
  message: "Too must requests",
})

app.use(limiter)
// Simulated data
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 150 },
]

// Middleware to cache data
function cacheData(req, res, next) {
  const key = req.originalUrl // Use the request URL as the cache key

  client.get(key, (err, cachedData) => {
    if (err) throw err

    if (cachedData !== null) {
      // If cached data exists, send it as the response
      console.log("Cache hit:", key)
      res.json(JSON.parse(cachedData))
    } else {
      // If no cached data, proceed to the route handler
      console.log("Cache miss:", key)
      next()
    }
  })
}

// Route to get products
app.get("/products", cacheData, (req, res) => {
  // Simulated delay to simulate slow database query
  setTimeout(() => {
    console.log("Fetching from database")
    res.json(products)
    // Cache the data for 10 seconds
    client.setex(req.originalUrl, 100, JSON.stringify(products))
  }, 2000)
})

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
