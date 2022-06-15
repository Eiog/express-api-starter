import express from 'express'
import config from 'config'
import useRoutes from './routes' // 路由
import  {logger}  from './utils'
import useMiddleware from './middleware'
import dbConnect from './utils/dbConnect'
const app = express()
useMiddleware(app)
const PORT = config.get<number>('port')

// 启动
app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)
    await dbConnect()
    useRoutes(app)
})