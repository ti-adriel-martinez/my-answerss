const express = require('express')
const { Server } = require("socket.io")
const { createServer } = require('http')
const app = express()
const httpServer = createServer(app);
const path = require("path")
const port = 3000
const io = new Server(httpServer, {})




// io.on("connection", (socket) => {
  
//   console.log("socket connected successfully")

//   socket.on("answer-is-a", ()=> {
//     console.log("Answer is a")
//   })
//   socket.on("answer-is-b", ()=> {
//     console.log("Answer is b")
//   })
//   socket.on("answer-is-c", ()=> {
//     console.log("Answer is c")
//   })
//   socket.on("answer-is-d", ()=> {
//     console.log("Answer is d")
//   })
//   socket.on("answer-is-e", ()=> {
//     console.log("Answer is e")
//   })


// })





app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json());
app.post('/', (req, res) => {
  console.log("Answer received:", req.body)
  io.emit(`answer-is-${req.body.answer || "--"}`)
  res.send("OK")
})

app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, 'public')))

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})