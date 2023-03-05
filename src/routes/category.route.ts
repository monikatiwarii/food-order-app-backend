import {addCategories, allCategoryList,getOneCategory } from "../controllers/category.controller";
const express = require('express')
const router = express.Router()

//router.get('/cat',getCategoryList)
router.post('/',addCategories)
router.get('/',allCategoryList)
router.get('/:id',getOneCategory)

export default router