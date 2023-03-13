import { Category } from "../entities/restaurants/category.entity"
import { SelectedCategory } from "../entities/restaurants/selectedCategory.entity"
import { IResponse } from "../types/restResponse"
import { AppDataSource } from "../utils/data-source"
import { Error, Success } from "../utils/restResponse"

export const fetchSelectedCategory = async() : Promise<IResponse> =>{
    try{
        const category: SelectedCategory[] = await AppDataSource
            .getRepository(SelectedCategory)
            .createQueryBuilder("selCategory")
            .select("selCategory")
            .orderBy("selCategory.id","ASC")
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