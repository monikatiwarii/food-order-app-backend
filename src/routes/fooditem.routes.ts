import {allFoodItems,getOneFoodItem, addFoodsItem, insertFoodItems, categoryWiseFoodList } from '../controllers/fooditem.controller'
import express from 'express'
import { MulterUpload } from '../middlewares/multer.middleware'
const router = express.Router()


router.post('/',MulterUpload.single('image'), addFoodsItem)
      .get('/add',insertFoodItems)
      .get('/',allFoodItems)
      .get('/category/:cId/:rId',categoryWiseFoodList)
      .get('/:id',getOneFoodItem)   
      

export default router