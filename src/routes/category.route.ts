import {addCategories, allCategoryList,getOneCategory } from "../controllers/category.controller";
import { verifyToken } from "../utils/jwt";
import express from 'express'
const router = express.Router()


router.post('/',verifyToken, addCategories)
      .get('/',verifyToken,allCategoryList)
      .get('/:id',verifyToken,getOneCategory)

export default router