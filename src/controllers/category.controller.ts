import {addCategory, fecthAllCategory,findCategoryById} from '../services/category.service'
import {Request,Response} from 'express'
import { categoryType } from '../types/category.type' 
import { IResponse } from '../types/restResponse'



// export const getCategoryList = async (req : Request , res : Response)=>{

//     console.log('on category add controller---------    ')
//     const categoryList : categoryType[] = await getAllCategory();
//     try{
//         res.status(200).json(categoryList)
//     }
//     catch(e){
//         res.status(400).json(e.message)
//     }
// }

export const addCategories = async(req:Request,res:Response)=>{
    try{
        const categoryList: IResponse  = await addCategory(req.body)
        res.status(categoryList.code).send(categoryList)
    }
    catch(e){
        console.log(e);
        return res.status(500).send('SERVER ERROR!')
    }
}

export const allCategoryList = async(req:Request,res:Response)=>{
    try{
        const allCategory : IResponse = await fecthAllCategory()

        return res.status(allCategory.code).send(allCategory)
    }
    catch(e){
        console.log(e);
        return res.status(500).send("SERVER ERROR!")
    }
}


export const getOneCategory = async(req:Request,res:Response) =>{
    try{
        const category : IResponse = await findCategoryById(req.params.id)

        return res.status(category.code).send(category)
    }
    catch(e){
        console.log(e);
        return res.status(500).send('SERVER ERROR!')
    }
}