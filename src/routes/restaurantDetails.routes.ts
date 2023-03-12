import express from "express"
import { allRestaurantDetails } from "../controllers/restaurantDetails.controller";

const router = express.Router()

router.get('/details',allRestaurantDetails)

export default router