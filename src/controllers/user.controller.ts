import { fetchAllUser} from "../services/user.service";
import { Request,Response } from "express";



export const allUsers = async(req:Request,res:Response)=>{
   
    try{
        const users = await fetchAllUser()

        if(users.length === 0){
            return res.status(404).send({message:'No record found!'})
        }
        return res.status(200).send({message:'Users',data:users})
    }
    catch(error){
        console.log(error)
        return res.status(500).send({message:'server error'})
    }
   
}