import { getRestaurantList } from "../controllers/restaurants.controller";
import express = require('express')
const router = express.Router()

router.get('/res',getRestaurantList)

export default router