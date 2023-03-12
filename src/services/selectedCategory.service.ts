import { SelectedCategory } from "../entities/restaurants/selectedCategory.entity"
import { IResponse } from "../types/response.type"
import { AppDataSource } from "../utils/data-source"
import { Error, Success } from "../utils/restResponse"

export const fetchSelectedCategory = async() : Promise<IResponse> =>{
    try{
        const category   = await AppDataSource.getRepository(SelectedCategory)
        .createQueryBuilder("selCategory")
        .select("selCategory")
        .getMany()

        if(!category)
            return Error('No category  Found!', [], 404)
        else
        return Success('Category List!', category) 
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }   
}