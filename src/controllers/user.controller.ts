import { fetchAllUser,addUser, deleteUser, findUserById} from "../services/user.service";
import { Request,Response } from "express";


export const addUsers = async(req:Request,res:Response)=>{
    try{
        const user = await addUser(req,res)
        return res.status(200).send({message:'Users',data:user})   
    }
    catch(error){
        console.log(error)
        return res.status(500).send({message:'server error'})
    }
} 

export const allUsers = async(req:Request,res:Response)=>{
   
    try{
        const users = await fetchAllUser()

        if(users.length === 0){
            return res.status(404).send({message:'No record found!'})
        }
        else{
            return res.status(200).send({message:'Users',data:users})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).send({message:'server error'})
    }
   
}

export const findUser = async(req:Request,res:Response)=>{

    try{
        const user = await findUserById(req.params.id)

        if(!user){
            return res.status(404).send({message:'No record found!'})
        }
        else{
            return res.status(200).send({message:'user',data:user})

        }
    }catch(error){
            console.log(error)
            return res.status(500).send({message:'server error'})
        }
}

export const deletedUser = async(req:Request,res:Response)=>{

    try{
        const user = await deleteUser(req.params.id)
        if(user.valid)
            res.status(200).send(user)
        else 
            res.status(404).send(user)

    }catch(error){
            console.log(error)
            return res.status(500).send({message:'server error'})
        }
}