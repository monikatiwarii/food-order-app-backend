import { Request, Response } from "express";
import { IResponse } from "../types/restResponse";
import { updateCart as UC, fetchCartData as FC } from "../services/cart.service";

export const updateCart = async (req: Request, res: Response) => {    
    let cartData: IResponse = await UC(req)
    return res.status(cartData.code).send(cartData)
}

export const fetchCartData = async (req: Request, res: Response) => {    
    let userId: number = req['user_id']
    
    let cartData: IResponse = await FC(userId)
    return res.status(cartData.code).send(cartData)
}