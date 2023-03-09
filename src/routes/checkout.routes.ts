import express from 'express'
const router = express.Router()

import { checkOut } from '../controllers/checkout.contoller'

router
    .post('/', checkOut)

export default router