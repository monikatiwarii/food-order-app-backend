import categoryRoute from './category.routes'
import restaurantsRoute from './restaurants.routes'
import foodRouter from './fooditem.routes'
import userRouter from './user.routers'
import orderRouter from './order.routes'
import loginRouter from './login.routes'
import cart from './cart.routes'
import coupon from './coupon.routes'
import restaurantDetails from './restaurantDetails.routes'
import * as express from 'express'
import checkOut from './checkout.routes'
import { verifyToken } from '../utils/jwt'

const router = express.Router()

router.use('/login',loginRouter)

router.use('/category',categoryRoute)
router.use('/restaurants',restaurantsRoute)
router.use('/foods',foodRouter)
router.use('/user',userRouter)
router.use('/res',restaurantDetails)
router.use(verifyToken)

router.use('/cart', cart)
router.use('/coupons', coupon)
router.use('/order',orderRouter)
router.use('/checkout', checkOut)


export default router

