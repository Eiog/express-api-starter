import { createServer } from 'http'
import express from 'express'
import useRoutes from './routes' // 路由
import { logger } from './utils'
import useMiddleware from './middleware'
import dbConnect from './utils/dbConnect'
import useSocketIo from './socket.io'
const app = express()
app.use('/doc', express.static('doc'))
useMiddleware(app)
const PORT = process.env.PORT as unknown as number || 5630
const httpServer = createServer(app)
useSocketIo(httpServer)
httpServer.listen(PORT, undefined, undefined, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await dbConnect()
  useRoutes(app)
})
