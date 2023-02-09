import type { Express } from 'express'
import express from 'express'
import responseHeader from './responseHeader'

function useMiddleware(app: Express) {
  app.use(express.json())
  app.use(responseHeader)
}

export default useMiddleware
