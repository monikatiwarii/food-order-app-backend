import { allOrderList,orderDatabyId,orderDataByUserId } from "../controllers/order.controller";
import express from 'express'

const router = express.Router()

router.get('/',allOrderList)
      .get('/:id',orderDatabyId)
      .get('/:userId',orderDataByUserId)

export default router