import * as restaurantService from '../services/restaurants.service'
import { Request,Response } from 'express'
import { restaurantType } from '../types/restaurant.type'


export const getRestaurantList = async(req : Request,res : Response)=>{
    const restaurantList :restaurantType[] = await restaurantService.getAllRestaurants()
    try{
        res.status(200).json(restaurantList)
    }catch(e){
        res.status(400).json(e.message)
    }
}