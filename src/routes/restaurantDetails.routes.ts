import express from "express"
import { allRestaurantDetails } from "../controllers/restaurantDetails.controller";
import { allSelectedCategory } from "../controllers/selectedCategory.controller";

const router = express.Router()

router.get('/details',allRestaurantDetails)
      .get('/cat',allSelectedCategory)

export default router