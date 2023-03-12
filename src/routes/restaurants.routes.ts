import { addRestaurants,allRestaurantsList,getOneRestaurant, getRestaurantList, slugWiseRestaurantList, updateRestaurantController } from "../controllers/restaurants.controller";
import express from 'express'
import { MulterUpload } from "../middlewares/multer.middleware";

const router = express.Router()

router.get('/add',getRestaurantList)
router.post('/', MulterUpload.fields([
    {
        name: 'images',
        maxCount: 5
    },
    {
        name: 'menu',
        maxCount: 5
    }
]), addRestaurants)
      
      .get('/',allRestaurantsList)
      .get('/:id',getOneRestaurant)
      .get('/find/:slug',slugWiseRestaurantList)
      .patch('/:id',MulterUpload.fields([
        {
            name: 'images',
            maxCount: 5
        },
        {
            name: 'menu',
            maxCount: 5
        }
    ]),updateRestaurantController)
    

export default router