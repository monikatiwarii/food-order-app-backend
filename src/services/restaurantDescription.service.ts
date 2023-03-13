import { RestaurantDescription } from "../entities/restaurants/restaurantDescription.entity"
import { IResponse } from "../types/restResponse"
import { AppDataSource } from "../utils/data-source"
import { Error, Success } from "../utils/restResponse"

export const fetchRestaurantDetails = async() : Promise<IResponse> =>{
    try{
        const restaurant : RestaurantDescription[]  = await AppDataSource.getRepository(RestaurantDescription)
            .createQueryBuilder("resDescription")
            .select("resDescription")
            .getMany()

        if(!restaurant)
            return Error('No detail  Found!', [], 404)
        else
            return Success('Restaurant List!', restaurant) 
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }
}