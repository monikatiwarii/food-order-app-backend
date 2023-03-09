import { addCartService } from "../services/cart.service";
import { Request,Response } from "express";
import { Error } from "../utils/restResponse";

export const addCartController = async(req:Request,res:Response)=>{
   
   try{
        const addCartData = await addCartService(req)
        return res.status(addCartData.code).send(addCartData)
   } 
   catch(e){
    console.log(e)
    return Error(e.message)
   }
}