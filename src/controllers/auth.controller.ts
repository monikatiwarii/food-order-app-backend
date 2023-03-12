import { Request,Response } from "express";
import { loginService } from "../services/auth.service";
import { Success } from "../utils/restResponse";

export const loginController = async(req:Request,res:Response)=>{
    try{
        const login = await loginService(req.body)
        return res.status(login.code).send(login)
    }
    catch(e){
        console.log(e)
        return res.status(500).send("SERVER ERROR")
    }
}