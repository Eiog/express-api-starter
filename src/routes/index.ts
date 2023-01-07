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
    /**
     * @api {get} /user/:id Request User information
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiParam {Number} id User's unique ID.
     *
     * @apiSuccess {String} firstname Firstname of the User.
     * @apiSuccess {String} lastname  Lastname of the User.
     */
    res.send('Welcome Use Express-Ts-Starter');
  });
  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

export default useRoutes;
