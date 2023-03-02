import { InsertResult } from "typeorm";
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

export const fecthAllCategory = async()=>{
    try{
        const findAllCategories : categoryType[] = await AppDataSource.getRepository(Category)
        .createQueryBuilder("category")
        .select("category")
        .getMany()
    
        return findAllCategories
    }
    catch(error){
        console.log(error)
        return error
    }
}

export const findCategoryById = async(id:string)=>{
    try{
        const findCategory = await AppDataSource
        .createQueryBuilder()
        .select("category")
        .from(Category,"category")
        .where("category.id = :id",{id:parseInt(id)})
        .getOne()

        return findCategory
    }
    catch(error){
        console.log(error)
        return error
    }
}