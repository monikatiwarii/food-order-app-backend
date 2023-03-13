import { Request, Response } from "express";
import { IResponse } from "../types/restResponse";
import { addCoupon as AC, updateCoupon as UC, fetchCouponData as FCD } from "../services/coupon.service";

export const addCoupon = async (req: Request, res: Response) => {    
    let cartData: IResponse = await AC(req)
    return res.status(cartData.code).send(cartData)
}

export const updateCoupon = async (req: Request, res: Response) => {    
    let cartData: IResponse = await UC(req)
    return res.status(cartData.code).send(cartData)
}

export const fetchCouponData = async (req: Request, res: Response) => {    
    let cartData: IResponse = await FCD(req.params.couponName)
    return res.status(cartData.code).send(cartData)
}