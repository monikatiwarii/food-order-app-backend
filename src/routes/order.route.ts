import { allOrderList,orderDatabyId,orderDataByUserId } from "../controllers/order.controller";
import express from 'express'
import { DefaultNamingStrategy } from "typeorm";

const router = express.Router()

router.get('/',allOrderList)
router.get('/:id',orderDatabyId)
router.get('/:userId',orderDataByUserId)

export default router