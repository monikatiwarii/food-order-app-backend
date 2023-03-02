import {insertCategory} from '../services/category.service'
import {Request,Response} from 'express'
import { categoryType } from '../types/category.type' 

export const getCategoryList = async (req : Request , res : Response)=>{
    const categoryList : categoryType[] = await insertCategory();
    try{
        res.status(200).json(categoryList)
    }
    catch(e){
        res.status(400).json(e.message)
    }
}