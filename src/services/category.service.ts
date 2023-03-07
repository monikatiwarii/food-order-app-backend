import { InsertResult } from "typeorm";
import { category } from "../data/data";
import { Category } from "../entities/restaurants/category.entity";
import { categoryType } from "../types/category.type";
import { AppDataSource } from "../utils/data-source";
import { Request,Response } from "express";


// export const insertCategory = async() : Promise<any> =>{

//     const categoryRepository = AppDataSource.getRepository(Category)
//     //data insert into table on api call
//     category.map(async(cat)=>{
//         const category = new Category()
//         category.name = cat.name
//         const res= await categoryRepository.save(category)
//         console.log("res : ",res);
//         return res
        
//     })
// }

export const addCategory = async(req:Request,res:Response)=>{

    try{
        let param = req.body
        const category = new Category()
    
        category.name = param.name;
        category.restaurants = param.restaurants;
        await Category.save(category)
    
        return category
    }
    catch(e){
        console.log(e)
        return e
    }
   

}

export const fecthAllCategory = async()=>{
    try{
        const findAllCategories = await AppDataSource
        .getRepository(Category)
        .createQueryBuilder("category")
        .select("category")
        .getMany()
    
        return findAllCategories
    }
    catch(e){
        console.log(e)
        return e
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
    catch(e){
        console.log(e)
        return e
    }
}