import { Request, Response } from "express";
import { IResponse } from "../types/response.type";
import { updateCart as UC } from "../services/cart.service";

export const updateCart = async (req: Request, res: Response) => {    
    let cartData: IResponse = await UC(req)
    return res.status(cartData.code).send(cartData)
}