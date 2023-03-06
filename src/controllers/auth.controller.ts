import { Request,Response } from "express";
import { loginService } from "../services/auth.service";

export const loginController = async(req:Request,res:Response)=>{
    console.log('login controller--------------',req.body)
    try{
        const login = await loginService(req,res)
        return res.status(200).send({message:'login',token:login})
    }
    catch(e){
        console.log(e)
        res.status(500).send({message:'server error',data:e})
    }
}