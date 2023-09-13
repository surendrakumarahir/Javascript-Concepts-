const express = require("express")
const bodyParser = require("body-parser")
const users = require("./constants")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const saltValue = 10
const secret = "secret"

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// const token = jwt.sign({ name: "surendra", email: "data" }, secret, {
//   expiresIn: "1h",
// })
// console.log("token", token)
// console.log(jwt.verify(token, secret))

// async function passwordHash() {
//   const data = await bycript.hash("surendra", saltValue)
//   console.log(data)
//   return data
// }
// const password = passwordHash()
// console.log(password)

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" })
  }
  const token = authHeader.split(" ")[1]
  console.log(token)
  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Authorization header missing" })
    }
    console.log("user", user)
    next()
  })
}

app.get("/users", (req, res) => {
  console.log(req.query)
  res.status(200).send(users)
})

app.post("/users", authMiddleware, (req, res) => {
  const { name, email, password } = req.body
  console.log(req.body, users)
  if (name && email && password) {
    users.push(req.body)
    res.status(200).send({
      data: {
        name,
        email,
        password,
      },
    })
  } else {
    res.status(500).send({ error: "values are not proper" })
  }
})

app.delete("/users/:name", (req, res) => {
  const { name } = req.params
  console.log("name", name)
  const findIndex = users.findIndex((item) => item.name === name)
  console.log("find", findIndex)
  if (findIndex > 0) {
    users.splice(findIndex, 1)
    res.status(200).send({ data: "deleted" })
  } else {
    res.status(500).send({ error: "user not exist" })
  }
})

app.put("/users/:name", (req, res) => {
  const { name } = req.params
  const { email } = req.body
  console.log(name)
  const findIndex = users.findIndex((user) => user.name === name)
  if (findIndex > 0) {
    users[findIndex].name = name
    users[findIndex].email = email
    res.status(200).send({ data: "update" })
  } else {
    res.status(500).send({ error: "user not exist" })
  }
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body
  console.log(password)
  const userIndex = users.findIndex((user) => user.email === email)
  if (userIndex > 0) {
    console.log(users[userIndex])
    // const bcryptPass = await bcrypt.hash("password", saltValue)
    // console.log("bycryptPass", bcryptPass)
    const check = await bcrypt.compare(password, users[userIndex].password)
    console.log("check", check)
    const token = await jwt.sign(users[userIndex], secret, {
      expiresIn: "1h",
    })
    if (check) {
      res.status(200).send({
        data: {
          user: {
            ...users[userIndex],
            token: token,
          },
        },
      })
    } else {
      res.status(401).send({ error: "wrong password" })
    }
  } else {
    res.status(404).send({ error: "status not found" })
  }
})

app.listen(5000, () => {
  console.log("server running")
})
