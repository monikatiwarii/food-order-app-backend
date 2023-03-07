import  {addRestaurant,fetchAllRestaurants, findRestaurantsById, updateRestaurant} from '../services/restaurants.service'
import { Request,Response } from 'express'
import { restaurantType } from '../types/restaurant.type'
import { IResponse } from '../types/response.type'


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