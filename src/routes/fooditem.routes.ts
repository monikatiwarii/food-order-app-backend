import {allFoodItems,getOneFoodItem, addFoodsItem, insertFoodItems } from '../controllers/fooditem.controller'
import express from 'express'
import { MulterUpload } from '../middlewares/multer.middleware'
const router = express.Router()


router.post('/',MulterUpload.single('image'), addFoodsItem)
      .get('/add',insertFoodItems)
      .get('/',allFoodItems)
      .get('/:id',getOneFoodItem)

export default router