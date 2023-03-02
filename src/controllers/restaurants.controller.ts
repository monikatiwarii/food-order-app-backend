import  {insertRestaurants,fetchAllRestaurants, findRestaurantsById} from '../services/restaurants.service'
import { Request,Response } from 'express'
import { restaurantType } from '../types/restaurant.type'

export const insertRestaurant = async(req : Request,res : Response)=>{
    const restaurantList :restaurantType[] = await insertRestaurants(req, res)
    try{
        res.status(200).json(restaurantList)
    }catch(e){
        res.status(400).json(e.message)
    }
}

export const allRestaurantsList = async(req:Request,res:Response)=>{
    const allRestaurants = await  fetchAllRestaurants(req,res)

    try{
        res.status(200).json(allRestaurants)
    }
    catch(e){
        res.status(400).json(e.message)
    }
}

export const getOneRestaurant = async(req:Request,res:Response)=>{
    console.log('on find restaurent :: :: :: :: :: ');
    
    interface Params{
        id?: number
    }
    try{
        let params: Params = req.params
        const allRestaurants = await findRestaurantsById(params.id)
        console.log({allRestaurants})
        return res.status(200).json(allRestaurants)
        //return allRestaurants
    }
    catch(e){
        return res.status(400).json(e.message)
    }
}