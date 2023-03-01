import type { Server } from 'http'
import { Server as SocketServer } from 'socket.io'
const io = (server: Server) => {
  const io = new SocketServer(server, {
    cors: {
      origin: '*',
    },
  })
  io.of('/').on('connection', (socket) => {
    // ...
    socket.on('home', (arg, callback) => {
      callback('return')
    })
  })
}

export default io
