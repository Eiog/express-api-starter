import { Request, Response, NextFunction } from 'express';
const realIp = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.realIp)
    req.body.realIp =
      req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || null;
  if (!req.body.headers) req.body.headers = req.headers || null;
  next();
};
export default realIp;
