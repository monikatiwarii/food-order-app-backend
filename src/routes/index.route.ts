import categoryRoute from '../routes/category.route'
import * as express from 'express'

const router = express.Router()

router.use('/category',categoryRoute)

export default router