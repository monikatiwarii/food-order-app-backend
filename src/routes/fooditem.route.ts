import { insertFoodItems,allFoodItems,getOneFoodItem } from '../controllers/fooditem.controller'
import express = require('express')
const router = express.Router()


router.get('/food',insertFoodItems)
router.get('/allFoods',allFoodItems)
router.get('/:id',getOneFoodItem)

export default router