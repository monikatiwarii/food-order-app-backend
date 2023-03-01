import { getAllFoods } from '../controllers/fooditem.controller'
import express = require('express')
const router = express.Router()


router.get('/food',getAllFoods)

export default router