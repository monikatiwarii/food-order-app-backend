
import { Category } from "../entities/restaurants/category.entity";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";
import { IResponse } from "../types/restResponse";
// import { category } from "../data/data";
// import { Repository } from "typeorm/repository/Repository";

// export const getAllCategory = async() : Promise<any> =>{

//     const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

//     category.map(async(cat)=>{
//         const category: Category = new Category()
//         category.name = cat.name

//         const res: Category = await categoryRepository.save(category)
//     })
// }

export const addCategory = async(bodyData : any) : Promise<IResponse> =>{

    try{
        let param = bodyData
        
        const findCategory: Category = await AppDataSource
        .createQueryBuilder()
        .select("category")
        .from(Category,"category")
        .where("category.name = :name",{name : bodyData.name})
        .getOne()

        if(!!findCategory){
           return Error('Category already exist!',[],409)
        }
        else{
            const category: Category = new Category()
    
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
        const findAllCategories: Category[] = await AppDataSource
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
        const findCategory: Category = await AppDataSource
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