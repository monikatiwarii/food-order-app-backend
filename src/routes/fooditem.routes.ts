import {allFoodItems,getOneFoodItem, addFoodsItem, insertFoodItems, categoryWiseFoodList, getFoodsByName } from '../controllers/fooditem.controller'
import express from 'express'
import { MulterUpload } from '../middlewares/multer.middleware'
const router = express.Router()


router.post('/',MulterUpload.single('image'), addFoodsItem)
      .get('/add',insertFoodItems)
      .get('/',allFoodItems)
      .get('/category/:cId/:rId',categoryWiseFoodList)
      .get('/:id',getOneFoodItem)   
      .get('/find/:name', getFoodsByName)   
      // /find/dessert
      

export default router