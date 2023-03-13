import { foodList } from "../entities/foods/foodList.entity"
import { foodListType } from "../types/foodList.type"
import { IResponse } from "../types/restResponse"
import { AppDataSource } from "../utils/data-source"
import { Error, Success } from "../utils/restResponse"

export const fetchFoodList = async() : Promise<IResponse> =>{
    try{
        const foodlist : foodListType[]  = await AppDataSource.getRepository(foodList)
        .createQueryBuilder("resDescription")
        .select("resDescription")
        .getMany()
        
        if(!foodlist)
            return Error('No detail  Found!', [], 404)
        else
        return Success('Foods List!', foodlist) 
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }
}