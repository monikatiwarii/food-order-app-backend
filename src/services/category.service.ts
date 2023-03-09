
import { Category } from "../entities/restaurants/category.entity";
import { categoryType } from "../types/category.type";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";
import { IResponse } from "../types/response.type";
import { category } from "../data/data";


export const getAllCategory = async() : Promise<any> =>{

    const categoryRepository = AppDataSource.getRepository(Category)

    //data insert into table on api call

    category.map(async(cat)=>{
        const category = new Category()
        category.name = cat.name

        const res= await categoryRepository.save(category)
        console.log("res : ",res);

    })
}

export const addCategory = async(bodyData : any) : Promise<IResponse> =>{

    try{
        let param = bodyData
        
        const findCategory = await AppDataSource
        .createQueryBuilder()
        .select("category")
        .from(Category,"category")
        .where("category.name = :name",{name : bodyData.name})
        .getOne()

        if(!!findCategory){
           return Error('Category already exist!',[],409)
        }
        else{
            const category = new Category()
    
            category.name = param.name;
            
            await Category.save(category)
            return Success('Category List!', category)
        }
    }
    catch(e){
        console.log(e)
        return Error(e.message)

    }
   

}

export const fecthAllCategory = async() : Promise<IResponse> =>{
    try{
        const findAllCategories = await AppDataSource
        .getRepository(Category)
        .createQueryBuilder("category")
        .select("category")
        .getMany()
    
        if(!findAllCategories)
            return Error('No Category Found!', [], 404)
        else
            return Success('Category List!', findAllCategories)
    }
    catch(e){
        console.log(e)
        return Error(e.message)
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

        
        if(!findCategory)
            return Error('No Category Found!', [], 404)
        else
            return Success('Category List!', findCategory)
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }
}