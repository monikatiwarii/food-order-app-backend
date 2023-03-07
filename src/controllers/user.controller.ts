import { fetchAllUser,addUser, deleteUser, findUserById} from "../services/user.service";
import { Request,Response } from "express";


export const addUsers = async(req:Request,res:Response)=>{
    try{
        const user = await addUser(req,res)
        return res.status(200).send({message:'Users',data:user})   
    }
    catch(e){
        console.log(e)
        return res.status(500).send({message:e.message})
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
    catch(e){
        console.log(e)
        return res.status(500).send({message:e.message})
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
    }catch(e){
            console.log(e)
            return res.status(500).send({message:e.message})
        }
}

export const deletedUser = async(req:Request,res:Response)=>{

    try{
        const user = await deleteUser(req.params.id)
        if(user.valid)
            res.status(200).send(user)
        else 
            res.status(404).send(user)

    }catch(e){
            console.log(e)
            return res.status(500).send({message:e.message})
        }
}