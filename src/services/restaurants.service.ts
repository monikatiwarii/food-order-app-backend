import { Restaurants } from "../entities/restaurants/restaurants.entity"
import { AppDataSource } from "../utils/data-source"
import { restaurants } from "../data/data"

export const getAllRestaurants = async() : Promise<any[]> =>{

    const restaurantRepository = AppDataSource.getRepository(Restaurants)

    restaurants.map(async(data)=>{
        
    })

}