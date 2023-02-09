import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
export const signkey = md5('UNLIT-BLOG')
export const authValidate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token: string | undefined
    = req.headers.authorization || req.body.token || req.query.token || undefined
  if (token) {
    jwt.verify(token, signkey, async (err, data: any) => {
      if (!err)
        req._auth = data._id as string
    })
  }
  next()
}
export const accessValidate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req._auth)
    return res.status(401).send({ msg: '登录失效' })
  if (req.path.match(/create/))
    req.body._creator = req._auth
  else
    req.body._operator = req._auth

  next()
}
