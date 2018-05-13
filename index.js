// @ts-check
let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

http.listen(5000, () => console.log('started on port 5000'))

// TODO - keep them in the db
let state = []

io.on('connection', (socket) => {

  socket.emit('init', state)

  socket.on('moveElements', (data) => {
    state.push(data)
    socket.broadcast.emit('updateElements', data)
  })

})
