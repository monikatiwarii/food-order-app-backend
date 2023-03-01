import categoryRoute from '../routes/category.route'
import restaurantsRoute from '../routes/restaurants.route'
import * as express from 'express'

const router = express.Router()

router.use('/category',categoryRoute)
router.use('/restaurants',restaurantsRoute)

export default router