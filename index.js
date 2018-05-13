// @ts-check
let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http, {origins: '*:*'})
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = process.env.PORT || 5000
http.listen(PORT, () => console.log('started on port %s', PORT))

// TODO - keep them in the db
let state = []

io.on('connection', (socket) => {

  socket.emit('init', state)

  socket.on('moveElements', (data) => {
    state.push(data)
    socket.broadcast.emit('updateElements', data)
  })

})
