import express from 'express'
const router = express.Router()

import { updateCart, fetchCartData } from "../controllers/cart.controller";

router
    .patch('/', updateCart)
    .get('/', fetchCartData)

export default router