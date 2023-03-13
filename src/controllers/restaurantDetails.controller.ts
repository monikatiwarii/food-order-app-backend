import { fetchRestaurantDetails } from "../services/restaurantDescription.service"
import { Request,Response } from "express"
import { IResponse } from "../types/restResponse"

export const allRestaurantDetails = async(req:Request,res:Response)=>{
   
    try{
        const restaurant: IResponse= await fetchRestaurantDetails()
        return res.status(restaurant.code).send(restaurant)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
   
}