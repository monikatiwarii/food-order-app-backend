import { Restaurants } from "../entities/restaurants/restaurants.entity"
import { AppDataSource } from "../utils/data-source"
import { restaurants } from "../data/data"
import { restaurantType } from "../types/restaurant.type"

export const getAllRestaurants = async() : Promise<any> =>{

    const restaurantRepository = AppDataSource.getRepository(Restaurants)

    restaurants.map(async(data)=>{
        const restaurants = new Restaurants()
        restaurants.name = data.name
        restaurants.address = data.address
        restaurants.price = data.averageCost
        restaurants.slug=data.slug
        restaurants.time = data.time
        restaurants.image = data.image

      const res =   await restaurantRepository.save(restaurants)
        console.log('res---------------------',res)
        return res
    })

}