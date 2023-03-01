import categoryRoute from '../routes/category.route'
import restaurantsRoute from '../routes/restaurants.route'
import foodRouter from '../routes/fooditem.route'
import * as express from 'express'

const router = express.Router()

router.use('/category',categoryRoute)
router.use('/restaurants',restaurantsRoute)
router.use('/foods',foodRouter)

export default router