import { Request,Response } from "express";
import { loginService } from "../services/auth.service";

export const loginController = async(req:Request,res:Response)=>{
    try{
        const login = await loginService(req.body)

        return res.status(200).send({message:'login',data:login})
    }
    catch(e){
        console.log(e)
        return res.status(500).send({message:e.message})
    }
}