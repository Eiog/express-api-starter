import { Express, Request, Response, Router } from 'express';
// 路由配置接口
interface RouterConf {
  path: string;
  router: Router;
  meta?: unknown;
}

// 路由配置
const routerConf: Array<RouterConf> = [];
function useRoutes(app: Express) {
  // 根目录
  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome Use Express-Ts-Starter');
  });
  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

export default useRoutes;
