import { Request,Response } from "express";
import { User } from "../entities/user/User.entity";
import { AppDataSource } from "../utils/data-source";
import jwt from "jsonwebtoken";

export const loginService = async(req:Request,res:Response)=>{
 
    const userData = await AppDataSource
    .getRepository(User)
    .findOne({
        where :{
            email : req.body.email,
            password:req.body.password
        }
    })

    if(userData){
        let token = jwt.sign( { user: userData }, process.env.SECRET_KEY, { expiresIn: 86400 } )
        if(token){
            return token  
        }
        else{
            return {message:'token invalid!'}
        }
    }
    else{
        return { message: 'Invalid UserID or Password',   data: {}}
    }
}