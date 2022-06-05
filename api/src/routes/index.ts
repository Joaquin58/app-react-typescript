import { Router } from 'express';
import useRouter from './user'

const router = Router()

router.use('/', useRouter)

export default router