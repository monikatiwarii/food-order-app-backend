import { getCategoryList,allCategoryList,getOneCategory } from "../controllers/category.controller";
const express = require('express')
const router = express.Router()

router.get('/cat',getCategoryList)
router.get('/allCategory',allCategoryList)
router.get('/:id',getOneCategory)

export default router