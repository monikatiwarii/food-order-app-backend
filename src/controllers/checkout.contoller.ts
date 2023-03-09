import { Request, Response } from "express";
import { IResponse } from "../types/response.type";
import { checkOut as C } from "../services/checkout.service";

export const checkOut = async (req: Request, res: Response) => {    
    let checkOutData: IResponse = await C(req)
    return res.status(checkOutData.code).send(checkOutData)
}