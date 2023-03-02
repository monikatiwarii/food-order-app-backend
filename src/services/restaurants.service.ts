import { Restaurants } from "../entities/restaurants/restaurants.entity"
import { AppDataSource } from "../utils/data-source"
import { restaurants } from "../data/data"
import { restaurantType } from "../types/restaurant.type"
import { Success,Error } from "../utils/restResponse"
import { Request,Response } from "express"
import { Category } from "../entities/restaurants/category.entity"
import { categoryType } from "../types/category.type"



export const insertRestaurants = async(req: Request , res : Response) : Promise<any>=>{

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


export const fetchAllRestaurants = async(req : Request,res : Response) : Promise<any> =>{
  try{ 
  const restaurants = await AppDataSource
    .getRepository(Restaurants)
    .createQueryBuilder("restaurant")
    .select("restaurant")
    .getMany()    

    return Success('Restaurants',restaurants)
  }catch(e){
    console.log(e)
    return Error(e)
  }
}

export const findRestaurantsById = async(id:number)=>{

  try {
    const findRestaurants = await AppDataSource
    .createQueryBuilder()
    .select("restaurants")
    .from(Restaurants, "restaurants")
    .where("restaurants.id = :id", { id: id })
    .getOne()

    if(!findRestaurants){
      return Error('No Record found!')
    } else 
      return Success('Restaurant Data', findRestaurants)
   
  } catch (error) {
    console.log(error)
    return Error(error)
  }

} 