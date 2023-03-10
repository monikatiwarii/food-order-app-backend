import { Request, Response } from "express";
import { User } from "../entities/user/User.entity";
import { AppDataSource } from "../utils/data-source";
import { Error, Success } from "../utils/restResponse";
import jwt from "jsonwebtoken";
import { IResponse } from "../types/response.type";
const jwtKey = "food_order_key"//process.env.JWT_SECRET_KEY;

export const loginService = async (userCredential: any) : Promise<IResponse> => {
    
    try {
        const userData: any = await AppDataSource
            .getRepository(User)
            .findOne({
                where: {
                    email: userCredential.email,
                    password: userCredential.password
                }
            })
        if (!!userData) {
            let token  = jwt.sign(
                {
                    user_id : userData['id']
                }, 
                jwtKey, 
                { 
                    expiresIn: 60 * 60 
                }
            )
            return Success('Login Successfull!', {token})
        } else {
            return Error('Login Credentials are invalid!', [], 401)
        }
    }
    catch (e) {
        console.log(e)
        return Error(e.message)
    }

}