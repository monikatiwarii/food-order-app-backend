require('dotenv').config()
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import {Restaurants} from '../entities/restaurants/Restaurants.entity'
import { Category } from '../entities/restaurants/Category.entity'
import { RestaurantDescription } from '../entities/restaurants/RestaurantDescription.entity'
import { FoodItem } from '../entities/restaurants/FoodItem.entity'
import { FoodCollection } from '../entities/foods/FoodCollection.entity'
import { FoodList } from '../entities/foods/FoodList.entity'
import { SelectedCategory } from '../entities/restaurants/SelectedCategory.entity'
import { TrandingFood } from '../entities/foods/TrandingFood.entity'
import {Login} from '../entities/login/Login.entity'


type configType = {
    host :string;
    port : number;
    username : string;
    password : string;
    database : string;
}

const postgresConfig : configType = {
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : '1234',
    database : 'foodorder'
}

export const AppDataSource = new DataSource({
    ...postgresConfig,
    type : 'postgres',
    synchronize : true,
    logging : false,
    entities : [Restaurants,Category,RestaurantDescription,FoodItem,FoodCollection,FoodList,SelectedCategory,TrandingFood,Login],
   
})

