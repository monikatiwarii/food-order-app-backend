import {fetchAllFoods,findFoodItemById, addFoods, insertFoods, categoryWiseFoods} from '../services/fooditem.service'
import { Request,Response } from "express"
import { foodItemType } from '../types/foodItem.type'
import { IResponse } from '../types/response.type'

export const insertFoodItems = async(req : Request,res : Response) =>{
console.log('in 1 :: :: :: :: :: ')
        const foodList  = await insertFoods() 
        try{
           res.status(200).send({message : 'food list',data:foodList})
        }
        catch(e){
            res.status(500).send({message : 'server error',data:e})
        }
    }

export const addFoodsItem = async(req:Request,res:Response)=>{
console.log('in 2 :: :: :: :: :: ')
    
    try{
        const foodList : IResponse= await addFoods(req.body)
        res.status(foodList.code).send(foodList)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
}

export const allFoodItems = async(req:Request,res:Response)=>{
console.log('in 3 :: :: :: :: :: ')

    try{
        const allfoods = await fetchAllFoods() 
        res.status(allfoods.code).send(allfoods)
    }
    catch(e){
        console.log(e)
       return  res.status(500).send("SERVER ERROR")
    }
}
export const categoryWiseFoodList = async(req:Request,res:Response)=>{
    console.log('in 5 :: :: :: :: :: ')
    
        try{
            const fooditem = await categoryWiseFoods(req)
            res.status(fooditem.code).send(fooditem)
        }
        catch(e){
            console.log(e)
           return res.status(500).send("SERVER ERROR")
        }
    }

export const getOneFoodItem =async(req:Request,res:Response) => {
console.log('in 4 :: :: :: :: :: ')

    try{
        const fooditem = await findFoodItemById(req.params.id)
        res.status(fooditem.code).send(fooditem)
    }
    catch(e){
        console.log(e)
       return res.status(500).send("SERVER ERROR")
    }
}

