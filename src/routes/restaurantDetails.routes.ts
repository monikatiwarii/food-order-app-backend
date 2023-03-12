import express from "express"
import { allFoodList } from "../controllers/foodList.controller";
import { allRestaurantDetails } from "../controllers/restaurantDetails.controller";
import { allSelectedCategory } from "../controllers/selectedCategory.controller";

const router = express.Router()

router.get('/details',allRestaurantDetails)
      .get('/cat',allSelectedCategory)
      .get('/list',allFoodList)

export default router