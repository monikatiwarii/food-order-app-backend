import { category } from "../data/data";
import { Category } from "../entities/restaurants/category.entity";
import { categoryType } from "../types/category.type";
import { AppDataSource } from "../utils/data-source";

export const insertCategory = async() : Promise<any> =>{

    const categoryRepository = AppDataSource.getRepository(Category)
    //data insert into table on api call
    category.map(async(cat)=>{
        const category = new Category()
        category.name = cat.name

        const res= await categoryRepository.save(category)
        console.log("res : ",res);
        return res
        
    })
}