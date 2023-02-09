// user.schema.ts
// 接口参数校验 主要使用zod，具体使用可查看文档

import type { TypeOf } from 'zod'
import { number, object, string } from 'zod'

// 创建接口
export const defaultReadSchema = object({
  body: object({
    page: number(),
    limit: number(),
  }),
  query: object({
    page: string(),
    limit: string(),
  }),
})

export type DefaultReadInput = Omit<
  TypeOf<typeof defaultReadSchema>,
  'body.passwordConfirmation'
>
