import { updateCart } from "../controllers/cart.controller";

import express from 'express'

const router = express.Router()

router
    .patch('/', updateCart)
     

export default router