import {allFoodItems,getOneFoodItem, addFoodsItem } from '../controllers/fooditem.controller'
import express from 'express'
import { MulterUpload } from '../middlewares/multer.middleware'
const router = express.Router()


router.post('/',MulterUpload.single('image'), addFoodsItem)
      .get('/',allFoodItems)
      .get('/:id',getOneFoodItem)

export default router