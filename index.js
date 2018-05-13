let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

let classA = []
let classB = []

http.listen(5000, () => {
  console.log('started on port 5000')
});

io.on('connection', (socket) => {
  console.log('user connected')

  // socket.on('newCo', function () {
  //   console.log('on new co')
    // io.sockets.emit('updateElements', data = [this.classA, this.classB])
  // })

  socket.on('disconnect', function () {
    console.log('user disconnected')
  })

  // socket.on('moveElements', (classA, classB) => {
  //   console.log('onMove')
  //   this.classA = classA
  //   this.classB = classB
  //   io.sockets.emit('updateElements', data = [this.classA, this.classB])
  // })
})

