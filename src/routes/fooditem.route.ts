import {allFoodItems,getOneFoodItem, addFoodsItem } from '../controllers/fooditem.controller'
import express = require('express')
import { MulterUpload } from '../middlewares/multer.middleware'
const router = express.Router()

// router.get('/food',insertFoodItems)
router.post('/',MulterUpload.single('image'), addFoodsItem)
router.get('/',allFoodItems)
router.get('/:id',getOneFoodItem)

export default router