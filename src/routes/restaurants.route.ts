import { insertRestaurant,allRestaurantsList,getOneRestaurant } from "../controllers/restaurants.controller";
import express = require('express')
const router = express.Router()

router.get('/res',insertRestaurant)
router.get('/allRestaurants',allRestaurantsList)
router.get('/findRestaurant/:id',getOneRestaurant)

export default router