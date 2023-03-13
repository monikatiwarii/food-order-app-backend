import {fetchAllFoods,findFoodItemById, addFoods, insertFoods, categoryWiseFoods, findFoodItemByName} from '../services/fooditem.service'
import { Request,Response } from "express"
import { IResponse } from '../types/restResponse'

export const insertFoodItems = async(req : Request,res : Response) =>{
    try{
        const foodList: void  = await insertFoods() 
        res.status(200).send({message : 'food list',data:foodList})
    }
    catch(e){
        res.status(500).send({message : 'server error',data:e})
    }
}

export const addFoodsItem = async(req:Request,res:Response)=>{
    try{
        const foodList: IResponse = await addFoods(req.body)
        res.status(foodList.code).send(foodList)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
}

export const allFoodItems = async(req:Request,res:Response)=>{
    try{
        const allfoods: IResponse = await fetchAllFoods() 
        res.status(allfoods.code).send(allfoods)
    }
    catch(e){
        console.log(e)
       return  res.status(500).send("SERVER ERROR")
    }
}
export const categoryWiseFoodList = async(req:Request,res:Response)=>{
    try{
        const fooditem: IResponse = await categoryWiseFoods(req)
        res.status(fooditem.code).send(fooditem)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
}

export const getOneFoodItem =async(req:Request,res:Response) => {
    try{
        const fooditem: IResponse = await findFoodItemById(req.params.id)
        res.status(fooditem.code).send(fooditem)
    }
    catch(e){
        console.log(e)
       return res.status(500).send("SERVER ERROR")
    }
}

// getFoodsByName
export const getFoodsByName =async(req:Request,res:Response) => {
    try{
        const fooditem: IResponse = await findFoodItemByName(req.params.name)
        res.status(fooditem.code).send(fooditem)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
}
