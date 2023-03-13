import { Request,Response } from "express"
import {fetchSelectedCategory } from "../services/selectedCategory.service"
import { IResponse } from "../types/restResponse"

export const allSelectedCategory = async(req:Request,res:Response)=>{
    try{
        const category: IResponse= await fetchSelectedCategory()
        return res.status(category.code).send(category)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
   
}