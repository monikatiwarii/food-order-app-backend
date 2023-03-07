import {addCategory, fecthAllCategory,findCategoryById} from '../services/category.service'
import {Request,Response} from 'express'
import { categoryType } from '../types/category.type' 


export const addCategories = async(req:Request,res:Response)=>{
    try{
        const categoryList = await addCategory(req,res)

        res.status(200).send({message:'category added!',data:categoryList})
    }
    catch(e){
        console.log(e);
        return res.status(500).send({message:e.message})
    }
   


}

export const allCategoryList = async(req:Request,res:Response)=>{
    try{
        const allCategory : categoryType[] = await fecthAllCategory()

        if(allCategory.length === 0){
            return res.status(200).send({message:'No record found!'})
        }
        return res.status(200).send({message:'category list',data:allCategory})
    }
    catch(e){
        console.log(e);
        return res.status(500).send({message:e.message})
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
        console.log(e);
        return res.status(500).send({message:e.message}) 
    }
}