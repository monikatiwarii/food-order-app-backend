
import { Request,Response } from "express"
import { fetchFoodList } from "../services/foodList.service"

export const allFoodList = async(req:Request,res:Response)=>{
   
    try{
        const foods= await fetchFoodList()
        return res.status(foods.code).send(foods)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
   
}