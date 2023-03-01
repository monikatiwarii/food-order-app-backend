import * as  foodItemService from '../services/fooditem.service'
import { json, Request,Response } from 'express'
import { foodItemType } from '../types/foodItem.type'
import { AppDataSource } from '../utils/data-source'

export const getAllFoods = async(req : Request,res : Response) =>{

    const foodList : foodItemType[] = await foodItemService.getAllFoods() 
    try{
        res.status(200).json(foodList)
    }
    catch(error){
        res.status(400).json(error.message)
    }
}