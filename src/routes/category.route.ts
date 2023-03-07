import {addCategories, allCategoryList,getOneCategory } from "../controllers/category.controller";
import { verifyToken } from "../utils/jwt";
const express = require('express')
const router = express.Router()

//router.get('/cat',getCategoryList)
router.post('/',verifyToken, addCategories)
router.get('/',verifyToken,allCategoryList)
router.get('/:id',verifyToken,getOneCategory)

export default router