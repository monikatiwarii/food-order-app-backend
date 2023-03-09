import categoryRoute from '../routes/category.route'
import restaurantsRoute from '../routes/restaurants.route'
import foodRouter from '../routes/fooditem.route'
import userRouter from '../routes/user.router'
import orderRouter from '../routes/order.route'
import loginRouter from '../routes/login.route'
import cart from '../routes/cart.routes'
import * as express from 'express'
import checkOut from '../routes/checkout.routes'
// import { verifyToken } from '../utils/jwt'

const router = express.Router()

router.use('/login',loginRouter)

// router.use(verifyToken)

router.use('/category',categoryRoute)
router.use('/restaurants',restaurantsRoute)
router.use('/foods',foodRouter)
router.use('/user',userRouter)
router.use('/order',orderRouter)
router.use('/cart', cart)
router.use('/checkout', checkOut)


export default router

