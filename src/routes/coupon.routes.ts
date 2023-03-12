import express from 'express'
const router = express.Router()

import { addCoupon, updateCoupon, fetchCouponData } from "../controllers/coupon.controller";

router
    .post('/', addCoupon)
    .patch('/:couponId', updateCoupon)
    .get('/:couponName', fetchCouponData)

export default router