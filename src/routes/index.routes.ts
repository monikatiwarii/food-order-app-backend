import categoryRoute from './category.routes'
import restaurantsRoute from './restaurants.routes'
import foodRouter from './fooditem.routes'
import userRouter from './user.routers'
import orderRouter from './order.routes'
import loginRouter from './login.routes'
import cart from './cart.routes'
import * as express from 'express'
import checkOut from './checkout.routes'
import { verifyToken } from '../utils/jwt'

const router = express.Router()

router.use('/login',loginRouter)

router.use(verifyToken)

router.use('/category',categoryRoute)
router.use('/restaurants',restaurantsRoute)
router.use('/foods',foodRouter)
router.use('/user',userRouter)
router.use('/order',orderRouter)
router.use('/cart', cart)
router.use('/checkout', checkOut)


export default router

