import { fetchAllUser,addUser, deleteUser, findUserById} from "../services/user.service";
import { Request,Response } from "express";
import { IResponse } from "../types/response.type";


export const addUsers = async(req:Request,res:Response)=>{
    try{
        const user : IResponse = await addUser(req.body)
        return res.status(user.code).send(user)   
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
} 

export const allUsers = async(req:Request,res:Response)=>{
   
    try{
        const users = await fetchAllUser()
        return res.status(users.code).send(users)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
   
}

export const findUser = async(req:Request,res:Response)=>{

    try{
        const user = await findUserById(req.params.id)
       
        return res.status(user.code).send(user)
    }
    catch(e){
            console.log(e)
            return res.status(500).send("SERVER ERROR")
        }
}

export const deletedUser = async(req:Request,res:Response)=>{

    try{
        const user = await deleteUser(req.params.id)
        return res.status(user.code).send(user)

    }catch(e){
            console.log(e)
            return res.status(500).send("SERVER ERROR")
        }
}