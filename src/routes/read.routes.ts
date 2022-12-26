import { Router } from 'express';
import validate from '../middleware/validate';
import { defaultReadSchema } from '../schema/default.schema';

const router = Router();

// 需要校验接口参数的，加上校验中间件
router.post('/create', validate(defaultReadSchema));

export default router;
