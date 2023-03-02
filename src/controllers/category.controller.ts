import {insertCategory,fecthAllCategory,findCategoryById} from '../services/category.service'
import {Request,Response} from 'express'
import { categoryType } from '../types/category.type' 

export const getCategoryList = async (req : Request , res : Response)=>{
    
    try{
        const categoryList : categoryType[] = await insertCategory();
        return res.status(200).send({message:'category list',data:categoryList})
    }
    catch(e){
        return res.status(500).send({message : 'server error',data:e})
    }
}

export const allCategoryList = async(req:Request,res:Response)=>{
    try{
        const allCategory : categoryType[] = await fecthAllCategory()

        console.log('all category-----',allCategory)
        if(allCategory.length === 0){
            return res.status(200).send({message:'No record found!'})
        }
        return res.status(200).send({message:'category list',data:allCategory})
    }
    catch(e){
        return res.status(500).send({message : 'server error',data:e})
    }
}


export const getOneCategory = async(req:Request,res:Response) =>{
    try{
        const category = await findCategoryById(req.params.id)

        if(!category){
            return res.status(200).send({message:'No record found!'})
        }
        return res.status(200).send({message:'category list',data:category})
    }
    catch(e){
        return res.status(500).send({message : 'server error',data:e}) 
    }
}