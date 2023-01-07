import express from 'express';
import useRoutes from './routes'; // 路由
import { logger } from './utils';
import useMiddleware from './middleware';
import dbConnect from './utils/dbConnect';
const app = express();
app.use('/doc', express.static('src/doc'));
useMiddleware(app);
const PORT = process.env.PORT || '5630';

// 启动
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`);
  await dbConnect();
  useRoutes(app);
});
