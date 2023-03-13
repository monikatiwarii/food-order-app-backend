import {addCategories, allCategoryList,getOneCategory } from "../controllers/category.controller";
import express from 'express'

const router = express.Router()

router.post('/', addCategories)
      // .get('/add',getCategoryList)
      .get('/', allCategoryList)
      .get('/:id', getOneCategory)
      
     

export default router