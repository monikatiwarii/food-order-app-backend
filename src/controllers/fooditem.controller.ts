import {insertFoods,fetchAllFoods,findFoodItemById} from '../services/fooditem.service'
import { Request,Response } from "express"
import { foodItemType } from '../types/foodItem.type'


export const insertFoodItems = async(req : Request,res : Response) =>{

    const foodList : foodItemType[] = await insertFoods() 
    try{
        res.status(200).send({message : 'food list',data:foodList})
    }
    catch(e){
        res.status(500).send({message : 'server error',data:e})
    }
}

export const allFoodItems = async(req:Request,res:Response)=>{
    try{
        const allfoods = await fetchAllFoods() 
        if(allfoods.length === 0){
            res.status(404).send({message : 'No recod founds!'})
        }else{
            res.status(200).send({message : 'food list',data:allfoods})
        }
    }
    catch(e){
        console.log(e)
       return res.status(500).send({message : 'server error',data:e})
    }
}

export const getOneFoodItem =async(req:Request,res:Response) => {

    try{
        const fooditem = await findFoodItemById(req.params.id)

        if(!fooditem){
            res.status(404).send({message : 'No recod founds!'})
        }
        else{
            res.status(200).send({message : 'food list',data:fooditem})
        }
    }
    catch(e){
        console.log(e)
       return res.status(500).send({message : 'server error',data:e}) 
    }
    
}