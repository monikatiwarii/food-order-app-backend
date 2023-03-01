require('dotenv').config()
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import {Restaurants} from '../entities/restaurants/restaurants.entity'
import { Category } from '../entities/restaurants/category.entity'
import { RestaurantDescription } from '../entities/restaurants/restaurantDescription.entity'
import { FoodItem } from '../entities/restaurants/foodItem.entity'
import { foodCollection } from '../entities/foods/foodCollection.entity'
import { foodList } from '../entities/foods/foodList.entity'
import { SelectedCategory } from '../entities/restaurants/selectedCategory.entity'
import { trandingFood } from '../entities/foods/trandingFood.entity'
import {login} from '../entities/login/Login.entity'


type configType = {
    host :string;
    port : number;
    username : string;
    password : string;
    database : string;
}

const postgresConfig : configType = {
    // host : process.env.POSTGRES_HOST || 'localhost',
    // port : parseInt( process.env.POSTGRES_PORT) || 5432,
    // username : process.env.POSTGRES_USERNAME || 'postgres',
    // password : process.env.POSTGRES_PASSWORD || '1234',
    // database : process.env.POSTGRES_DATABASE || 'foodorder'
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : '1234',
    database:'foodorder'
}

export const AppDataSource = new DataSource({
    ...postgresConfig,
    type : 'postgres',
    synchronize : true,
    logging : false,
    entities : [Restaurants,Category,FoodItem,RestaurantDescription,FoodItem]
        // ,foodCollection,foodList,SelectedCategory,trandingFood,login],
   
})

