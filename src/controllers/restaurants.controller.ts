import  {addRestaurant,fetchAllRestaurants, findRestaurantsById, getAllRestaurants, slugWiseRestaurant, updateRestaurant} from '../services/restaurants.service'
import { Request,Response } from 'express'
import { restaurantType } from '../types/restaurant.type'
import { IResponse } from '../types/response.type'
import { restaurants } from '../data/data'
import { AppDataSource } from '../utils/data-source'
import { Restaurants } from '../entities/restaurants/restaurants.entity'




export const getRestaurantList = async(req : Request,res : Response)=>{
    const restaurantList :restaurantType[] = await getAllRestaurants()
    try{
        res.status(200).json(restaurantList)
    }catch(e){
        res.status(400).json(e.message)
    }
}

export const addRestaurants = async(req:Request,res:Response) =>{
    try{
       
        const restaurant :IResponse  = await addRestaurant(req)
        return res.status(restaurant.code).send(restaurant)
    }catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR!")
    }
} 

export const allRestaurantsList = async(req:Request,res:Response)=>{
    
    try{
        const allRestaurants : IResponse = await  fetchAllRestaurants()
        res.status(allRestaurants.code).send(allRestaurants)
    }
    catch(e){
        console.log(e);
        return res.status(500).send("SERVER ERROR!")

     }
}

export const slugWiseRestaurantList = async(req:Request,res:Response)=>{
   
    try{
        const restaurant = await slugWiseRestaurant(req.params.slug)      
        res.status(restaurant.code).send(restaurant)
    }
    catch(e){
        console.log(e);
        return res.status(500).send("SERVER ERROR!")

     }
} 

export const getOneRestaurant = async(req:Request,res:Response)  =>{
    try{
        const restaurant: IResponse = await findRestaurantsById(req.params.id)

        return res.status(restaurant.code).send(restaurant)
    }
    catch(e){
        console.log(e);
        return res.status(500).send("SERVER ERROR!")  
    }
}

export const updateRestaurantController  = async(req:Request,res:Response)=>{

    try{
        const restaurant: IResponse = await updateRestaurant(req)
        return res.status(restaurant.code).send(restaurant)
    }
    catch(e){
        console.log(e);
         return res.status(500).send("SERVER ERROR!")  
    }
}