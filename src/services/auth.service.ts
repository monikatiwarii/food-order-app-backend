import { Request, Response } from "express";
import { User } from "../entities/user/User.entity";
import { AppDataSource } from "../utils/data-source";
import jwt from "jsonwebtoken";
const jwtKey = "food_order_key"//process.env.JWT_SECRET_KEY;
export const loginService = async (userCredential: any) => {

    try {
        const userData: any = await AppDataSource
            .getRepository(User)
            .findOne({
                where: {
                    email: userCredential.email,
                    password: userCredential.password
                }
            })

        if (userData) {
            let token = jwt.sign(userData['id'], jwtKey, { expiresIn: 86400 })
            return {
                token
            }
        }
    }
    catch (e) {
        console.log(e)
        return e.message
    }

}