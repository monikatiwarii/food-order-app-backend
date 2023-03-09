import express from 'express'
import { addCartController } from '../controllers/cart.controller'

const router = express.Router()

router.post('/',addCartController)

export default router